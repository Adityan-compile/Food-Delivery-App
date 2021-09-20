import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  get: key => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await AsyncStorage.getItem(key);
        const parsed = JSON.parse(res);
        resolve(parsed);
      } catch (e) {
        reject(e);
      }
    });
  },
  set: (key, value) => {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  },
  remove: key => {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem(key);
        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  },
};

export default storage;
