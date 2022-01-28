const cart = require('../models/cart');

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const _ = require('lodash');

exports.getCart = (req, res) => {
  const user = req.user;

  cart
    .findOne({ user: ObjectId(user._id) })
    .populate('items.item')
    .exec()
    .then((result) => {
      res.status(200).json({
        status: 200,
        cart: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        status: 500,
        message: 'Internal Server Error',
      });
    });
};

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
          cart: result,
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
        let items = result.items.map((obj) => {
          return obj.item.toString();
        });
        if (_.includes(items, body.item)) {
          cart
            .findOneAndUpdate(
              {
                user: user._id,
                items: {
                  $elemMatch: {
                    item: ObjectId(body.item),
                  },
                },
              },
              {
                $inc: {
                  'items.$.quantity': body.quantity,
                },
              },
              {
                new: true,
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

exports.deleteFromCart = (req, res) => {
  const user = req.user;

  const { item } = req.params;

  console.log(item);

  cart
    .findOneAndUpdate(
      { user: ObjectId(user._id) },
      {
        $pull: {
          items: {
            item: item,
          },
        },
      },
      {
        new: true,
      },
    )
    .exec()
    .then((result) => {
      res
        .status(200)
        .json({ status: 200, message: 'item remove from Cart', cart: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });
};
