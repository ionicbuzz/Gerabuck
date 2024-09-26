const Passport = require("passport");
const Strategy = require("passport-local");
const bcryptjs = require("bcryptjs");
const { findSingleUser, findUserById } = require("../services/user.service");

const initPassport = (Passport) => {
    const authenticate = async (email, password, cb) => {
        const user = await findSingleUser({email}).catch((err) => cb(err));
        if (!user) cb(Error("User not found."));
        const passwordMatch = await bcryptjs.compare(password, user.password);
        if (!passwordMatch) cb(Error("Password does not match. :("));
        return cb(null, user);
    }

    Passport.use(new Strategy({ usernameField: "email"}, authenticate));

    Passport.serializeUser((user, cb) => {
        return cb(null, user.id);
    });

    Passport.deserializeUser(async (id, cb) => {
        const user = await findUserById(id);
        cb(null, user);
    });
}

module.exports = { initPassport };