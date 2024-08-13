const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course'); // Assuming you have a Course model set up
const coursesData = require('./data/courses.json');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Seed Courses
const seedCourses = async () => {
  try {
    // Clear existing data
    await Course.deleteMany({});

    // Insert data with validation
    await Course.insertMany(
      coursesData.map(course => ({
        title: course.title,
        subject: course.subjectDescription,
        credits: course.credits || 0, // Set a default value if credits are missing
        school: {
          code: course.school.code,
          description: course.school.description || '', // Ensure school description is string
        },
        campusLocations: course.campusLocations.map(location => ({
          code: location.code,
          description: location.description || '',
        })), // Ensure campusLocations are objects with code and description
        coreCodes: course.coreCodes.map(core => ({
          id: core.id,
          year: core.year,
          term: core.term,
          coreCode: core.coreCode,
          coreCodeDescription: core.coreCodeDescription || '',
        })), // Ensure coreCodes are objects with required fields
        synopsisUrl: course.synopsisUrl,
        sections: course.sections.map(section => ({
          number: section.number,
          instructors: section.instructors,
          meetingTimes: section.meetingTimes,
          // Add other fields as needed
        })),
      }))
    );

    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
  }
};

// Run the seed function
seedCourses();
