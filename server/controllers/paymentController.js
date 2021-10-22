const mongoose = require('mongoose');
const stripe = require('../config/stripe');
const cart = require('../models/cart');
const user = require('../models/user');

const ObjectId = mongoose.Types.ObjectId;

exports.getPublishableKey = (req, res) => {
  res.status(200).json({
    status: 200,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

exports.createPaymentIntent = async (req, res) => {
  const user = req.user;
  let amount = 0;

  cart
    .findOne({ user: ObjectId(user._id) })
    .populate('items.item')
    .exec()
    .then((result) => {
      result.items.forEach((elem) => {
        amount += elem.item.price * elem.quantity;
      });
    })
    .catch((e) =>
      res.status(500).json({ status: 500, message: 'Cannot Load User' }),
    );

  var customer = {};

  if (user.customerId.length === 0) {
    customer = await stripe.customers.create();
    user
      .updateOne(
        { _id: ObjectId(user._id) },
        {
          customerId: customer.id,
        },
      )
      .then(async (res) => {
        if (res.nModified === 0) {
          await stripe.customers.del(customer.id);
          res
            .status(409)
            .json({ status: 409, message: 'Customer Creation Error' });
        }
      })
      .catch(async (e) => {
        await stripe.customers.del(customer.id);
        res
          .status(409)
          .json({ status: 409, message: 'Customer Creation Error' });
      });
  } else {
    customer.id = user.customerId;
  }

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' },
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'inr',
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
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
};
