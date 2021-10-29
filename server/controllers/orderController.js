const cart = require('../models/cart');
const order = require('../models/order');

const stripe = require('../config/stripe');

exports.saveOrder = (req, res) => {
  const user = req?.user;
  const body = req?.body;

  if (!body.clientSecret || body.clientSecret.length === 0)
    return res.status(400).json({
      status: 400,
      message: 'Bad Request',
    });

  cart
    .findOne({
      user: user._id,
    })
    .then(async (result) => {
      const paymentIntent = await stripe.paymentIntents.retrive(
        body?.clientSecret,
      );
      const newOrder = new order({
        customer: user._id,
        payment: paymentIntent,
        items: result?.items,
      });
      newOrder
        .save()
        .then((savedOrder) => {
          res.status(200).json({ status: 200, message: 'Order Saved' });
        })
        .catch((e) => {
          res.status(500).json({ status: 500, message: 'Cannot Save Order' });
        });
    })
    .catch((e) => {
      res.status(500).json({ status: 500, message: 'Cannot Save Order' });
    });
};
