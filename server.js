require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// // Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Add routes, both API and view
// const routes = require("./routes");
// app.use(routes);


// var syncOptions = {};
// syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;
// var db = require("./models");

// Starting the server, syncing our models ------------------------------------/
// db.sequelizeConnection.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
// });
