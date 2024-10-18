const asyncHandler = require("express-async-handler");

const errorHandler = asyncHandler(async (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Customize the error response
    res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error',
    });
})

module.exports = { errorHandler };