import axios from './axios';

const payments = {
  getPublishableKey: () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/payments/keys/publishable')
        .then(({data}) => {
          resolve(data.publishableKey);
        })
        .catch(e => reject(e));
    });
  },
  getPaymentIntent: () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/payments/intents/create')
        .then(({data}) =>
          resolve({
            clientSecret: data.clientSecret,
            ephemeralKey: data.ephemeralKey,
            customerId: data.customer,
          }),
        )
        .catch(e => reject(e));
    });
  },
};

export default payments;
