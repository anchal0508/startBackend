const express = require('express');
const route = express.Router();

route.get('/', (req, res)=> {
    res.send(`Fetching all users`);
});

route.get('/:userId', (req, res)=> {
    res.send(`Fetching user with ID: ${req.params.userId}`);;
});

route.post('/', (req, res)=>{
    res.send(`Adding a new user`);
});

module.exports = route;