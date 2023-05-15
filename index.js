const express = require('express');
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const configVars = require("./config/keys");
const path = require("path");
var cors = require('cors');

// Import routes
const auth = require("./routes/api/auth");
const product = require("./routes/api/product");

const port = process.env.PORT || 5000;
const app = express();

// General middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use(cors());
app.options("*", cors());
app.use('/public', express.static('public'));

// Connect to MongoDB
mongoose
  .connect(
    configVars.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Test api
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use("/api/auth", auth);
app.use("/api/product", product);

app.listen(port, () => {
  console.log(`Balloon app listening at http://localhost:${port}`);
});