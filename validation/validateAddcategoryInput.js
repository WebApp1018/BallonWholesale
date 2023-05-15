const Validator = require("validator");

const isEmpty = require("./is-empty");

module.exports = function validateAddcategoryInput(data) {
  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : "";

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  return {
    isValid: isEmpty(errors),
    errors
  };
};
