var mongoose = require("mongoose");

require("dotenv").load();
mongoose.connect("mongodb://localhost:27017/adds");

var db = mongoose.connect(
  "mongodb://localhost:27017/adds",
  function(error) {
    if (error) console.log(error);

    console.log("connection successful");
  }
);
