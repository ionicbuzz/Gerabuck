const express = require("express");
const { router } = require("./routers");
const { db } = require("./models");
const { errorHandler } = require("./middleware/error.middleware");
const { PORT, SESSION_SECRET } = require("./config/env.config");
const session = require("express-session");
const passport = require("passport");
const { initPassport } = require("./utils/passport.utils");

initPassport(passport);
const app = express();
app.use(express.json());
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    db.sync();
})