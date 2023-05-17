const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema creation
const productSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: ''
  },
  category: {
    type: String,
    required: true,
    default: ""
  },
  detail: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
