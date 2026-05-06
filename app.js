const express = require('express');
const app = express();
app.use(express.json());
let users = [];
app.get('/welcome/:username', (req, res)=> {
    const name = req.params.username;
    const role = req.query.role || "Guest Role";
console.log(name);
res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>Welcome: ${name} Your role is: ${role}</h1>`);


});

app.listen(3000, ()=> console.log('Online...'));