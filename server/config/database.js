'use strict'

const mongoose = require('mongoose')
const blueBird = require('bluebird')

mongoose.promise = blueBird

const URI = process.env.DB_URI

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

//     useFindAndModify: false

mongoose.connect(URI, config)

const db = mongoose.connection

module.exports = db
