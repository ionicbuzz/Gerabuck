const express = require("express");
const path = require("path");
const { router } = require("./routers");
const { FOO_SECRET, PORT } =  require("./config/secrets");

console.log(FOO_SECRET);

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server alive on port ${PORT}`);
});