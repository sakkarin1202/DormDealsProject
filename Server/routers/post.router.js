const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const { upload, uploadToFirebase } = require("../middlewares/file.middleware");

router.post("/", upload, uploadToFirebase, postController.createPost);

module.exports = router;