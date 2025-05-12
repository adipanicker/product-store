import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

//get all products
router.get("/", getProducts);

//create prduct
router.post("/", createProduct);

//delete product
router.delete("/:id", deleteProduct);

//update
router.put("/:id", updateProduct);

export default router;
