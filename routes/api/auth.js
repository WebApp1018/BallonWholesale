const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const configVars = require("../../config/keys");

//Load Models
const User = require("../../models/User");

//Load Validations
const validateLoginInput = require("../../validation/login");
const validateProfilePwdInput = require("../../validation/validateAdPassword");

//@route    GET api/auth/test
//@desc     Tests auth route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Auth Works!" }));

//@route    POST api/auth/register
//@desc     Resigter auth route
//@access   Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(409).json(errors);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });

      newUser
        .save()
        .then((user) => {
          res.status(201).json(user);
        })
        .catch((err) => console.log(err));

      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(newUser.password, salt, (err, hash) => {
      //     if (err) throw err;
      //     newUser.password = hash;
      //     newUser
      //       .save()
      //       .then((user) => {
      //         res.status(201).json(user);
      //       })
      //       .catch((err) => console.log(err));
      //   });
      // });
    }
  });
});

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
  User.findOne({ email }).then((user) => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    if (password === user.password) {
      // User matched

      const payload = { id: user._id, email: user.email };
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

    // Check Password
    // bcrypt.compare(password, user.password).then((isMatch) => {
    //   if (isMatch) {
    //     // User matched

    //     const payload = { id: user._id, email: user.email };
    //     // Sign Token
    //     jwt.sign(
    //       payload,
    //       configVars.JWT_SECRET,
    //       { expiresIn: "1h" },
    //       (err, token) => {
    //         return res.json({ success: true, token: "Bearer " + token });
    //       }
    //     );
    //   } else {
    //     errors.password = "Password incorrect";
    //     return res.status(401).json(errors);
    //   }
    // });
  });
});

//@route    POST api/auth/pwd
//@desc     Edit user password
//@access   Private
router.post(
  "/pwd",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfilePwdInput(req.body);

    // Check validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};

    if (req.body.password) profileFields.password = req.body.password;

    User.findOneAndUpdate(
      { email: "admin" },
      { $set: profileFields },
      { new: true }
    ).then((user) => res.status(200).json(user));
  }
);

module.exports = router;
