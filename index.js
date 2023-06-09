// const express = require("express");
// const passport = require("passport");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const configVars = require("./config/keys");
// const path = require("path");
// var cors = require("cors");

// Import routes
// const auth = require("./routes/api/auth");
// const product = require("./routes/api/product");

// const port = process.env.PORT || 5000;
// const app = express();

// General middlewares
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(passport.initialize());
// require("./config/passport")(passport);
// app.use(cors());
// app.options("*", cors());
// app.use("/public", express.static("public"));

// Connect to MongoDB
// mongoose
//   .connect(configVars.MONGODB_URI, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB connected!"))
//   .catch((err) => console.log(err));

// Use routes
// app.use("/api/auth", auth);
// app.use("/api/product", product);

// Serve static files from the 'build' folder
// app.use(express.static(path.join(__dirname, "balloon/build")));

// Handle other requests by serving the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "balloon/build/index.html"));
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Balloon app listening at http://149.100.159.216:${port}`);
// });

// RUN AS HTTPS SERVER ------------------
// var fs = require('fs')
// var https = require('https');
// var privateKey  = fs.readFileSync('./src/cert/privkey.pem', 'utf8');
// var certificate = fs.readFileSync('./src/cert/fullchain.pem', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(443);

const express = require("express");

// Configure & Run the http server
const app = express();

app.use(express.static(__dirname, { dotfiles: "allow" }));

app.listen(5000, () => {
  console.log("HTTP server running on port 5000");
});
