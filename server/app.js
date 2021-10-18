'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const chalk = require('chalk');

// Configure Dotenv
const env = require('dotenv').config({
  path: './config/.env',
});

if (env.error) {
  console.error(
    `[${new Date().toJSON()}] Error Loading Environment Variables`,
    '\n',
    env.error,
  );
  process.exit(1);
} else {
  console.info(
    chalk.bgBlue(`[${new Date().toJSON()}]`),
    chalk.green(`Environment Variables Loaded Successfully`),
  );
}

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect and Setup database
const db = require('./config/database.js');

db.on('open', () => {
  console.log(
    chalk.white.bgCyan(`[${new Date().toJSON()}]`),
    chalk.green(`Database connected`),
  );
});

db.on('error', (err) => {
  console.error(
    chalk.white.bgRed(`[${new Date().toJSON()}]`),
    chalk.red(`Error connecting to Database`),
  );
  console.error(err);
  process.exit(1);
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const restaurantsRouter = require('./routes/restaurants');
const cartRouter = require('./routes/cart');
const paymentsRouter = require('./routes/payments');

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/restaurants', restaurantsRouter);
app.use('/api/cart/', cartRouter);
app.use('/api/payments', paymentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(err);
  res.status(err.status || 500);
  res.json({ status: err.status || 500, message: err.message });
});

module.exports = app;
