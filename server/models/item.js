const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: 'restaurant',
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  portionsAvailable: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('item', itemSchema);
