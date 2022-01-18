const express = require("express");
const {productValidation,productValidation_query,productValidation_params, productValidation_del_params, productValidation_update_params}  = require("../controllers/product/product.validator");
const { addProduct, getProducts, getProducts_cnt, getProductById, updateProduct ,deleteProductById} = require("../controllers/product/product.controller");
const defaultController = require("../controllers/defaultController");
const router = express.Router();

router.get("/", defaultController);

router.post("/addProduct", productValidation, addProduct);

router.get("/getProducts", productValidation_query,getProducts); 

router.get("/getProducts/:id", productValidation_params,getProductById); 

router.get("/getProducts_cnt", getProducts_cnt); 

router.put("/updateProduct/:id", productValidation_update_params, updateProduct); 

router.delete("/deleteProductById/:id", productValidation_del_params, deleteProductById);


// FIXME PASSPORTTEST
// router.post("/login_test", auth ,login_test);
module.exports = router;
