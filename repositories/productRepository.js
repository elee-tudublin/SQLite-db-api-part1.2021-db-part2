// Dependencies
// require the database connection
const { dbConn } = require('../database/db.js');

// Define SQL statements here for use in function below
// These are parameterised queries.
// Input parameters are parsed and set before queries are executed

// Parameterised Queries
const SQL_PRODUCT_ALL = 'SELECT * FROM product ORDER BY product_name ASC;';

function getProducts() {

    // define variable to store products
    let products;

    // execute SQL
    // Note await in try/catch block
    try {
        const result = dbConn.prepare(SQL_PRODUCT_ALL)
        
        // first element of the recordset contains products
        products = result.all();

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {
        dbConn.close();
    }

    return products;

}



// Export 
module.exports = {
    getProducts
};
