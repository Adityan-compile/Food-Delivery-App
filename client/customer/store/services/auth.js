import axios from 'axios';
import constants from '../../constants';
import emitter from './emitter';
import storage from '../../storage';

axios.defaults.baseURL = constants.API_URL;

const post = axios.post;

const auth = {
  login: userData => {
    return new Promise((resolve, reject) => {
      post('/users/login', userData)
        .then(({data, status}) => {
          if (status === 200) {
            storage
              .set('USER', {
                ...data.user,
                refreshToken: data.refreshToken,
                accessToken: data.accessToken,
              })
              .then(() => {
                emitter.emit('login', data.user);
                resolve(data);
              })
              .catch(e => reject(e));
          } else {
            return reject(data);
          }
        })
        .catch(err => reject(err));
    });
  },
  signup: userData => {
    return new Promise((resolve, reject) => {
      post('/users/register', userData)
        .then(({data, status}) => {
          if (status === 201) {
            storage
              .set('USER', {
                ...data.user,
                refreshToken: data.refreshToken,
                accessToken: data.accessToken,
              })
              .then(() => resolve(data))
              .catch(e => reject(e));
          } else {
            return reject(data);
          }
        })
        .catch(err => reject(err));
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      post('/auth/logout')
        .then(({data, status}) => {
          if (status === 200) {
            storage
              .remove('USER')
              .then(res => resolve(null))
              .catch(e => reject(e));
          } else {
            return reject(data);
          }
        })
        .catch(err => reject(err));
    });
  },
  getAuthState: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await storage.get('USER');
        if (!user) {
          resolve({
            authenticated: false,
          });
        } else {
          resolve({
            authenticated: true,
            user: user,
          });
        }
      } catch (e) {
        resolve({
          authenticated: false,
        });
      }
    });
  },
};

export default auth;
