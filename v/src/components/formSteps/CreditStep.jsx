// src/components/formSteps/CreditStep.jsx
import React from 'react';

const CreditStep = ({ creditLim, setCreditLim, onSubmit, onPrevious }) => {
  return (
    <div className="form-step">
      <h2 className="text-3xl">Set Your Credit Limit</h2>
      <input
        type="text"
        placeholder="Credits Per Semester"
        className="p-3 border rounded-md"
        value={creditLim}
        onChange={(e) => setCreditLim(e.target.value)}
      />
      <div className="mt-4 flex justify-between">
        <button onClick={onPrevious} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white">
          Previous
        </button>
        <button onClick={onSubmit} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreditStep;
