const express = require('express');

const route = express.Router();

route.get('/', (req, res)=> {
    res.send('<h1> "Welcome to the Student & Course Portal API!"</h1>');
});

module.exports = route;