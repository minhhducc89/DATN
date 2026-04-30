require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/config/db');

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));


app.use(express.json());

// Phục vụ file tĩnh 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./src/routes/authRoute'));
app.use('/api/products', require('./src/routes/productRoute'));


// Health check
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));