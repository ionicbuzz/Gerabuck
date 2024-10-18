const { Router } = require("express");
const { findAllUserHandler, registerUser, findUserByIdHandler, userLoginHandler, findCurrentUserHandler } = require("../controllers/user.controller");
const { verifyToken } = require("../middleware/jwt.auth");

const router = Router();

router.route("/").get(findAllUserHandler);
router.route("/login").post(userLoginHandler);
router.route("/register").post(registerUser);
router.route("/current").get(verifyToken, findCurrentUserHandler);
router.route("/:id").post(findUserByIdHandler);

module.exports = router;