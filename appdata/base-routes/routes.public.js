const express = require("express");
const router = express.Router();
const postsRoutes = require('../api/v1/public/routes/posts')

router.use("/v1/posts", postsRoutes);
router.get('/', (req, res) => {
    res.status(200).send({ code: 200, success: true, message: "backend application is working!" })
});
module.exports = router;
