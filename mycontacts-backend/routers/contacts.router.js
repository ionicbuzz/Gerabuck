const { Router } = require("express");
const { createNewContactsHandler, accessUserContactsHandler, findSingleContactHandler, findSingleContactByIdAndUpdateHandler, findSingleContactByIdAndDeleteHandler } = require("../controllers/contacts.controller");
const { verifyToken } = require("../middleware/jwt.auth");

const router = Router();

router.use(verifyToken);

router.route("/")
    .get(accessUserContactsHandler)
    .post(createNewContactsHandler);
router.route("/:id")
    .get(findSingleContactHandler)
    .put(findSingleContactByIdAndUpdateHandler)
    .delete(findSingleContactByIdAndDeleteHandler);

module.exports = router;