const express = require("express");
const router = express.Router();
const addController = require("../controller/addController");
const { catchErrors } = require("../errorhandlers");

router.post("/register", catchErrors(addController.register));
router.post("/getadds", catchErrors(addController.getadds));
router.get("/getallads", catchErrors(addController.getAd));
router.post("/getProduct", catchErrors(addController.getProduct));
//router.get("/getele", catchErrors(addController.getele));

module.exports = router;
