const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'user',
    },
    review: {
        type: Number,
        required: true,
        validate: {
            validator: (val) => {
                return val >= 0 && val < 5 ;
            },
        },
    },

});

module.exports = mongoose.model('review', reviewSchema);

//   restaurant: {
//     type: mongoose.Types.ObjectId,
//     ref: 'restaurant',
//   },