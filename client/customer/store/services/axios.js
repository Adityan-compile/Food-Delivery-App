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

instance.defaults.common.headers['Authorization'] = refreshToken
  ? `Bearer ${refreshToken}`
  : '';

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
            } else {
            }
          })
          .catch(err => {});
      } else {
        const originalRequest = err.config;
        return instance(originalRequest);
      }
    });
  },
);

export default instance;
