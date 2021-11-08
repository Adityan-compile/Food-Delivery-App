import pull from 'lodash/pull';
import storage from '../../storage';

const favourites = {
  loadFavourites: () => {
    return new Promise((resolve, reject) => {
      storage
        .get('FAVOURITES')
        .then(res => {
          if (res === null || res === undefined) return resolve([]);
          resolve(res);
        })
        .catch(e => resolve([]));
    });
  },
  addToFavourites: restaurant => {
    return new Promise((resolve, reject) => {
      storage
        .get('FAVOURITES')
        .then(res => {
          if (res === null || res === undefined) {
            storage
              .set('FAVOURITES', [restaurant])
              .then(() => {
                resolve(null);
              })
              .catch(e => reject(e));
          } else {
            storage.set('FAVOURITES', res.push(restaurant)).then(() => {
              resolve(null);
            });
          }
        })
        .catch(e => reject(e));
    });
  },
  removeFromFavourites: restaurant => {
    return new Promise((resolve, reject) => {
      storage
        .get('FAVOURITES')
        .then(res => {
          if (res === null || res === undefined) return resolve(null);
          pull(res, restaurant);
          resolve(null);
        })
        .catch(e => reject(e));
    });
  },
};

export default favourites;
