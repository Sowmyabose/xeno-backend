const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Using the order routes
app.use('/orders', orderRoutes);

const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017';

// Correcting the mongoose connection syntax
mongoose
    .connect(DB_URL) // Removed deprecated options
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error('Error connecting to the database:', err));
