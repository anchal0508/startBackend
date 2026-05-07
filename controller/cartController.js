 const {sendErrorResponse, sendResponse} = require('../utils/response');

const getCartById = (req, res) =>{
    const cart = req.params.cart;
    if(!cart)
     return sendErrorResponse(res, {message: "cart not Found", statusCode : 404});

    return sendResponse(res, cart, 200);
     

}
const createCart = (req, res) => {

     const { name , email} = req.body;
    if(!name || !email)
    return sendErrorResponse(res, {message: "Name and Email are required " , statusCode: 400})

    const cart = {id : 1, name, email};
    
    return sendResponse(res, cart, 201);
};



module.exports = {
    getCartById,
    createCart
}