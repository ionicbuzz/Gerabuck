const express = require("express");
const { router } = require("./routers");
const { db } = require("./models");
const PORT = 3000;

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    db.sync();
})