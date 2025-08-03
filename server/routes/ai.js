const express = require('express');
const { summarizeNote } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/summarize', protect, summarizeNote);

module.exports = router;