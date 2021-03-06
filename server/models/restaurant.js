const mongoose = require('mongoose');

function calculateAverage(total, n) {
  return total / n;
}

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (val) => {
    //     const re = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    //     return re.test(val);
    //   },
    // },
  },
  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: (val) => {
    //     const re =
    //       '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    //     return re.test(val);
    //   },
    // },
  },
  phone: {
    type: Number,
    min: [0000000000, 'Phone Number Should be atleast 10 Digits Long'],
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
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'review',
    },
  ],
  cuisines: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'r',
  },
  // average: {
  //   type: Number,
  //   default: () => {
  //     let total = 0;

  //     this.reviews.foreach((item) => {
  //       total += item.review;
  //     });

  //     return calculateAverage(total, this.reviews.length);
  //   },
  // },
});

module.exports = mongoose.model('restaurant', restaurantSchema);
