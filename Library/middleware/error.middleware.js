const errorHandler = (err, req, res, next) => {
    res.json({
        error: {
            code: 500,
            message: err.message
        }
    })
}

module.exports = { errorHandler }