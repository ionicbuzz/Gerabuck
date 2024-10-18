const express = require("express");
const { router } = require("./routers");
const { PORT } = require("./config/env.config");
const connectDB = require("./models");
const { errorHandler } = require("./middleware/error.handler");

const app = express();

connectDB();                //initialize DB connection

app.use(express.json());    //want to use JSON? This line helps with that
app.use("/api", router);    //Every route starts with http://localhost:PORT/api

app.use(errorHandler);      //Global error handling

app.listen(PORT, () => {
    console.log(`Server is alive and running on port ${PORT}`);
})