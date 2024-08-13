// backend/routes/form.js
const express = require('express');
const router = express.Router();

// @route   POST api/form
// @desc    Submit form data
// @access  Public
router.post('/', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  
  // Save form data to the database or process it as needed

  res.status(200).json({ message: 'Form data received' });
});

module.exports = router;
