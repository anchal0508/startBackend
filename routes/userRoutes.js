const express = require('express');
const {getUserById, createUser} = require('../controller/userController');

const route = express.Router();

route.get('/users/:id', getUserById);
route.post('/users', createUser);

module.exports = {
    route,
};