import axios from './axios';

const cart = {
  addToCart: (item, quantity) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/cart/add', {
          item: item,
          quantity: quantity,
        })
        .then(({data, status}) => {
          if (status === 200) {
            resolve(data.cart);
          } else {
            reject(status);
          }
        })
        .catch(err => reject(err));
    });
  },
};

export default cart;
