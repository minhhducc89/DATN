const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


router.get('/', async (req, res) => {
  try {
    // Lấy toàn bộ sản phẩm từ DB
    const products = await Product.find(); 
    // Trả về cho Frontend dưới dạng JSON
    res.json(products); 
  } catch (error) {
    res.status(500).json({ message: "Lỗi Server" });
  }
});

module.exports = router;