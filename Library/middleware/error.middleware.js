const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        error: {
            code: 500,
            message: err.message
        }
    })
}

module.exports = { errorHandler }