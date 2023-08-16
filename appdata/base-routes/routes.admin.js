const express = require("express");
const playerRoutes = require("../api/v1/admin/routes/player");
const momentRoutes = require("../api/v1/admin/routes/moment");
const packRoutes = require("../api/v1/admin/routes/pack");
const roleRoutes = require("../api/v1/admin/routes/role");
const postRoutes = require("../api/v1/admin/routes/post");

const router = express.Router();

router.use("/v1/admin/players/", playerRoutes);
router.use("/v1/admin/moments/", momentRoutes);
router.use("/v1/admin/packs/", packRoutes);
router.use("/v1/admin/roles/", roleRoutes);
router.use("/v1/admin/posts/", postRoutes);

module.exports = router;
