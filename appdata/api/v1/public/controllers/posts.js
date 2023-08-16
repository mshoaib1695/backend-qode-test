const postsService = require("../../../../../services/posts/posts")
const { successResponse, errorResponse } = require('../../../../../services/response/response')


const getAllPosts = async (req, res) => {
    try {
        const data = await postsService.getAllPostService()
        successResponse(res, data)
    } catch (error) {
        errorResponse(res, error)
    }
}
const addAComment = async (req, res) => {
    try {
        const { postId, comment } = req.body
        const payload = {
            comment, postId
        }
        const data = await postsService.addACommentService(payload)
        successResponse(res, data)
    } catch (error) {
        errorResponse(res, error)
    }
}
const uploadAPhoto = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }
        const imageUrl = `/uploads/${req.file.filename}`;
        const payload = {
            name: req.body.name,
            description: req.body.name,
            imageUrl: imageUrl
        }
        const data = await postsService.uploadAPhotoService(payload)
        successResponse(res, data)
    } catch (error) {
        errorResponse(res, error)
    }
}

module.exports = { getAllPosts, addAComment, uploadAPhoto }