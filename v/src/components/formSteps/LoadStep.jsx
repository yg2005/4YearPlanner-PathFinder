// src/components/formSteps/LoadStep.jsx
import React from 'react';

const LoadStep = ({ courseLoad, setCourseLoad, onNext, onPrevious }) => {
  return (
    <div className="form-step">
      <h2 className="text-3xl">Select Your Desired Course Load</h2>
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

export default LoadStep;
