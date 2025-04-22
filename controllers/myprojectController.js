// controllers/myprojectController.js

// Import the renamed model
const Myproject = require("../models/Myproject"); // Import Myproject model

// Renamed function: getAllCourses -> getAllMyprojects
exports.getAllMyprojects = async (req, res) => {
  try {
    // Use the renamed model and variable
    const myprojects = await Myproject.find();
    res.json(myprojects);
  } catch (error) {
    console.error("Error fetching my projects:", error);
    res.status(500).json({ message: "Error fetching my projects" });
  }
};

// Renamed function: createCourse -> createMyproject
exports.createMyproject = async (req, res) => {
  try {
    // Use the renamed model and variable
    const myproject = new Myproject(req.body);
    await myproject.save();
    res.status(201).json(myproject);
  } catch (error) {
    console.error("Error creating my project:", error);
    res.status(400).json({ message: `Error creating my project: ${error.message}` });
  }
};

// Renamed function: updateCourse -> updateMyproject
exports.updateMyproject = async (req, res) => {
  try {
    // Use the renamed model and variable
    const myproject = await Myproject.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!myproject) {
        return res.status(404).json({ message: "My project not found" });
    }
    res.json(myproject);
  } catch (error) {
    console.error("Error updating my project:", error);
    res.status(400).json({ message: `Error updating my project: ${error.message}` });
  }
};

// Renamed function: deleteCourse -> deleteMyproject
exports.deleteMyproject = async (req, res) => {
  try {
    // Use the renamed model
    const deletedProject = await Myproject.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
        return res.status(404).json({ message: "My project not found" });
    }
    res.json({ message: "My project deleted successfully" });
  } catch (error) {
    console.error("Error deleting my project:", error);
    res.status(500).json({ message: "Error deleting my project" });
  }
};