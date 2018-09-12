const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { catchErrors } = require("../errorhandlers");

router.post("/signup", catchErrors(userController.signup));
router.post("/login", catchErrors(userController.login));

module.exports = router;
