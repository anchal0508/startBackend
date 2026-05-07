const {sendErrorResponse, sendResponse} = require('../utils/response');


const getProductById = (req, res) =>{
    const product = req.params.product;
    
    if(!product)
     return sendErrorResponse(res, {message: "product not Found", statusCode : 404});

    return sendResponse(res, product, 201);
     

}
const postProducts = (req, res) => {
     const { name , email} = req.body;
    if(!name || !email)
    return sendErrorResponse(res, {message: "Name and Email are required " , statusCode: 400})

    const product = {id : 1, name, email};
    
    return sendResponse(res, product, 201);
};



module.exports = {
    getProductById,
    postProducts
}