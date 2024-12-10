const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const menuRoutes = require('./routes/menuRoutes');

connectDB();

const app = express();

// Set up CORS options for allowing only specific frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Default to local frontend during development
  methods: ['GET', 'POST'],
  credentials: true, // Allow cookies if needed
};

app.use(cors(corsOptions)); // Use CORS middleware with options
app.use(bodyParser.json()); // Middleware for parsing JSON bodies

// Define routes
app.use('/api', menuRoutes);

// Dynamic port setup for production and development
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
