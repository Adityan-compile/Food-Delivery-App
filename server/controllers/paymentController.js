const stripe = require('../config/stripe');

exports.getPublishableKey = (req, res) => {
  res.status(200).json({
    status: 200,
    PublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

exports.createPaymentSheet = async (req, res) => {
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' },
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    payment_method_types: [
      'bancontact',
      'card',
      'ideal',
      'sepa_debit',
      'sofort',
    ],
  });
  res.json({
    status: 200,
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
};
