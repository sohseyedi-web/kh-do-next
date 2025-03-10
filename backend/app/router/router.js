const { verifyAccessToken } = require("../http/middlewares/auth.middleware");
const { userAuthRoutes } = require("./auth");
const { categoryRoutes } = require("./category");
const { commentRoutes } = require("./comment");
const { postRoutes } = require("./post");
const router = require("express").Router();

router.use("/user", userAuthRoutes);
router.use("/post", postRoutes);
router.use("/category", categoryRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
