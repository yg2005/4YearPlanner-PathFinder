// backend/services/scrapeService.js
const axios = require("axios");
const cheerio = require("cheerio");

const scrapeRutgersData = async (major, school) => {
  try {
    const response = await axios.get(`https://web.rutgers.edu/requirements/${school}/${major}`);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Example: Scrape specific requirement elements
    const requirements = [];
    $(".requirement-item").each((index, element) => {
      const requirement = $(element).text().trim();
      requirements.push(requirement);
    });

    return requirements;
  } catch (error) {
    console.error("Error scraping Rutgers data:", error);
    throw error;
  }
};

module.exports = { scrapeRutgersData };
