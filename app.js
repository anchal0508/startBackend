const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productsRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.use('/*any', (req, res)=>{
    res.status(404).send('Page Not found Please check the link again');
})

app.listen(3000, ()=> console.log('Online ...'));

