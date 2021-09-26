import axios from '../../axios';

const restaurants = {
  getAllRestaurants: () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/restaurants/all')
        .then(({status, data}) => {
          if (status === 200) {
            resolve(data.restaurants);
          } else {
            reject(status);
          }
        })
        .catch(e => reject(e));
    });
  },
  getRestaurantById: id => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/restaurants/find?id=${id}`)
        .then(({status, data}) => {
          if (status === 200) {
            data.restaurant.items = data.items;
            resolve(data.restaurant);
          } else {
            reject(status);
          }
        })
        .catch(e => reject(e));
    });
  },
};

export default restaurants;
