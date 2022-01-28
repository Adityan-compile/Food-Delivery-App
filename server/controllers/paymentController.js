const mongoose = require('mongoose');
const stripe = require('../config/stripe');
const cart = require('../models/cart');

const ObjectId = mongoose.Types.ObjectId;

exports.getPublishableKey = (req, res) => {
  res.status(200).json({
    status: 200,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

exports.createPaymentIntent = (req, res) => {
  const user = req.user;

  cart
    .findOne({ user: ObjectId(user._id) })
    .populate('items.item')
    .exec()
    .then(async (result) => {
      let amount = 0;
      result.items.forEach((elem) => {
        amount += elem.item.price * elem.quantity;
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'inr',
        receipt_email: user.email,
      });
      res.json({
        status: 200,
        clientSecret: paymentIntent.client_secret,
      });
    })
    .catch((e) =>
      res.status(500).json({ status: 500, message: 'Cannot Load User' }),
    );
};
