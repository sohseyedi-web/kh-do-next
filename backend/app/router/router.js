const { verifyAccessToken } = require("../http/middlewares/auth.middleware");
const { userAuthRoutes } = require("./auth");
const router = require("express").Router();

router.use("/user", userAuthRoutes);

module.exports = router;
