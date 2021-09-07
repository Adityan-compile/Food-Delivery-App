'use strict'

const item = require('../models/item.js')
const restaurant = require('../models/restaurant.js')

exports.getItems = (req, res) => {
  item
    .find()
    .then((items) => {
      res.status(200).json({
        status: 200,
        items: items
      })
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' })
    })
}

exports.searchItems = (req, res) => {
  const { query } = req.query

  item
    .find({
      name: {
        $regex: new RegExp(query, 'i')
      }
    })
    .then((items) => {
      restaurant
        .find({
          name: {
            $regex: new RegExp(query, 'i')
          }
        })
        .then((restaurants) => {
          res.status(200).json({
            status: 200,
            items: items,
            restaurants: restaurants
          })
        })
        .catch((err) => {
          res.status(200).json({
            status: 200,
            items: items
          })
        })
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: 'Internal Server Error' })
    })
}
