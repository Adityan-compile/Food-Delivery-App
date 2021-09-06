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

exports.searchItems = (req, res) => {
  let { query } = req.query;

  item
    .find({
      name: {
        $regex: new RegExp(query, i),
      },
    })
    .then((items) => {
      res.status(200).json({ status: 200, items: items });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: "Internal Server Error" });
    });
};
