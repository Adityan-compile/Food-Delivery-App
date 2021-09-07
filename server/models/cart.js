const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  items: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'item'
    }
  ],
  total: {
    type: Number
  }
})

module.exports = mongoose.model('cart', cartSchema)
