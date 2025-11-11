const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: String,
    github: String,
    leetcode: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);