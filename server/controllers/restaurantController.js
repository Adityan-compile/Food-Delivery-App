'use strict';

const restaurant = require('../models/restaurant.js');

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
