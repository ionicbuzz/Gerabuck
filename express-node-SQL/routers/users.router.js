const {Router} = require("express");
const { userRoot, userId, createUser, deleteUser, updateUserById } = require("../controllers/users.controllers");

const router = Router();

router.route("/").get(userRoot).post(createUser);

router.route("/checkUser").get(userId);

router.route("/deleteUser/:id").delete(deleteUser);

router.route("/updateUser/:id").patch(updateUserById);

module.exports = router;