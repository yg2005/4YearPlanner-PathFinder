const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  credits: { type: Number, required: true },
  synopsisUrl: { type: String },
  sections: [{ type: Object }], // Assuming sections is an array of objects
  school: {
    code: { type: String },
    description: { type: String, required: true },
  },
  campusLocations: [
    {
      code: { type: String },
      description: { type: String },
    },
  ],
  coreCodes: [
    {
      id: { type: String },
      year: { type: String },
      term: { type: String },
      effective: { type: String },
      coreCodeReferenceId: { type: String },
      coreCode: { type: String },
      coreCodeDescription: { type: String },
      description: { type: String },
      course: { type: String },
      subject: { type: String },
      offeringUnitCode: { type: String },
      offeringUnitCampus: { type: String },
      code: { type: String },
      unit: { type: String },
      lastUpdated: { type: Number },
      supplement: { type: String },
    },
  ],
});

module.exports = mongoose.model('Course', CourseSchema);
