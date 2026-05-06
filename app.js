const express = require('express');

const app = express();

app.use(express.json());

let product = [
    {id : 1, name : "banana"},
    {id : 2, name : "mango"},
    {id : 3, name : "kiwi"}
]

let catagory  = [
    {id : 1, name : "Green"},
    {id : 2, name : "Blue"},
]
app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>This is Home Page</h1><h1>Category and Products</h1>");
})


// Order section starts here

app.get('/catagory', (req, res)=>{
    res.json(catagory);
})


app.post('/catagory', (req, res)=>{
    const {name} = req.body;
    const newCatagory = {id : catagory.length +1, name};
    catagory.push(newCatagory);
    res.status(201).json({message : "A new catagory has been created.",data : newCatagory});
})

// product section starts here

app.get('/product', (req, res)=>{
    res.json(product);
})


app.post('/product', (req, res)=>{
    const {name} = req.body;
    const newProduct = {id : product.length +1, name};
    product.push(newProduct);
    res.status(201).json({message : "A new product has been created.",data : newProduct});
})


app.get('/*any', (req, res)=>{
     res.status(404).send("<h1> 404- Page Not Found</h1>");
})

app.listen(4000, () => console.log("Online... http://localhost:4000"));