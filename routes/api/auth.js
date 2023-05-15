const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const configVars = require("../../config/keys");

//Load Models
const User = require("../../models/User");

//@route    GET api/auth/test
//@desc     Tests auth route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Auth Works!" }));

//@route    POST api/auth/login
//@desc     Login user / Returning JWT Token
//@access   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched

        const payload = { id: user._id, fname: user.fname, lname: user.lname, email: user.email, phone: user.phone, role: user.role };
        // Sign Token
        jwt.sign(
          payload,
          configVars.JWT_SECRET,
          { expiresIn: "1h" },
          (err, token) => {
            return res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(401).json(errors);
      }
    });
  });
});

module.exports = router;