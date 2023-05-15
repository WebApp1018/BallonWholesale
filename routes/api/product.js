const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const configVars = require("../../config/keys");

//Load Models
const Product = require("../../models/Product");

//@route    GET api/auth/test
//@desc     Tests auth route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Product Works!" }));

module.exports = router;