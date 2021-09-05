"use strict";

const user = require("../models/user");
const { removeToken } = require("../helpers/functions.js");

exports.deleteAccount = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  const user = req.user;

  if (!refreshToken || refreshToken === undefined || refreshToken === null) {
    return res.status(400).json({ status: 400, message: "Bad Request" });
  }

  try {
    let counted = await user.remove({ email: user.email });
    if (counted === 0) {
      return res.status(409).json({ status: 409, message: "Delete Error" });
    }
    await removeToken();
    res.status(202).json({ status: 202, message: "Delete Successful" });
  } catch (e) {
    return res.status(409).json({ status: 409, message: "Delete Error" });
  }
};
