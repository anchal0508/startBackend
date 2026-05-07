const product = require('../services/productServices');
const path = require('path');

const getAllProducts = (req, res) =>{
    const file = path.join(__dirname,"..","view","product.html");
    res.sendFile(file);

}
const postProducts = (req, res) => {
    const data = req.body;
    console.log(data);
    // res.json({value : "Iphone"});
    res.json(data);

}



module.exports = {
    getAllProducts,
    postProducts
}