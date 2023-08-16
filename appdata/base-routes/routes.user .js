const express = require("express");
const userRoutes = require('../api/v1/user/routes/user')
const packRoutes = require('../api/v1/user/routes/packs')
const router = express.Router();

router.use("/v1/users/", userRoutes);
router.use("/v1/packs/", packRoutes);

module.exports = router;
