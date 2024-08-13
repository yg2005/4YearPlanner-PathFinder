// src/components/formSteps/NameStep.jsx
import React from 'react';

const NameStep = ({ name, setName, classYear, setClassYear, onNext }) => {
  return (
    <div className="form-step">
      <h2 className="text-3xl">Enter Your Name and Class Year</h2>
      <input
        type="text"
        placeholder="Name"
        className="p-3 border rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Class Year (e.g., 2025)"
        className="p-3 border rounded-md mt-4"
        value={classYear}
        onChange={(e) => setClassYear(e.target.value)}
      />
      <button onClick={onNext} className="mt-4 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white">
        Next
      </button>
    </div>
  );
};

export default NameStep;
