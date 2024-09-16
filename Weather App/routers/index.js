const { Router } = require("express");
const { indexResponse } = require("../controllers/index.controller");
const { forecastWebpage, cityToCoor } = require("../controllers/forecast.controller");

const router = Router();

router.route("/forecast").get(forecastWebpage).post(cityToCoor);

router.route("/").get(indexResponse);

module.exports = {router};