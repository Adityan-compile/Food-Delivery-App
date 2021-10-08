import axios from 'axios';
import constants from '../../constants';
import emitter from './emitter';
import storage from '../../storage';

const instance = axios.create({});

let accessToken = '';
let refreshToken = '';

storage
  .get('USER')
  .then(user => {
    if (user === null || user === undefined) {
      accessToken = '';
      refreshToken = '';
    } else {
      accessToken = user.accessToken;
      refreshToken = user.refreshToken;
    }
  })
  .catch(e => console.error(e));

instance.defaults.baseURL = constants.API_URL;

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = accessToken
      ? `Bearer ${accessToken}`
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
    if (err.response.status === 401 || err.config_isRetryRequest === false) {
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
            err.config.headers.Authorization = `Bearer ${accessToken}`;
            instance(err.config);
          } else {
            storage.remove('USER');
            emitter.emit('logout');
          }
        })
        .catch(err => {
          storage.remove('USER');
          emitter.emit('logout');
        });
    } else if (err.response.status === 500) {
      return err;
    } else {
      const originalRequest = err.config;
      return instance(originalRequest);
    }
  },
);

export default instance;
