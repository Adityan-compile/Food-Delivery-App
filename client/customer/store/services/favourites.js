import storage from '../../storage';

const favourites = {
  loadFavourites: () => {
    return new Promise((resolve, reject) => {
      storage
        .get()
        .then(res => resolve(res))
        .catch(e => resolve([]));
    });
  },
};

export default favourites;
