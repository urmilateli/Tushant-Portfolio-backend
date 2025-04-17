const Achievement = require("../models/Achievement");

exports.getAllAchievements = async (req, res) => {
  const achievements = await Achievement.find();
  res.json(achievements);
};

exports.createAchievement = async (req, res) => {
  const achievement = new Achievement(req.body);
  await achievement.save();
  res.status(201).json(achievement);
};

exports.updateAchievement = async (req, res) => {
  const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(achievement);
};

exports.deleteAchievement = async (req, res) => {
  await Achievement.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
