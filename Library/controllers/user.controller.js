const asyncHandler = require("express-async-handler");
const { createNewUser, findUserByIdAndUpdate } = require("../services/user.service");
const { Model } = require("sequelize");

const signUpHandler = asyncHandler(async (req, res) => {
    const { username, password, email } = req.body;
    if (!(username && password && email)) throw new Error("Bad request. Please enter a username, password and email");

    const user = await createNewUser({ username, password, email });
    res.status(201).json(user);
})

const getCurrentUserHandler = asyncHandler(async (req, res) => {
    res.json(req.user);
})

const userLogoutHandler = asyncHandler(async (req,res) => {
    req.logout((err) => {if (err) throw new Error("Unable to logout???")});
    res.sendStatus(200);
})

const updateUserHandler = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await findUserByIdAndUpdate(req.user.id, { email, password, username });
    res.json(user);
})

module.exports = {signUpHandler, getCurrentUserHandler, userLogoutHandler, updateUserHandler};