const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User must have username"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "User must have email"],
    unique: true,
    validate: [validator.isEmail, 'invalid email']
  },
  password: {
    type: String,
    required: [true, "User must have password"],
  },
  trainerSexeChoice: {
    type: String,
    required: [true, "User must have password"],
  },
  diet: {
    type: String,
    required: [false, "User must have diet"]
  }, 
}, { timestamps: true },)

const User = mongoose.model("User", userSchema);

module.exports = User;