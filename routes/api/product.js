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
const validateAddProductInput = require("../../validation/validateAddProductInput");

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

//@route    GET api/product/test
//@desc     Tests auth route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Product Works!" }));

//@route    GET api/product
//@desc     Get All products route
//@access   Public
router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Product.find()
      .then(product => {

        if (!product) {
          errors.noproduct = "There is no product.";
          return res.status(404).json(errors);
        }

        res.status(200).json(product);
      })
      .catch(err => res.status(404).json(err));
  }
);

//@route    GET api/product/get_product_by_category
//@desc     Get products by category route
//@access   Public
router.get(
  "/get_product_by_category/:category_name",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    if (req.params.category_name !== 'all') {
      Product.find({ category: req.params.category_name })
        .then(product => {

          if (!product) {
            errors.noproduct = "There is no product.";
            return res.status(404).json(errors);
          }

          res.status(200).json(product);
        })
        .catch(err => res.status(404).json(err));
    } else {
      Product.find()
        .then(product => {

          if (!product) {
            errors.noproduct = "There is no product in this category.";
            return res.status(404).json(errors);
          }

          res.status(200).json(product);
        })
        .catch(err => res.status(404).json(err));
    }
  }
);

//@route    GET api/product/get_product_by_code
//@desc     Get products by code route
//@access   Public
router.get(
  "/get_product_by_code/:code",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Product.findOne({ code: req.params.code })
      .then(product => {

        if (!product) {
          errors.noproduct = "There is no product with this code.";
          return res.status(404).json(errors);
        }

        res.status(200).json(product);
      })
      .catch(err => res.status(404).json(err));
  }
);

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
  // passport.authenticate("jwt", { session: false }),
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

//@route    POST api/product/edit_category
//@desc     Update category
//@access   Private
router.post("/edit_category",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateAddcategoryInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Category.findOneAndUpdate(
      { _id: req.body.categoryId },
      {
        $set: {
          name: req.body.category,
        }
      },
      { new: true } // Return the updated document
    )
      .then(updatedCategory => {
        res.status(200).json(updatedCategory);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('Error updating category');
      });

  }
);

//@route    POST api/product/remove_category
//@desc     Remove category route
//@access   Private
router.post("/remove_category", async (req, res) => {
  const { categoryId } = req.body;

  try {
    // Delete users with the specified ids
    const result = await Category.deleteMany({ _id: { $in: categoryId } });
    return res.status(200).json({
      message: "Category deleted successfully",
      count: result.deletedCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to delete Category",
    });
  }
});

//@route    POST api/product/add_product
//@desc     Add new product
//@access   Private
router.post("/add_product",
  // passport.authenticate("jwt", { session: false }),
  upload.single('image'),
  (req, res) => {
    const { errors, isValid } = validateAddProductInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Product.findOne({ name: req.body.product, category: req.body.category }).then(product => {

      if (product) {
        errors.product = "Product already exists";
        return res.status(409).json(errors);
      } else {
        Product.findOne({}, 'code', { sort: { code: -1 } }).then(product => {
          let maxCode = product ? product.code : '0000';
          const newCodeNumber = parseInt(maxCode) >= 0 ? parseInt(maxCode) + 1 : 0;
          const newCode = newCodeNumber.toString().padStart(4, '0');

          const DEFAULT_IMAGE_URL = 'default-image.jpg';

          const newProduct = new Product({
            code: newCode,
            name: req.body.product,
            category: req.body.category,
            detail: req.body.detail,
            image: req.file ? req.file.filename : DEFAULT_IMAGE_URL
          });

          newProduct
            .save()
            .then(product => {
              res.status(201).json(product);
            })
            .catch(err => console.log(err));
        });
      }
    });
  }
);

//@route    POST api/product/edit_product
//@desc     Update product
//@access   Private
router.post("/edit_product",
  // passport.authenticate("jwt", { session: false }),
  upload.single('image'),
  (req, res) => {
    const { errors, isValid } = validateAddcategoryInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Define the update object with the fields to be updated
    let updateObject = {
      name: req.body.product,
      category: req.body.category,
      detail: req.body.detail
    };

    // Check if a file was uploaded or not
    if (req.file) {
      // If a file was uploaded, add the image filename to the update object
      updateObject.image = req.file.filename;
    }

    // Update the product with the specified ID with the update object
    Product.findOneAndUpdate(
      { _id: req.body.productId },
      {
        $set: updateObject // Pass the update object as the second argument of findOneAndUpdate
      },
      { new: true } // Return the updated document
    )
      .then(updatedProduct => {
        res.status(200).json(updatedProduct);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('Error updating product');
      });
  }
);

//@route    POST api/product/remove
//@desc     Remove product route
//@access   Private
router.post("/remove", async (req, res) => {
  const { productId } = req.body;

  try {
    // Delete users with the specified ids
    const result = await Product.deleteMany({ _id: { $in: productId } });
    return res.status(200).json({
      message: "Product deleted successfully",
      count: result.deletedCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete Product",
    });
  }
});

module.exports = router;