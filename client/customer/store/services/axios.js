import axios from 'axios';
import constants from '../../constants';
import {resolveConfig} from 'prettier';
import storage from '../../storage';

const instance = axios.create({});

let accessToken = '';
let refreshToken = '';

storage
  .get('USER')
  .then(user => {
    accessToken = user.accessToken;
    refreshToken = user.refreshToken;
  })
  .catch(e => console.error(e));

console.log(accessToken, refreshToken);

instance.defaults.baseURL = constants.API_URL;

// instance.defaults.headers['Authorization'] = refreshToken
//   ? `Bearer ${refreshToken}`
//   : '';

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = refreshToken
      ? `Bearer ${refreshToken}`
      : '';

    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    return new Promise((resolve, reject) => {
      if (err.response.status === 401) {
        instance
          .post('/tokens/regenerate', {
            refreshToken: refreshToken ? refreshToken : '',
          })
          .then(({status, data}) => {
            if (status === 200) {
              storage.set('USER', {
                user: data.user,
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
              });
              accessToken = data.accessToken;
              refreshToken = data.refreshToken;
              err.config._isRetryRequest = true;
              err.config.headers.Authorization = `Bearer ${refreshToken}`;
              axios(err.config);
            } else {
              storage.remove('USER');
            }
          })
          .catch(err => {
            storage.remove('USER');
          });
      } else {
        const originalRequest = err.config;
        return instance(originalRequest);
      }
    });
  },
);

export default instance;
