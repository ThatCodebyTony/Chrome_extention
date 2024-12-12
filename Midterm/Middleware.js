const express = require('express');
const app = express();
const router = express.Router();

// Simple middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();  // Pass control to the next middleware or route handler
}

// Apply middleware to all routes in this router
router.use(logRequest);

// Define a route with a middleware
router.get('/movie', (req, res) => {
  res.send('This is the movie review page.');
});

router.get('/book', (req, res) => {
  res.send('This is the book review page.');
});

// Use the router with the middleware in the main app
app.use('/reviews', router);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//----------------------------------------------------------

const express = require('express');
const app = express();
const router = express.Router();

// Route that responds to GET requests on '/hello'
router.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Attach the router to the app
app.use('/example', router);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
