const express = require('express');
const {getCartById, createCart} = require('../controller/cartController');

const route = express.Router();

route.get('/cart/:id', getCartById);
route.post('/cart', createCart);

module.exports = {
    route,
};