const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema creation
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
