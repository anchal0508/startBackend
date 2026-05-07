const product = require('../services/productServices');
const path = require('path');

const getAllProducts = (req, res) =>{
    const file = path.join(__dirname,"..","view","product.html");
    res.sendFile(file);
}



module.exports = {
    getAllProducts,
}