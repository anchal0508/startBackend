const product = require('../services/productServices');
const path = require('path');

const getAllProducts = (req, res) =>{
    const file = path.join(__dirname,"..","view","product.html");
    res.sendFile(file);

}
const postProducts = (req, res) => {
    try {
        const result = product.saveProduct(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Backend Error:", error); // Ye terminal mein dikhega
        res.status(500).send("Server Crashed!");
    }
};



module.exports = {
    getAllProducts,
    postProducts
}