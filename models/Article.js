const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date,
  link:String, 
  image: String, 
  // <-- Add this line to store image URL
});

module.exports = mongoose.model("Article", articleSchema);


//yeh backend ka hai  