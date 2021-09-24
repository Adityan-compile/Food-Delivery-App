'use strict';

const review = require('../models/review.js');
const restaurant = require('../models/restaurant.js');
const item = require('../models/item.js');
const bcrypt = require('bcrypt');
const {
  generateAccessToken,
  generateRefreshToken,
} = require('../utils/helpers.js');

const uploadFile = require('../utils/upload');

exports.getRestaurants = (req, res) => {
  restaurant
    .find({}, '-password')
    .then((restaurants) => {
      res.status(200).json({ status: 200, restaurants: restaurants });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    });
};

exports.getRestaurantById = (req, res) => {
  const id = req.query.id;

  if (!id) return res.status(400).json({ status: 400, message: 'Bad Request' });

  restaurant
    .findOne(
      {
        _id: id,
      },
      '-password',
    )
    .then((restaurant) => {
      item
        .find({ restaurant: id })
        .then((items) => {
          restaurant.items = items;
          res.status(200).json({ status: 200, restaurant: restaurant });
        })
        .catch((e) => {
          res
            .status(500)
            .json({ status: 500, message: 'Internal Server Error' });
        });
    })
    .catch((err) => {
      console.log(err);
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

  let newReview = new review({
    restaurant: body.restaurant,
    user: user._id,
    review: body.review,
  });

  newReview.save((err, doc) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: 500, message: 'Internal Server Error' });
    } else {
      res.status(200).json({
        status: 200,
        message: 'Review Added successfully',
        review: doc,
      });
    }
  });
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
            return res
              .status(401)
              .json({ status: 401, message: 'Authentication Failed' });
          }
        } catch (e) {
          return res
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
  let body = req.body;
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  if (!req.file)
    return res.status(400).json({ status: 400, message: 'Image Required' });

  const count = await restaurant.countDocuments({ email: body.email });
  if (count > 0) {
    return res.status(409).json({
      status: 409,
      message: 'User already Exists',
    });
  }

  uploadFile(req.file)
    .then(async (uploadedFile) => {
      // image = res.url;
      // console.log('image', image);
      try {
        body.password = await bcrypt.hash(body.password, 10);
      } catch (err) {
        return res
          .status(500)
          .json({ status: 500, message: 'Error Hashing Password' });
      }

      const newRestaurant = new restaurant({
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone,
        address: body.address,
        zipcode: body.zip,
        rating: 0,
        cuisines: body.cuisines,
        reviews: [],
        image: uploadedFile.url,
      });

      newRestaurant.save(async (err, saved) => {
        if (err) {
          return res.status(401).json({
            status: 401,
            message: 'Error Creating User',
          });
        }
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
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ status: 500, message: 'Internal Server Error' });
    });
};

exports.editAccount = async (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  if (
    body.password &&
    body.password.length >= 8 &&
    body.password !== undefined &&
    body.password !== null
  ) {
    try {
      body.password = await bcrypt.hash(body.password, 10);
    } catch (e) {
      return res
        .status(500)
        .json({ status: 500, message: 'Internal Server Error' });
    }
  }

  try {
    const doc = await restaurant.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.user._id) },
      body,
      {
        new: true,
      },
    );
    doc.password = undefined;
    res.status(200).json({
      status: 200,
      message: 'Resource Updated Successfully',
      updated: doc,
    });
  } catch (e) {
    res.status(404).json({ status: 404, message: 'User not Found' });
  }
};

exports.deleteAccount = async (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken || refreshToken === undefined || refreshToken === null) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  try {
    const counted = await restaurant.remove({
      _id: mongoose.Types.ObjectId(req.user._id),
    });
    if (counted === 0) {
      return res.status(409).json({ status: 409, message: 'Delete Error' });
    }
    await deleteToken(refreshToken);
    res.status(202).json({ status: 202, message: 'Delete Successful' });
  } catch (e) {
    return res.status(409).json({ status: 409, message: 'Delete Error' });
  }
};
