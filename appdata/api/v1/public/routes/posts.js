const postRouter = require("express").Router();
const postController = require("../controllers/posts");
const { upload } = require('../../../../../services/upload/FileService');


postRouter.get('/get-all-posts', postController.getAllPosts)
postRouter.post('/add-comment', postController.addAComment)
postRouter.post('/upload-photo',upload.single('image'), postController.uploadAPhoto)


module.exports = postRouter;
