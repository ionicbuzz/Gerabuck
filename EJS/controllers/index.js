const indexRoute = (req, res) => {
    res.render("index", {title: "Yowh wassup?"});
};

module.exports = { indexRoute };