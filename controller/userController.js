var db = require("../db");
var User = require("../schema/userSchema");

exports.signup = async (req, res) => {
  var user = User.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      mail: req.body.mail,
      password: req.body.password
    },
    function(err, user) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(user);
      console.log(user + "post service");
    }
  );
};

exports.login = async (req, res) => {
  var mail = req.body.mail;
  var password = req.body.password;
  User.findOne({ mail: mail, password: password }, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send("there is a problem");
    }
    if (!user) {
      return res.status(400).send("not registred!");
    }
    return res.status(200).send(user);
  });
};
