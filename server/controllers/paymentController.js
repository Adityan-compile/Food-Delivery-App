const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cart = require('../models/cart');
const user = require('../models/user');

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

      console.log(amount);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'inr',
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
