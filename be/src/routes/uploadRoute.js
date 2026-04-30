const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');

router.post('/', upload.single('image'), (req, res) => {
  res.json({
    message: 'Upload thành công!',
    filePath: `/${req.file.path}`, 
  });
});

module.exports = router;