const express = require('express');

const app = express();

app.use(express.json());

let orders = [
    {id : 1, name : "banana"},
    {id : 2, name : "mango"},
    {id : 3, name : "kiwi"}
]

let users  = [
    {id : 1, name : "Anchal"},
    {id : 2, name : "Harish"},
]
app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send("<h1>This is Home Page</h1><h1>Orders</h1>");
})


// Order section starts here

app.get('/orders', (req, res)=>{
    res.json(orders);
})


app.post('/orders', (req, res)=>{
    const {name} = req.body;
    const newOrder = {id : orders.length +1, name};
    orders.push(newOrder);
    res.status(201).json({message : "A new Order has been created.",data : newOrder});
})

// user section starts here

app.get('/users', (req, res)=>{
    res.json(users);
})


app.post('/users', (req, res)=>{
    const {name} = req.body;
    const newUser = {id : users.length +1, name};
    users.push(newUser);
    res.status(201).json({message : "A new User has been created.",data : newUser});
})


app.listen(3000, () => console.log("Online... http://localhost:3000"));