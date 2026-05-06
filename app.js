const express = require('express');

const app = express();

app.use(express.json());

let users = [
{   id : 1, name : "Anchal"},
{   id : 2, name : "Harish"},
];


app.use((req, res, next)=>{
    req.user = "Guest";
    next();
})
app.get("/users", (req, res)=>{
    res.json(users);
})


app.post("/users", (req, res)=>{
    const {name} = req.body;
    const newUser = {id: users.length+1, name};

    users.push(newUser);

    res.status(201).json(newUser);
})



// Get Use by ID

app.get("/users/:id", (req, res)=>{
    const userID = parseInt(req.params.id); // to get ID from the URL
    const user = users.find(u => u.id === userID);

    if(!user){
        return res.status(404).json({message: " User Not Found"});
    }

    res.json(user);
})

app.use("/welcome", (req, res, next)=>{
    res.send(`<h1> Welcome , ${req.user}!</h1>`);
})
const port = 3000;
app.listen(port, ()=> console.log(`Server is up and running on port http://localhost:${port}! Ready to handle requests.`));