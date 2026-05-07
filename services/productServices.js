const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/productList.json');

const saveProduct = (newData) => {
    let data = fs.readFileSync(filePath, 'utf-8');
    if (!data || data.trim() === "") {
        data = "[]";
    }
    const allProducts = JSON.parse(data);

    if (!Array.isArray(allProducts)) {
        allProducts = [];
    }
    const newId = allProducts.length > 0 ? allProducts.length + 1 : 1;
    const products = {
        id: newId,
        productName: newData.productName,
        price: newData.price || 0
    };

    allProducts.push(products);

    fs.writeFileSync(filePath, JSON.stringify(allProducts, null, 2));
    return products;
}

const getAllProducts = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data || []);
    return products;
};


module.exports = {
    getAllProducts,
    saveProduct
};