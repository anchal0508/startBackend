const {sendErrorResponse, sendResponse} = require('../utils/response');

const getUserById = (req, res) =>{
    const user = req.params.user;
    if(!user)
     return sendErrorResponse(res, {message: "User not Found", statusCode : 404});

    return sendResponse(res, user, 200);
}



const createUser = (req, res, next) => {
    const { name , email} = req.body;
    if(!name || !email)
    return sendErrorResponse(res, {message: "Name and Email are required " , statusCode: 400})

    const user = {id : 1, name, email};
    
    return sendResponse(res, user, 201);
};



module.exports = {
    getUserById,
    createUser
}