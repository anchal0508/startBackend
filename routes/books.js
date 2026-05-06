const express = require('express');

const route = express.Router();

route.get('/', (req, res)=> {
    res.send('Here is the list of books!');
});

route.post('/', (req, res)=>{
    console.log(`received data : `,req.body);
    res.send('Book has been added!');
})

module.exports = route;
