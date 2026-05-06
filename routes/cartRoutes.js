const express = require('express');
const route = express.Router();

route.get('/:userId', (req, res)=> {
    res.send(`Fetching cart for user with ID: ${req.params.userId}`);
});

route.post('/:userId', (req, res)=>{
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
});

module.exports = route;