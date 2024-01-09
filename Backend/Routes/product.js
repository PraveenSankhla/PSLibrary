const router = require("express").Router();
const product_controller = require('../Controller/ProductController')

router.post("/", product_controller.Product_Create)

router.get("/api", product_controller.getDatafromDB);

router.get("/api/:product_id", product_controller.Product_singleDetail);

router.get("/library", product_controller.GetLibraryData);

router.put("/product_id", product_controller.Product_UpdateDetail);

router.delete("/product_id", product_controller.Product_DeleteDetail);

module.exports = router