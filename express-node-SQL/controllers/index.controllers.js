const rootServerResponse = (req, res) => {
    res.send("Yowh wassup? Server response in da hauz babyy!!!");   //data returned to browser. In this case, its a string
    };

module.exports = { rootServerResponse };