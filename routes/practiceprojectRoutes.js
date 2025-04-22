// routes/practiceprojectRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

// Import renamed controller and functions
const {
  getAllPracticeprojects,
  createPracticeproject,
  updatePracticeproject,
  deletePracticeproject,
} = require("../controllers/practiceprojectController"); // Updated controller path

// Use renamed functions in routes
router.get("/", getAllPracticeprojects); // No auth needed usually for GET all
router.post("/", auth, createPracticeproject);
router.put("/:id", auth, updatePracticeproject);
router.delete("/:id", auth, deletePracticeproject);

module.exports = router;