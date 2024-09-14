const { Router } = require("express");
const { indexRoute } = require("../controllers");

const router = Router();

router.route("/").get(indexRoute);

module.exports = {router};