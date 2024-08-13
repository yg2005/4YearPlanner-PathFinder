// src/components/formSteps/MajorStep.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MajorStep = ({ major, setMajor, onNext, onPrevious }) => {
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    const loadMajors = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/courses/majors`);
        setMajors(response.data);
      } catch (error) {
        console.error("Error fetching majors:", error);
      }
    };
    loadMajors();
  }, []);

  return (
    <div className="form-step">
      <h2 className="text-3xl">Select Your Major</h2>
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
          <option key={index} value={major}>{major}</option>
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

export default MajorStep;
