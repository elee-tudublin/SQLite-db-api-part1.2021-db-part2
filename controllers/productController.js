// Import router package
const router = require('express').Router();
const productService = require('../services/productService.js');

/* Hand get requests for '/'
/* this is the index or home page
*/
router.get('/', function (req, res) {

  // Send a JSON response - this app will be a web api so no need to send HTML
  //res.end(JSON.stringify({message: 'This is the home page'}));
  // res.json({content: 'This is the default route for the Product controller.'});

  // Get products
  try {

    const result = productService.getProducts();
    res.json(result);

    // Catch and send errors  
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }

});


// export
module.exports = router;
