const express = require('express');
const bookRoute = require('./routes/books');

const app = express();
app.use(express.json());



app.use('/books', bookRoute);

app.listen(3000, ()=>{
    console.log('Online...');
})