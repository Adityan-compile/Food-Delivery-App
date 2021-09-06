
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      // validate: {
      //     validator: (val)=>{
      //         const re = new RegExp(`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`);
      //         return re.test(val);
      //     }
      // }
    },
    password: {
      type: String,
      required: true,
      // validate: {
      //     validator: (val)=>{
      //         const re = new RegExp(`^[a-zA-Z0-9]')(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`);
      //         return re.test(val);
      //     }
      // }
    },
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "order"
        }
    ]
  });

  // userSchema.pre('save', (next)=>{
  //   bcrypt.hash(this.password, 10).then((hashed)=>{
  //     this.password = hashed;
  //     next();
  //   }).catch((err)=>{
  //     next(err);
  //   });
  // });
  
  module.exports = mongoose.model('user', userSchema);
  