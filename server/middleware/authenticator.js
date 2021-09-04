"use strict";

const jwt = require("jsonwebtoken");
const functions = require("../helpers/functions");
let ENV = process.env;

module.exports = async (req, res, next) => {
  const header = req.headers["authorization"];

  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = await jwt.verify(token, ENV.ACCESS_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
