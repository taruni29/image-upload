var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    unique: true
  },
  img: String
});
mongoose.model("Category", CategorySchema);

module.exports = mongoose.model("Category");
