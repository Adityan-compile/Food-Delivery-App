'use strict';

const user = require('../models/user');
const bcrypt = require('bcrypt');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  removeToken,
} = require('../utils/helpers.js');

exports.login = (req, res) => {
  const body = req.body;
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ status: 400, message: 'Bad Request' });
  }

  user
    .findOne({ email: body.email })
    .then(async (foundUser) => {
      if (foundUser) {
        try {
          const status = await bcrypt.compare(
            body.password,
            foundUser.password,
          );
          if (status) {
            foundUser.password = undefined;
            const accessToken = await generateAccessToken(
              foundUser.toJSON(),
              '60m',
            );
            const refreshToken = await generateRefreshToken(foundUser.toJSON());
            if (refreshToken === null || accessToken === null) {
              return res
                .status(401)
                .json({ status: 401, message: 'Authentication Failed' });
            }
            res.status(200).json({
              status: 200,
              message: 'Authentication Successful',
              user: foundUser,
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

  const count = await user.countDocuments({ email: body.email });
  if (count > 0) {
    return res.status(409).json({
      status: 409,
      message: 'User already Exists',
    });
  }

  body.password = await bcrypt.hash(body.password, 10);

  const newUser = new user({
    name: body.name,
    email: body.email,
    password: body.password,
    address: body.address,
    orders: [],
  });
  newUser.save(async (err, savedUser) => {
    if (err) {
      console.log(err);
      res.status(401);
      res.json({
        status: 401,
        message: 'Error Creating User',
      });
    } else {
      savedUser.password = undefined;
      savedUser = savedUser.toJSON();
      const accessToken = await generateAccessToken(savedUser, '60m');
      const refreshToken = await generateRefreshToken(savedUser);
      if (refreshToken === null || accessToken === null) {
        return res
          .status(401)
          .json({ status: 401, message: 'Error Creating User' });
      }
      res.status(201).json({
        status: 201,
        message: 'User Created Successfully',
        user: savedUser,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  });
};

exports.regenerateToken = (req, res) => {
  const data = req.body;
  if (!data.refreshToken) {
    return res.status(401).json({ status: 401, message: 'Bad Request' });
  }

  verifyToken(data.refreshToken)
    .then(async (user) => {
      const accessToken = await generateAccessToken(user, '60m');
      res.status(200).json({
        status: 200,
        message: 'Success',
        user: user,
        accessToken: accessToken,
        refreshToken: data.refreshToken,
      });
    })
    .catch((err) => {
      res.status(401).json({ status: 401, message: 'Invalid Refresh Token' });
    });
};

exports.logout = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    await removeToken(refreshToken);
    res.status(200).json({ status: 200, message: 'Logout Successful' });
  } catch (e) {
    res.status(204).json({ status: 204, message: 'Logout Failed' });
  }
};
