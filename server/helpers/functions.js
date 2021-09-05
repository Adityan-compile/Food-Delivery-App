"use strict";

const jwt = require("jsonwebtoken");
const token = require("../models/token");

exports.generateAccessToken = async (user, expiry) => {
  return new Promise(async (resolve, reject) => {
    await jwt.sign(
      user,
      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: expiry,
      },
      (err, generatedToken) => {
        if (err) return resolve(null);
        resolve(generatedToken);
      }
    );
  });
};

exports.generateRefreshToken = async (user) => {
  return new Promise(async (resolve, reject) => {
    user.date_initialized = Date.now();
    await jwt.sign(
      user,
      process.env.REFRESH_TOKEN_KEY,
      (err, generatedToken) => {
        if (err) return resolve(null);
        let newToken = new token({ token: generatedToken });
        newToken.save(async (err, savedToken) => {
          if (err) {
            console.log(err);
            resolve(null);
          }
          resolve(savedToken.token);
        });
      }
    );
  });
};

exports.verifyToken = async (refreshToken) => {
  return new Promise(async (resolve, reject) => {
    let savedToken = await token.findOne({ token: refreshToken });
    if (savedToken) {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
        if (err) return reject("error");
        delete user.iat;
        delete user.exp;
        resolve(user);
      });
    } else {
      reject("error");
    }
  });
};

exports.deleteToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    try {
      token
        .remove({ token: refreshToken })
        .then((deletedToken) => {
          resolve(null);
        })
        .catch((err) => reject(err));
    } catch (e) {
      reject(e);
    }
  });
};
