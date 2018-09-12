var mongoose = require("mongoose");

var AddSchema = new mongoose.Schema({
  type: String,
  name: String,
  description: String,
  createDate: {
    type: Date,
    default: Date.now()
  },
  pic: String
});
mongoose.model("Add", AddSchema);

module.exports = mongoose.model("Add");
