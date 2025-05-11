const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
};

exports.createArticle = async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.status(201).json(article);
};

exports.updateArticle = async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(article);
};

exports.deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
