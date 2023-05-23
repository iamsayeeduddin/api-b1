const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");

router.get("/", productCtrl.getProduct);
router.get("/:id", productCtrl.getProductById);

module.exports = router;

// CRUD Operations
// C - Create - POST
// R - Read - GET
// U - Update - PUT & PATCH
// D - Delete - DELETE
