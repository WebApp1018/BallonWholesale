const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema creation
const userSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
