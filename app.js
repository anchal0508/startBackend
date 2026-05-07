const express = require('express');
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const cartRoute = require('./routes/cartRoutes');

const app = express();
app.use(express.json());


app.use(productRoute.route);
app.use(userRoute.route);
app.use(cartRoute.route);

app.listen(3000, ()=> console.log('Online... http://localhost:3000'));