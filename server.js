const express = require('express');
const connectDB = require('./db');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to Database
connectDB();

// Define a GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a POST endpoint
app.post('/api/data', (req, res) => {
  // Access the JSON body sent with the request
  const data = req.body;
  console.log(data);

  // Respond with a JSON object
  res.json({ message: 'Data received', yourData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});