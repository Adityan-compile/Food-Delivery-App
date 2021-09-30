const cart = require('../models/cart');

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const _ = require('lodash');

exports.addToCart = async (req, res) => {
  const user = req.user;

  const body = req.body;

  let count = 0;

  try {
    count = await cart.countDocuments({ user: ObjectId(user._id) });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }

  if (count === 0) {
    cart
      .create({
        user: ObjectId(user._id),
        items: [
          {
            item: body.item,
            quantity: body.quantity,
          },
        ],
      })
      .then((result) => {
        res.status(200).json({
          status: 200,
          message: 'Item Added to Cart',
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          status: 500,
          message: 'Internal Server Error',
        });
      });
  } else {
    cart
      .findOne({ user: ObjectId(user._id) })
      .then((result) => {
        result.items = result.items.map((obj) => {
          return {
            item: obj.item.toString(),
            quantity: obj.quantity,
          };
        });
        console.log(result.items);
        if (_.includes(result.items, body.item.toString())) {
          cart
            .updateOne(
              {
                _id: ObjectId(user._id),
                'items.item': body.item,
              },
              {
                $inc: {
                  'items.$.item.quantity': body.quantity,
                },
              },
            )
            .then((result) => {
              res.status(200).json({
                status: 200,
                message: 'Item Added to Cart',
              });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({
                status: 500,
                message: 'Internal Server Error',
              });
            });
        } else {
          cart
            .updateOne(
              { user: ObjectId(user._id) },
              {
                $push: {
                  items: {
                    item: body.item,
                    quantity: body.quantity,
                  },
                },
              },
            )
            .then((result) => {
              res.status(200).json({
                status: 200,
                message: 'Item Added to Cart',
              });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({
                status: 500,
                message: 'Internal Server Error',
              });
            });
        }
      })
      .catch((e) => {
        console.error(e);
        res.status(500).json({
          status: 500,
          message: 'Internal Server Error',
        });
      });
  }
};
