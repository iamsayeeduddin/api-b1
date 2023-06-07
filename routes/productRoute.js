const express = require("express");
const router = express.Router();
const prdCtrl = require("../controller/productCtrl");

router.get("/page/:page/size/:pageSize", prdCtrl.get);
router.get("/:id", prdCtrl.getProductById);
router.post("/create", prdCtrl.create);
router.put("/:id", prdCtrl.updateProduct);
router.patch("/:id", prdCtrl.patchProduct);
router.delete("/:id", prdCtrl.deleteProduct);

module.exports = router;
