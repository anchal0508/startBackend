const express = require('express');
const app = express();
app.use(express.json());


app.use((req, res, next)=> {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

app.get('/products', (req, res)=> {
    res.send('Here is the list of all Products');
});


app.post('/products', (req, res) => {
    res.send('new Product has been added');
});


app.get('/categories', (req, res)=> {
    res.send('Here is the list of all categories');
});


app.post('/categories', (req, res) => {
    res.send('new category has been added');
});

app.listen(3000, ()=> console.log('Server is running...'));