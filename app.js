const express = require('express');
const productRoute = require('./routes/productRoutes');
const app = express();
app.use(express.json());


app.use(express.static('public')); // to show public folder is static
app.use("/api",productRoute.route);

app.listen(3000, ()=> console.log('Online...'));