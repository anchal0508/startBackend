const express = require('express');
const route = express.Router();


route.get('/', (req, res)=> {
    res.send(`Fetching all products`);
});

route.get('/:id', (req, res)=> {
    res.send(`Fetching product with ID: ${req.params.id}`);
});

route.post('/', (req, res)=>{
    res.send(`Adding a new product`);
})
module.exports = route;