const express = require("express");
const path = require("path");
const { router } = require("./routers");
const { PORT } = require("./config/secrets");

const app = express();
app.use(express.json());

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server alive on port ${PORT}`);
});