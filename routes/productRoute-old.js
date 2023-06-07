const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl-old");

router.get("/", productCtrl.getProduct);
router.get("/:id", productCtrl.getProductById);
router.post("/", productCtrl.newProduct);
router.delete("/:id", productCtrl.deleteProduct);
router.put("/:id", productCtrl.updateProduct);
router.patch("/:id", productCtrl.patch);

module.exports = router;

// CRUD Operations
// C - Create - POST
// R - Read - GET
// U - Update - PUT & PATCH
// D - Delete - DELETE
