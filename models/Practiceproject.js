// models/Practiceproject.js
const mongoose = require("mongoose");

// Renamed schema variable and added tags
const practiceprojectSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Added required for title consistency
  description: String,
  link: String,
  image: String,
  tags: [String] // Added tags as an array of strings
});

// Renamed model name from "Myprojects" to "Practiceproject"
module.exports = mongoose.model("Practiceproject", practiceprojectSchema);