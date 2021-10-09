'use strict';

const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_KEY } = process.env;

module.exports = async (req, res, next) => {
  const header = req.headers.authorization;

  const token = header && header.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      status: 403,
      message: 'Token Required',
    });
  }
  try {
    const decoded = await jwt.verify(token, ACCESS_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: 'Invalid Token',
    });
  }
  return next();
};
