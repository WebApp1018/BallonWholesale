const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema creation
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
