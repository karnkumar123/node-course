const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/products-controller');

productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

productRouter.route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = productRouter;