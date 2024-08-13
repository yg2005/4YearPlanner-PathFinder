// backend/services/geminiService.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generateRecommendations = async (recommendationData) => {
  const { courses, csRequirements, sasCoreRequirements, userInput } = recommendationData;

  const prompt = `
    Create a recommended 4-year academic plan based on the following student input:
    - Name: ${userData.name}
    - Major: ${userData.major}
    - School: ${userData.school}
    - Career Aspirations: ${userData.careerAspirations}
    - Desired Course Load: ${userData.courseLoad}
    - Learning Style: ${userData.learningStyle}
    - Preferences: ${userData.preferences}
    - Credits per Semester: ${userData.creditLim}
    Using this input, suggest an ideal course schedule.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const recommendations = response.text();

    return recommendations;
  } catch (error) {
    console.error('Error generating recommendations:', error);
    throw new Error('Failed to generate recommendations');
  }
};

module.exports = {
  generateRecommendations,
};
