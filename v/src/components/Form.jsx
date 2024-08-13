// src/components/Form.jsx
import { useState, useEffect } from "react";
import axios from 'axios';
import PDFPreview from './PDFPreview';  // Updated to use PDFPreview component

const Form = () => {
  const [name, setName] = useState("");
  const [currentCourses, setCurrentCourses] = useState("");
  const [careerAspirations, setCareerAspirations] = useState("");
  const [courseLoad, setCourseLoad] = useState("");
  const [learningStyle, setLearningStyle] = useState("");
  const [preferences, setPreferences] = useState("");
  const [creditLim, setCreditLim] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");
  const [majors, setMajors] = useState([]);
  const [schools, setSchools] = useState([]);
  const [recommendations, setRecommendations] = useState(null);  // For storing recommendations
  const [showPreview, setShowPreview] = useState(false); // For controlling PDF preview visibility

  useEffect(() => {
    // Load unique majors and schools from courses data
    const loadMajorsAndSchools = async () => {
      const response = await axios.get('http://localhost:1337/api/courses');
      const allCourses = response.data;

      const uniqueMajors = [...new Set(allCourses.map(course => course.subject))];
      setMajors(uniqueMajors);

      const uniqueSchools = [...new Set(allCourses.map(course => course.school.description))];
      setSchools(uniqueSchools);
    };
    loadMajorsAndSchools();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = {
      name,
      currentCourses,
      careerAspirations,
      courseLoad,
      learningStyle,
      preferences,
      creditLim,
      major,
      school,
    };

    try {
      // Send user input to backend using Fetch API
      const response = await fetch('/api/planner/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Set recommendations to display them in the frontend
      setRecommendations(data.recommendations);
      setShowPreview(true);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };
  

  return (
    <div id="details" className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Enter Your Details
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-xl mx-auto mt-10 space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Current Courses (comma-separated)"
          className="p-3 border rounded-md"
          value={currentCourses}
          onChange={(e) => setCurrentCourses(e.target.value)}
        />
        <input
          type="text"
          placeholder="Career Aspirations"
          className="p-3 border rounded-md"
          value={careerAspirations}
          onChange={(e) => setCareerAspirations(e.target.value)}
        />
        <select
          className="p-3 border rounded-md"
          value={courseLoad}
          onChange={(e) => setCourseLoad(e.target.value)}
        >
          <option value="" disabled>
            Desired Course Load
          </option>
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Heavy">Heavy</option>
        </select>
        <input
          type="text"
          list="majors-list"
          placeholder="Select Major"
          className="p-3 border rounded-md"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <datalist id="majors-list">
          {majors.map((major, index) => (
            <option key={index} value={major}>
              {major}
            </option>
          ))}
        </datalist>
        <input
          type="text"
          list="schools-list"
          placeholder="Select School"
          className="p-3 border rounded-md"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <datalist id="schools-list">
          {schools.map((school, index) => (
            <option key={index} value={school}>
              {school}
            </option>
          ))}
        </datalist>
        <input
          type="text"
          placeholder="Credits Per Semester"
          className="p-3 border rounded-md"
          value={creditLim}
          onChange={(e) => setCreditLim(e.target.value)}
        />
        <select
          className="p-3 border rounded-md"
          value={learningStyle}
          onChange={(e) => setLearningStyle(e.target.value)}
        >
          <option value="" disabled>
            Learning Style
          </option>
          <option value="Visual">Visual</option>
          <option value="Auditory">Auditory</option>
          <option value="Kinesthetic">Kinesthetic</option>
        </select>
        <input
          type="text"
          placeholder="Preferences (comma-separated)"
          className="p-3 border rounded-md"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white"
        >
          Submit
        </button>
      </form>

      {/* Display recommendations if available and the preview is triggered */}
      {showPreview && recommendations && (
        <div className="mt-10">
          <h3 className="text-2xl">Recommended Schedule:</h3>
          <PDFPreview recommendations={recommendations} />  {/* PDF preview component */}
        </div>
      )}
    </div>
  );
};

export default Form;
