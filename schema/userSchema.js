var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  mail: {
    type: String,
    unique: true
  },
  password: String
});
mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");
