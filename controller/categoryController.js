var db = require("../db");
var Category = require("../schema/categorySchema");

exports.category = async (req, res) => {
  var category = req.body.category;
  var img = req.body.img;
  Category.create({ category: category, img: img }, function(err, category) {
    if (err)
      return res
        .status(500)
        .send("There was a problem adding the category to the database.");
    res.status(200).send(category);
    console.log(category + "post service");
  });
};

exports.getCategory = function(req, res) {
  Category.find({}, function(err, categories) {
    if (err) res.status(500).send({ error: "Failed to get categories" });
    res.status(200).send(categories);
  });
};
