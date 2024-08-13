// src/components/formSteps/LearningStyleStep.jsx
import React from 'react';

const LearningStyleStep = ({ learningStyle, setLearningStyle, onNext, onPrevious }) => {
  return (
    <div className="form-step">
      <h2 className="text-3xl">Select Your Learning Style</h2>
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

export default LearningStyleStep;
