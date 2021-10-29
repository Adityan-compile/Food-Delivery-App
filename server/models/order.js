const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  payment: {
    type: Object,
    default: {},
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: 'restautant',
  },
  items: [
    {
      item: {
        type: mongoose.Types.ObjectId,
        ref: 'item',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('order', orderSchema);
