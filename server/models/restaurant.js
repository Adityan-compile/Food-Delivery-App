'use strict';

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type:String,
        required: true,
        unique: true,
    },
    password: { 
        type:String,
        required: true,
    },
    phone: { 
        type: Number,
        min: [10, 'Phone Number Should be atleast 10 Digits Long'],
    },
    address: { 
        type: String,
        required: true,
    },
    zipcode: { 
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    reviewers: [
        {
            type: mongoose.Types.ObjectId
        }
    ],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);