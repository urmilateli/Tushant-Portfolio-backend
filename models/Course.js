const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: {
    type: [String], // Array of strings
    default: [],},
  link: String,
  image: String, // <-- Add this line to store image URL
});

module.exports = mongoose.model("Course", courseSchema);
