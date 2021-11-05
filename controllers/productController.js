// Import router package
const router = require('express').Router();
const productService = require('../services/productService.js');

/* Handle get requests for '/'
/* this is the index or home page
*/
router.get('/', function (req, res) {

  // Get all products
  try {

    // call the service
    const result = productService.getProducts();

    // Send response back to client
    res.json(result);

    // Catch and send errors  
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// Endpoint to handle requests for product by id
// req.params version (prefered)
// req format: /product/1
//
router.get('/:id', (req, res) => {

  // read values from req
  const id = req.params.id;

  // If params are missing return 400
  if (typeof id === 'undefined') {
    res.statusMessage = "Bad Request - missing id"
    res.status(400).json({ content: 'error' });
  }

  try {
    // Call the service
    const result = productService.getProductById(id);

    // Send response back to client
    res.json(result);

    // Catch and send errors  
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }

});

// Endpoint to handle requests for product by id
// req.query version
// req format: /product/byid?id=1
//
router.get('/byid', (req, res) => {

  // read values from req
  const id = req.query.id;

  // If params are missing return 400
  if (typeof id === 'undefined') {
    res.statusMessage = "Bad Request - missing id"
    res.status(400).json({ content: 'error' });
  }
  // Get product
  try {
    const result = productService.getProductById(id);

    // Send response back to client
    res.json(result);

    // Catch and send errors  
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
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
