const { Router } = require("express");
const { getInfoHandler } = require("../controllers");

const router = Router();

router.route("/info").get(getInfoHandler)

module.exports = { router };