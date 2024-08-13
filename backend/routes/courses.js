// backend/routes/courses.js
const express = require('express');
const { generateRecommendations } = require('../services/geminiService');
const coursesData = require('../data/courses.json');  // Load your courses data
const csRequirements = require('../data/cs_requirements.json');  // Load CS requirements data
const sasCoreRequirements = require('../data/sas_core_requirements.json');  // Load SAS core requirements data

const router = express.Router();

// Route to get course recommendations
router.post('/recommendations', async (req, res) => {
  const userInput = req.body.userInput;
  
  // Combine all relevant data for the recommendation request
  const recommendationData = {
    courses: coursesData,
    csRequirements: csRequirements,
    sasCoreRequirements: sasCoreRequirements,
    userInput: userInput
  };

  try {
    const recommendations = await generateRecommendations(recommendationData);
    res.json({ recommendations });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

module.exports = router;
