// controllers/practiceprojectController.js

// Import the renamed model
const Practiceproject = require("../models/Practiceproject");

// Renamed function: getAllMyprojects -> getAllPracticeprojects
exports.getAllPracticeprojects = async (req, res) => {
  try {
    // Use the renamed model and variable
    const practiceprojects = await Practiceproject.find();
    res.json(practiceprojects);
  } catch (error) {
    console.error("Error fetching practice projects:", error);
    res.status(500).json({ message: "Error fetching practice projects" });
  }
};

// Renamed function: createMyprojects -> createPracticeproject
exports.createPracticeproject = async (req, res) => {
  try {
    // Use the renamed model and variable
    // Ensure tags are received as an array from the frontend (already handled in frontend code)
    const practiceproject = new Practiceproject(req.body);
    await practiceproject.save();
    res.status(201).json(practiceproject);
  } catch (error) {
    console.error("Error creating practice project:", error);
    // Provide more specific error feedback if possible (e.g., validation error)
    res.status(400).json({ message: `Error creating practice project: ${error.message}` });
  }
};

// Renamed function: updateMyprojects -> updatePracticeproject
exports.updatePracticeproject = async (req, res) => {
  try {
    // Use the renamed model and variable
    const practiceproject = await Practiceproject.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); // Added runValidators
    if (!practiceproject) {
        return res.status(404).json({ message: "Practice project not found" });
    }
    res.json(practiceproject);
  } catch (error) {
    console.error("Error updating practice project:", error);
    res.status(400).json({ message: `Error updating practice project: ${error.message}` });
  }
};

// Renamed function: deleteMyprojects -> deletePracticeproject
exports.deletePracticeproject = async (req, res) => {
  try {
    // Use the renamed model
    const deletedProject = await Practiceproject.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
        return res.status(404).json({ message: "Practice project not found" });
    }
    res.json({ message: "Practice project deleted successfully" }); // More specific message
  } catch (error) {
    console.error("Error deleting practice project:", error);
    res.status(500).json({ message: "Error deleting practice project" });
  }
};