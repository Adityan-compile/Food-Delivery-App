import axios from './axios';

const orders = {
  placeOrder: clientSecret => {
    return new Promise((resolve, reject) => {
      axios
        .post('/orders/new', {clientSecret: clientSecret})
        .then(() => {
          resolve(null);
        })
        .catch(e => reject(e));
    });
  },
  fetchOrders: () => {
    return new Promise((resolve, reject) => {
      axios
        .post('/orders')
        .then(({data}) => {
          resolve(data.orders);
        })
        .catch(e => reject(e));
    });
  },
};

export default orders;
