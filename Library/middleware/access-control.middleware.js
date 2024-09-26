const asyncHandler = require("express-async-handler");

const isAuthenticated = asyncHandler( async (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        throw new Error("User is not logged in :(");
    }
})

module.exports = isAuthenticated;