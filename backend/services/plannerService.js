// backend/services/plannerService.js
const axios = require("axios");
const { scrapeRutgersData } = require("./scrapeService");
const { fetchRedditData } = require("./redditService");
const GeminiAI = require("gemini-ai"); // Assuming GeminiAI is the library for the API

const generatePlan = async (userData) => {
  try {
    // Step 1: Scrape Rutgers Data for major/school requirements
    const requirements = await scrapeRutgersData(userData.major, userData.school);

    // Step 2: Fetch additional data from Reddit
    const redditData = await fetchRedditData(userData.major);

    // Step 3: Call Gemini AI API to generate the 4-year plan
    const geminiResponse = await GeminiAI.generatePlan({
      userData,
      requirements,
      redditData,
    });

    return geminiResponse.data; // Assuming this returns the plan
  } catch (error) {
    console.error("Error generating plan in service:", error);
    throw error;
  }
};

module.exports = { generatePlan };
