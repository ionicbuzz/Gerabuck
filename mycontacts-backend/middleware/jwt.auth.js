const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler( async (req, res, next) => {

    //For simplicity, the Authorization section in the header of the HTTP request looks like: "Bearer EXAMPLE_TOKEN". So this line basically separates "Bearer" and "EXAMPLE_TOKEN" into an array by splitting it where there is a " ", then only returns the EXAMPLE_TOKEN part of the array.
    const token = req.header('Authorization')?.split(' ')[1];

    //No token? Please login again.
    if (!token) {
        res.status(401).json({ msg: "No token found. Please login again."})
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    //Token expired? Please login again.
    if (!decoded) {
        res.status(401).json({ msg: "Your token has expired. Please login again."})
    }

    req.user = decoded.user;

    next();
})

/*The JWT exists in the header of the HTTP request, under Authorization.
Therefore, each time a login is requested, the Authorization part in the header looks like:
{ "Authorization": "Bearer EXAMPLE_TOKEN"}. This is generally a standard practice across the industry.
Due to this, the EXAMPLE_TOKEN of the current logged in user must always be updated manually. */

module.exports = {verifyToken};