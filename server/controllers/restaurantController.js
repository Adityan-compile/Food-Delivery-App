'use strict';

const mongoose = require('mongoose');
const review = require('../models/review.js');
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

// exports.addReview = async(req, res) => {
//   let body = req.body;
//   let user = req.user;
//   let reviews = [];
//   try {
//      reviews = await review.find({ restaurant: body.restaurant });
//   } catch (e) {
//     res.status(500).json({ status: 500, message: 'Internal Server Error' });
//   }

//    let found = false;

//   reviews.forEach(item => {
//     if(item.user === user._id){
//       found = true;
//     }
//   });

//   if(found){
//     return res.status(409).json({ status: 409, message: "Review Already Found"});
//   }

//   reviews.reviews.push({

//   });

// };
