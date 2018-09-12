const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const { catchErrors } = require("../errorhandlers");

router.post("/category", catchErrors(categoryController.category));
router.get("/getcategory", catchErrors(categoryController.getCategory));

module.exports = router;
