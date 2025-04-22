// models/Myproject.js
const mongoose = require("mongoose");

// Renamed schema variable to myprojectSchema
const myprojectSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Keep title required
  description: String,
  tags: {
    type: [String], // Array of strings
    default: [],
  },
  link: String,
  image: String,
});

// Renamed model name from "Course" (or "Project") back to "Myproject"
module.exports = mongoose.model("Myproject", myprojectSchema);