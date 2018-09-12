var express = require("express");
var app = express();
var db = require("./schema/uploadSchema");
var port = process.env.PORT || 3005;
var bodyParser = require("body-parser");
var routes = require("./routes/index");
app.get("/", function(req, res) {
  res.send("hello-world");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.raw({ inflate: true, limit: "100kb", type: "text/xml" }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes.adds);
app.use("/api/users", routes.user);
app.use("/api/category", routes.category);

var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var fileUpload = require("express-fileupload");
var cors = require("cors");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "1024mb" }));

app.post("/upload", (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(
    `${__dirname}/public/images/uploads/${req.body.filename}.jpg`,
    function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      var img_path = `public/images/uploads/${req.body.filename}.jpg`;
      res.json({ file: img_path });
      var newdata = new db.photo({
        image: img_path
      });
      newdata.save();
    }
  );
});
//catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(8000, () => {
  console.log("Server is started");
});
app.listen(port, () => {
  console.log("server is started " + port);
});
module.exports = app;
