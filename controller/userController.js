 const getAllUsers = (req, res)=> {
    res.send(`Fetching all users`);
}

const getUserByID = (req, res)=> {
    res.send(`Fetching user with ID: ${req.params.userId}`);;
}

const addNewUser = (req, res)=>{
    res.send(`Adding a new user`);
}
module.exports = {
    getAllUsers,
    getUserByID,
    addNewUser
}