const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const configVars = require("../../config/keys");

//Load Models
const Product = require("../../models/Product");
const Category = require("../../models/Category");

//Load Validate
const validateAddcategoryInput = require("../../validation/validateAddcategoryInput");

//@route    GET api/auth/test
//@desc     Tests auth route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Product Works!" }));

//@route    GET api/product/category
//@desc     Get All category route
//@access   Public
router.get(
  "/category",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Category.find()
      .then(category => {
        if (!category) {
          errors.nocategory = "There is no category.";
          return res.status(404).json(errors);
        }

        res.status(200).json(category);
      })
      .catch(err => res.status(404).json(err));
  }
);

//@route    POST api/product/add_category
//@desc     Add new category
//@access   Private
router.post("/add_category",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAddcategoryInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Category.findOne({ name: req.body.category }).then(category => {

      if (category) {
        errors.category = "Category already exists";
        return res.status(409).json(errors);
      } else {
        const newCategory = new Category({
          name: req.body.category,
        });

        newCategory
          .save()
          .then(category => {
            res.status(201).json(category);
          })
          .catch(err => console.log(err));
      }
    });
  }
);

module.exports = router;