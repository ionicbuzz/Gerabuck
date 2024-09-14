//side note: if the browser returns the error {SSL_ERROR_RX_RECORD_TOO_LONG}, then use http instead of https. Yes thats a thing, yes I learned the hard way.

const express = require("express");

const app = express();  //lines 3, 5 are used for standard initializing of an Express.js server

app.route('/').get((req, res) => {
    res.send("Yowh wassup? Server response in da hauz babyy!!!");   //data returned to browser. In this case, its a string
})

app.listen(3000, () => {                //port initializing. In this case, search in browser URL: http://localhost:3000
    console.log("Server is ALIVE!!!")
});

/*keep in mind, this is a simple demo on how an Express app works. For security and debugging purposes, it is preferred that the routing and controlling layers
are abstracted. Refer to the serverAbstract.js file in the same folder*/