const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

router.get("/", getAllArticles);
router.post("/", auth, createArticle);
router.put("/:id", auth, updateArticle);
router.delete("/:id", auth, deleteArticle);

module.exports = router;
