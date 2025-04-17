const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  image: String, // image URL
});

module.exports = mongoose.model("Achievement", achievementSchema);
