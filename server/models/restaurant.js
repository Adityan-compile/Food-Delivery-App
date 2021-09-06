

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
        validate: {
            validator: (val)=>{
                const re = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
                return re.test(val);
            }
        }
    },
    password: { 
        type:String,
        required: true,
        validate: {
            validator: (val)=>{
                const re = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
                return re.test(val);
            }
        }
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

module.exports = mongoose.model('restaurant', restaurantSchema);