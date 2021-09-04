"use strict";

var user = require("../models/user");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("../helpers/functions.js");

const ENV = process.env;

exports.login = (req, res) => {
  let body = req.body;
  if (!body || Object.keys(body).length === 0)
    return res.status(400).json({ status: 400, message: "Bad Request" });

  user
    .findOne({ email: body.email })
    .then(async (foundUser) => {
      if (foundUser) {
        try {
          let status = await bcrypt.compare(body.password, foundUser.password);
          if (status) {
            foundUser.password = undefined;
            var accessToken = await generateAccessToken(
              foundUser.toJSON(),
              "60m"
            );
            var refreshToken = await generateRefreshToken(foundUser.toJSON());
            if (refreshToken === null || accessToken === null) {
              return res
                .status(401)
                .json({ status: 401, message: "Authentication Failed" });
            }
            res.status(200).json({
              status: 200,
              message: "Authentication Successful",
              user: foundUser,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
          } else {
            res
              .status(401)
              .json({ status: 401, message: "Authentication Failed" });
          }
        } catch (e) {
          res
            .status(500)
            .json({ status: 500, message: "Internal Server Error" });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    });
};

exports.signup = async (req, res) => {
  let body = req.body;
  if (!body || Object.keys(body).length === 0)
    return res.status(400).json({ status: 400, message: "Bad Request" });

  let count = await user.countDocuments({ email: body.email });
  if (count > 0) {
    return res.status(409).json({
      status: 409,
      message: "User already Exists",
    });
  }

  body.password = await bcrypt.hash(body.password, 10);

  var newUser = new user({
    name: body.name,
    email: body.email,
    password: body.password,
    orders: [],
  });
  newUser.save(async (err, savedUser) => {
    if (err) {
      console.log(err);
      res.status(401);
      res.json({
        status: 401,
        message: "Error Creating User",
      });
    } else {
      savedUser.password = undefined;
      savedUser = savedUser.toJSON();
      var accessToken = await generateAccessToken(savedUser, "60m");
      var refreshToken = await generateRefreshToken(savedUser);
      if (refreshToken === null || accessToken === null) {
        return res
          .status(401)
          .json({ status: 401, message: "Error Creating User" });
      }
      res.status(201).json({
        status: 201,
        message: "User Created Successfully",
        user: savedUser,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  });
};

exports.regenerateToken = (req, res) => {
  let data = req.body;
  if (!data.refreshToken)
    return res.status(401).json({ status: 401, message: "Bad Request" });

  verifyToken(data.refreshToken)
    .then(async(user) => {
      var accessToken = await generateAccessToken(user, "60m");
      res.status(200).json({
        status: 200,
        message: "Success",
        accessToken: accessToken,
        refreshToken: data.refreshToken,
      });
    })
    .catch((err) => {
      res.status(401).json({ status: 401, message: "Invalid Refresh Token" });
    });
};
