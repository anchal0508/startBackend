const productService = require('../services/productService');

const getProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.status(200).send(result);
};

const getProduct = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.status(200).send(result);
};

const createProduct = (req, res) => {
    const result = productService.addProduct(req.body);
    res.status(201).send(result);
};

module.exports = {
    getProducts,
    getProduct,
    createProduct
};