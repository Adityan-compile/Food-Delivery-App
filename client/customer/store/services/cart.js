import axios from './axios';

const cart = {
  addToCart: (item, quantity) => {
    return new Promise((resolve, reject) => {
      axios
        .post('/cart/add', {
          item: item,
          quantity: quantity,
        })
        .then(({status}) => {
          if (status === 200) {
            resolve(true);
          } else {
            reject(status);
          }
        })
        .catch(err => reject(err));
    });
  },
  getCart: () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/cart')
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
  deleteFromCart: item => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/cart/delete/${item}`)
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
