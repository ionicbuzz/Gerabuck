const indexResponse = (req, res) => {
    res.render("index");

    console.log("Routing works");
};

module.exports = { indexResponse };