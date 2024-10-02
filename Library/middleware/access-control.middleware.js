const asyncHandler = require("express-async-handler");

const isAuthenticated = asyncHandler( async (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        throw new Error("User is not logged in :(");
    }
});

const isStaff = (req, res, next) => {
    if (req.user.isStaff) return next();
    res.status(403);
    throw new Error("forbidden resource. You don't have access to this part of the web");
}

const hasPermission = (permission) => {
    return (req, res, next)  => {
        if (req.user.Role[permission]) return next();
        res.status(403);
        throw new Error("forbidden resource. You don't have enough permissions to access this");
    }
}

module.exports = {isAuthenticated, isStaff, hasPermission};