import payments from '../services/payments';

const PaymentsProvider = {
  getPublishableKey: payments.getPublishableKey,
  getPaymentIntent: payments.getPaymentIntent,
};

export default PaymentsProvider;
