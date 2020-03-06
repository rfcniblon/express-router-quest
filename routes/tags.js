// routes/comments.js
const express = require('express');
const router = express.Router();
const faketags = require('../data/tags');

// Get a list of comments
router.get('/', (req, res) => {
    res.json(faketags);
  });
  
module.exports = router;