'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const DB = require('./config/database');

// Configure Dotenv
const env = dotenv().config({
  path: '../.env'
});
if(env.error){
  console.error("Error Loading Environment Variables", "\n", env.error);
  process.exit(1);
}else{
  console.info('Environment Variables Loaded Successfully');
}

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect and Setup database
DB.on('open', () => {
  console.log('Database connected Successfully');
});

DB.on('error', (err) => {
  console.log('Error connecting to Database');
  console.log(err);
  process.exit(1);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
