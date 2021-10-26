// require the database connection
const productRepository = require('../repositories/productRepository.js');

// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

// Validate a number
// return Not a number or else cast as Number and return
function valNum(num) {
    if (validator.isNumeric(num)) {
        return Number(num);
    }
    return NaN;
}

function getProducts() {
    const products = productRepository.getProducts();
    return products;
}

function getProductById(id) {
    return `product ${id}`;
}


// Module exports
// expose these functions
module.exports = {
    getProducts,
    getProductById
}