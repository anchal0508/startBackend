const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("MiddleWare1 started");
    next();
}) 
app.use((req, res, next)=> {
    console.log('MiddleWare 2 started');
    res.send('<h1> Ram Ram </h1>');
})

const port = 3000;
app.listen(port, ()=> console.log(`Server is up and running on port ${port}! Ready to handle requests.`));