// src/components/formSteps/CareerStep.jsx
import React from 'react';

const CareerStep = ({ careerAspirations, setCareerAspirations, onNext, onPrevious }) => {
  return (
    <div className="form-step">
      <h2 className="text-3xl">Enter Your Career Aspirations</h2>
      <input
        type="text"
        placeholder="Career Aspirations"
        className="p-3 border rounded-md"
        value={careerAspirations}
        onChange={(e) => setCareerAspirations(e.target.value)}
      />
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

export default CareerStep;
