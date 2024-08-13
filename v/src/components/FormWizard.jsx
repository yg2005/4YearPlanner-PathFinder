// src/components/FormWizard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NameStep from './formSteps/NameStep';
import MajorStep from './formSteps/MajorStep';
import SchoolStep from './formSteps/SchoolStep';
import CareerStep from './formSteps/CareerStep';
import LoadStep from './formSteps/LoadStep';
import LearningStyleStep from './formSteps/LearningStyleStep';
import PreferencesStep from './formSteps/PreferencesStep';
import CreditStep from './formSteps/CreditStep';

const FormWizard = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    classYear: '',
    major: '',
    school: '',
    careerAspirations: '',
    courseLoad: '',
    learningStyle: '',
    preferences: '',
    creditLim: ''
  });

  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleFormSubmit = async () => {
    try {
      await onSubmit(formData);
      navigate('/summary'); // Assuming you want to navigate to a summary page after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  switch (step) {
    case 1:
      return <NameStep name={formData.name} classYear={formData.classYear} setName={(name) => setFormData({ ...formData, name })} setClassYear={(classYear) => setFormData({ ...formData, classYear })} onNext={handleNext} />;
    case 2:
      return <MajorStep major={formData.major} setMajor={(major) => setFormData({ ...formData, major })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 3:
      return <SchoolStep school={formData.school} setSchool={(school) => setFormData({ ...formData, school })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 4:
      return <CareerStep careerAspirations={formData.careerAspirations} setCareerAspirations={(careerAspirations) => setFormData({ ...formData, careerAspirations })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 5:
      return <LoadStep courseLoad={formData.courseLoad} setCourseLoad={(courseLoad) => setFormData({ ...formData, courseLoad })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 6:
      return <LearningStyleStep learningStyle={formData.learningStyle} setLearningStyle={(learningStyle) => setFormData({ ...formData, learningStyle })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 7:
      return <PreferencesStep preferences={formData.preferences} setPreferences={(preferences) => setFormData({ ...formData, preferences })} onNext={handleNext} onPrevious={handlePrevious} />;
    case 8:
      return <CreditStep creditLim={formData.creditLim} setCreditLim={(creditLim) => setFormData({ ...formData, creditLim })} onSubmit={handleFormSubmit} onPrevious={handlePrevious} />;
    default:
      return <NameStep name={formData.name} classYear={formData.classYear} setName={(name) => setFormData({ ...formData, name })} setClassYear={(classYear) => setFormData({ ...formData, classYear })} onNext={handleNext} />;
  }
};

export default FormWizard;
