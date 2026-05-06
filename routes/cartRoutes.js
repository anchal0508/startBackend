const express = require('express');
const cartRoutes = require('../controller/cartController');
const route = express.Router();

route.get('/:userId', cartRoutes.getCardByID);

route.post('/:userId', cartRoutes.addCartByID);

module.exports = route;