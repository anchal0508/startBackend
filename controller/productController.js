

const getProducts = (req, res) =>{
    res.send(`Fetching all products`);
}

const getProductById = (req, res)=> {
    res.send(`Fetching product with ID: ${req.params.id}`);
}

const createProduct = (req, res)=>{
    res.send(`Adding a new product`);
}

const updateProduct = (req, res)=> {
    res.send(`Update Product by ID : ${req.params.id}`);
}

const deleteProduct = (req, res)=> {
    res.send(`Product Deleted with ID: ${req.params.id}`);
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};