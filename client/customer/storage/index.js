import {AsyncStorage as store} from '@react-native-community/async-storage';

const storage = {
  get: key => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await store.getItem(JSON.parse(key));
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  },
  set: (key, value) => {
    return new Promise(async (resolve, reject) => {
      try {
        await store.setItem(JSON.stringify(key), value);
        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  },
  remove: key => {
    return new Promise(async (resolve, reject) => {
      try {
        await store.removeItem(key);
        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default storage;
