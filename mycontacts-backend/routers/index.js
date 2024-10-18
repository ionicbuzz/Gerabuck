const { Router } = require("express");
const contactRouter = require("./contacts.router");
const userRouter = require("./user.router");

const router = Router();

router.use("/contacts", contactRouter);
router.use("/user", userRouter);

module.exports = { router };