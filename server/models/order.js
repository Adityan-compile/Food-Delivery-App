

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    payment: {
        type: Object,
        default: {},
    },
    items: [
        {
            type: mongoose.Types.ObjectId,
            ref: "item"
        }
    ]
});

module.exports = mongoose.model('order', orderSchema);