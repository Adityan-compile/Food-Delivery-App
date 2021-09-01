'use strict';

const mongoose = require('mongoose');
const blueBird = require('bluebird');

mongoose.promise = blueBird;

let URI = `${process.env.DB_HOST}/${process.env.DB_NAME}`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false });

const DB = mongoose.connection;

module.exports = DB;
