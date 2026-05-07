const express = require('express');
const {getProductById, postProducts} = require('../controller/productController');

const route = express.Router();

route.get('/products/:id', getProductById);
route.post('/products', postProducts);

module.exports = {
    route,
};