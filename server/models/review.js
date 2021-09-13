const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'restaurant',
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'user',
  },
  review: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('review', reviewSchema);

//   restaurant: {
//     type: mongoose.Types.ObjectId,
//     ref: 'restaurant',
//   },
