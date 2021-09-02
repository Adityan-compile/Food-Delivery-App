'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: {
          validator: (val)=>{
              const re = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
              return re.test(val);
          }
      }
    },
    password: {
      type: String,
      required: true,
      validate: {
          validator: (val)=>{
              const re = '/^[a-zA-Z0-9][@#$!%&()^&$@!@^$&{}?/]'
          }
      }
    },
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "order"
        }
    ]
  });
  
  module.exports = mongoose.model('user', userSchema);
  