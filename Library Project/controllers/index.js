const asyncHandler = require("express-async-handler");

const getInfoHandler = asyncHandler(async(req, res) => {
    res.json({msg: "handler says hi"});
});

module.exports = {getInfoHandler};