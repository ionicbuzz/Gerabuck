const { Router } = require("express");
const { calcSum, postSum } = require("../controllers/sum.controllers");

const router = Router();

router.route("/").get(calcSum).post(postSum);

module.exports = router;