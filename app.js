const express = require('express');
const app = express();
const port = 3000;

// Define a route that responds with "Hello, World!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, World! this the first task to create a Automated Deployment Script after an edit');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
