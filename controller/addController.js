var db = require("../db");
var Add = require("../schema/addSchema");

exports.register = async (req, res) => {
  var add = Add.create(
    {
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      pic: req.body.pic
    },
    function(err, add) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(add);
      console.log(add + "post service");
    }
  );
};

exports.getadds = async (req, res) => {
  var types = req.body.type;
  Add.find({ type: types }, { __v: 0 }, function(err, adds) {
    if (err) {
      console.log(type);
      return res.status(500).send("there is a problem");
    }
    if (!adds) {
      return res.status(404).send("not there");
    }
    return res.status(200).send(adds);
  });
};

exports.getAd = function(req, res) {
  Add.find({}, function(err, adds) {
    if (err) res.status(500).send({ error: "Failed to get adds" });
    res.status(200).send(adds);
  });
};

exports.getProduct = async (req, res) => {
  var name = req.body.name;
  Add.find({ name: name }, { __v: 0 }, function(err, adds) {
    if (err) {
      console.log(type);
      return res.status(500).send("there is a problem");
    }
    if (!adds) {
      return res.status(404).send("not there");
    }
    return res.status(200).send(adds);
  });
};
