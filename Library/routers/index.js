const { Router } = require("express");
const bookRouter = require("./book.router");
const userRouter = require("./user.router");
const roleRouter = require("./role.router");
const adminRouter = require("./admin.router")
const swaggerUi = require("swagger-ui-express");
const { swaggerSpecification } = require("../config/swagger.config");

const router = Router();

router.use("/books", bookRouter);
router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/admin", adminRouter);

router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecification));
module.exports = { router };