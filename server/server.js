const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const registerRoutes = require('./routes/userRoutes');
const gamesRoutes = require('./routes/gamesRoutes');
require('dotenv').config(); // Ensure .env variables are loaded

const app = express();

// Connect to the database
connectDB().catch(error => {
  console.error('Database connection error:', error);
  process.exit(1); // Exit process if DB connection fails
});

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/user', registerRoutes);
app.use('/games', gamesRoutes);

// Start the server and bind to 0.0.0.0 (allow external connections)
const port = process.env.PORT || 10000; // Default to 10000 if PORT is not set
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
