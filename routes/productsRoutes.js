const express = require('express');
const route = express.Router();
const productController = require('../controller/productController');


route.get('/',productController.getProducts);

route.get('/:id', productController.getProductById);

route.post('/', productController.createProduct);

// Put request for Product

route.put('/:id', productController.updateProduct);


route.delete('/:id',productController.deleteProduct);

module.exports = route;