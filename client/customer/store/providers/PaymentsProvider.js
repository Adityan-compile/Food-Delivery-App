import payments from '../services/payments';

const PaymentsProvider = {
  getPublishableKey: payments.getPublishableKey,
};

export default PaymentsProvider;
