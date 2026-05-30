const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: [String],
    applyLink: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Career", careerSchema);