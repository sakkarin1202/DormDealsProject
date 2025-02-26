const { default: firebase } = require("firebase/compat/app");
const PostModel = require("../models/post");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const secret = process.env.SECRET;

exports.createPost = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }
  const firebaseUrl = req.file.firebaseUrl;

  const {
    postType,
    productName,
    category,
    images,
    price,
    description,
    condition,
  } = req.body;
  if (
    (!postType || !productName || !category||
    !images||
    !price||
    !description||
    !condition)
  ) {
    return res.status(400).json({ message: "All Fields is requires" });
  }
  try {
    const postDoc = await PostModel.create({
      postType,
      productName,
      category,
      images: firebaseUrl,
      price,
      description,
      condition,
    });
    if (!postDoc) {
      res.status(400).send({
        message: "Cannot Create new Post",
      });
      return;
    }
    res.json(postDoc);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Something error occurred while creating a new Post.",
    });
  }
};
