const fs = require('fs');
const path = require('path');

const getAllProducts =() =>{
    const filePath = path.join(__dirname, '../data/productList.json');
    const data = fs.readFileSync(filePath, 'utf-8');

    const products = (JSON.parse(data));
    return products;
};


module.exports = {
    getAllProducts,
};