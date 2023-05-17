const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateAddProductInput(data) {
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : "";
  data.product = !isEmpty(data.product) ? data.product : "";

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  if (Validator.isEmpty(data.product)) {
    errors.product = "Product field is required";
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
