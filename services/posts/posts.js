const comments = require("../../models/comments");
const post = require("../../models/posts");
const { appLog } = require('../../utils/logs')

const uploadAPhotoService = async (payload) => {
    try {
        const data = await post.create(payload)
        if (!data) {
            return false
        }
        return data
    }
    catch (error) {
        appLog.error("CREATE DROP FAILED -- ", error)
        throw error
    }
}
const addACommentService = async (payload) => {
    try {
        const data = await comments.create({
            comment: payload.comment,
            postId: payload.postId
        })
        return data

    } catch (error) {
        appLog.error("GET DROP LIST FAILED -- ", error)
        throw error
    }
}
const getAllPostService = async () => {
    try {
        const data = await post.findAll({
            include: {
                model: comments,
            },
            order: [
                ['id', 'DESC'],
            ],
        })
        return data

    } catch (error) {
        appLog.error("GET ALL POSTs FAILED -- ", error)
        throw error
    }
}

module.exports = {
    getAllPostService,
    addACommentService,
    uploadAPhotoService,
}