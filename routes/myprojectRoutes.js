// routes/myprojectRoutes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

// Import renamed controller and functions
const {
  getAllMyprojects,
  createMyproject,
  updateMyproject,
  deleteMyproject,
} = require("../controllers/myprojectController"); // Updated controller path

// Use renamed functions in routes
router.get("/", getAllMyprojects); // GET all usually doesn't need auth
router.post("/", auth, createMyproject);
router.put("/:id", auth, updateMyproject);
router.delete("/:id", auth, deleteMyproject);

module.exports = router;