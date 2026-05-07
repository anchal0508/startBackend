const express = require('express');
const productController = require('../controller/productController');

const route = express.Router();

route.get('/products', productController.getAllProducts);
route.post('/products', productController.postProducts);

module.exports = {
    route,
};