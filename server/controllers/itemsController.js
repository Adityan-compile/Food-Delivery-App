"use strict";

const item = require("../models/item.js");

exports.getItems = (req, res) => {
  item
    .find()
    .then((items) => {
      res.status(200).json({
        status: 200,
        items: items,
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    });
};
