/*how queer. An abstraction layer for routers! Since this is index.router, all top level URL slashes reroute to here.
Top level URL means the URL has a single slash.*/

const {Router} = require("express");
const { rootServerResponse } = require("../controllers/index.controllers");

const router = Router();

router.route("/").get(rootServerResponse);

module.exports = router;