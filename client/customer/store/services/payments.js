import axios from './axios';
import {reject} from 'lodash';

const payments = {
  getPublishableKey: () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/payments/keys/publishable')
        .then(res => resolve(res.publishableKey))
        .catch(e => reject(e));
    });
  },
};

export default payments;
