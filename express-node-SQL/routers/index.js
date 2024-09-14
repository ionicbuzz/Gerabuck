const { Router } = require("express");
const indexRouter = require("./index.router");
const userRouter = require("./users.router");
const sumRouter = require("./sum.router");

const router = Router();

router.use("/", indexRouter);
router.use("/users", userRouter);
router.use("/sum", sumRouter);

module.exports = { router };