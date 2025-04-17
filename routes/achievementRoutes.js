const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getAllAchievements,
  createAchievement,
  updateAchievement,
  deleteAchievement,
} = require("../controllers/achievementController");

router.get("/", getAllAchievements);
router.post("/", auth, createAchievement);
router.put("/:id", auth, updateAchievement);
router.delete("/:id", auth, deleteAchievement);

module.exports = router;
