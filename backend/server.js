require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Path to your connectDB file
const questionRoutes = require('./routes/questionRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/questions', questionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
