// src/components/formSteps/SchoolStep.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchoolStep = ({ school, setSchool, onNext, onPrevious }) => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const loadSchools = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/courses/schools`);
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };
    loadSchools();
  }, []);

  return (
    <div className="form-step">
      <h2 className="text-3xl">Select Your School</h2>
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
          <option key={index} value={school}>{school}</option>
        ))}
      </datalist>
      <div className="mt-4 flex justify-between">
        <button onClick={onPrevious} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white">
          Previous
        </button>
        <button onClick={onNext} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default SchoolStep;
