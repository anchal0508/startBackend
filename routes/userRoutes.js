const express = require('express');
const userController = require('../controller/userController');
const route = express.Router();

route.get('/', userController.getAllUsers);

route.get('/:userId', userController.getUserByID);

route.post('/', userController.addNewUser);

module.exports = route;