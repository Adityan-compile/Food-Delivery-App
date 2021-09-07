const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Email is Required'],
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'order'
    }
  ]
})

module.exports = mongoose.model('user', userSchema)
