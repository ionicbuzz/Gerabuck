const express = require("express"); //side note: if the browser returns the error {SSL_ERROR_RX_RECORD_TOO_LONG}, then use http instead of https. Yes thats a thing, yes I learned the hard way.
const { router } = require("./routers");

const app = express();  //lines 3, 5 are used for standard initializing of an Express.js server
app.use(express.json());    //Activates request body aka not exposing any data in the URL

app.use("/", router);

app.listen(3000, () => {                //port initializing. In this case, search in browser URL: http://localhost:3000
    console.log("Server is ALIVE!!!")
});