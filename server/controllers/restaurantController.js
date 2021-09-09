'use strict';

const mongoose = require('mongoose');
const review = require('../models/review.js');
const restaurant = require('../models/restaurant.js');
const bcrypt = require('bcrypt');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../helpers/functions.js');

exports.getRestaurants = (req, res) => {
  let count = 0;

  restaurant
    .countDocuments({})
    .then((res) => (count = res))
    .catch((err) => (count = 1000));

  restaurant
    .aggregate([
      {
        $match: {},
      },
      {
        $project: {
          password: 0,
        },
      },
      {
        $sample: {
          size: count,
        },
      },
    ])
    .then((restaurants) => {
      res.status(200).json({ status: 200, restaurants: restaurants });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });
};

exports.getRestaurantById = (req, res) => {
  const { id } = req.query;

  if (!id) return res.status(400).json({ status: 400, message: 'Bad Request' });

  restaurant
    .findOne({
      _id: mongoose.types.ObjectId(id),
    })
    .then((restaurant) => {
      res.status(200).json({ status: 200, restaurant: restaurant });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });
};

exports.addReview = async (req, res) => {
  let body = req.body;
  let user = req.user;
  let reviews = [];
  try {
    reviews = await review.find({ restaurant: body.restaurant });
  } catch (e) {
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }

  let found = false;

  reviews.forEach((item) => {
    if (item.user === user._id) {
      found = true;
    }
  });

  if (found) {
    return res
      .status(409)
      .json({ status: 409, message: 'Review Already Found' });
  }

  reviews.reviews.push({
    user: user._id,
    review: body.review,
  });

  res.status(200).json({ status: 200, message: 'Review Added successfully' });
};

exports.login = (req, res) => {
  const body = req.body;
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  restaurant
    .findOne({ email: body.email })
    .then(async (found) => {
      if (found) {
        try {
          const status = await bcrypt.compare(body.password, found.password);
          if (status) {
            found.password = undefined;
            const accessToken = await generateAccessToken(
              found.toJSON(),
              '60m',
            );
            const refreshToken = await generateRefreshToken(found.toJSON());
            if (refreshToken === null || accessToken === null) {
              return res
                .status(401)
                .json({ status: 401, message: 'Authentication Failed' });
            }
            res.status(200).json({
              status: 200,
              message: 'Authentication Successful',
              user: found,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
          } else {
            res
              .status(401)
              .json({ status: 401, message: 'Authentication Failed' });
          }
        } catch (e) {
          res
            .status(500)
            .json({ status: 500, message: 'Internal Server Error' });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });
};

exports.signup = async (req, res) => {
  const body = req.body;
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  const count = await restaurant.countDocuments({ email: body.email });
  if (count > 0) {
    return res.status(409).json({
      status: 409,
      message: 'User already Exists',
    });
  }

  body.password = await bcrypt.hash(body.password, 10);

  const newRestaurant = new user({
    name: body.name,
    email: body.email,
    password: body.password,
    phone: body.phone,
    address: body.address,
    zipcode: body.zip,
    rating: 0,
  });
  newRestaurant.save(async (err, saved) => {
    if (err) {
      console.log(err);
      res.status(401);
      res.json({
        status: 401,
        message: 'Error Creating User',
      });
    } else {
      saved.password = undefined;
      saved = saved.toJSON();
      const accessToken = await generateAccessToken(saved, '60m');
      const refreshToken = await generateRefreshToken(saved);
      if (refreshToken === null || accessToken === null) {
        return res
          .status(401)
          .json({ status: 401, message: 'Error Creating User' });
      }
      res.status(201).json({
        status: 201,
        message: 'Restaurant Created Successfully',
        restaurant: saved,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  });
};
