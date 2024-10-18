const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { createNewUser, findAllUsers, findUserById, findOneUser } = require("../services/user.service");

//Register new user. No extra comments.
const registerUser = asyncHandler( async (req, res) => {
    const { username, email, password } = req.body;

    if (!(username && email && password)) throw new Error("Username, email and password are required.");

    //Each account can only be attached to one email. This detects if duplicate emails are found in the database.
    let duplicate = await findOneUser({ email });
    if (duplicate) return res.status(400).json({ msg: "A user with this email already exists. Please try another email"});
    
    const user = await createNewUser({ username, email, password});

    res.status(201).json(user);
})

//Current logged in user. Only returns the username for confirmation.
const findCurrentUserHandler = asyncHandler(async (req, res) => {
    const { username } = req.user;

    if (!username) res.status(400).json({ error: "Bad request. Please try logging in again." });

    res.status(200).json(`Hello user ${username}. Have a great day!`);
})

//Find all users in the database. Mainly used for debugging purposes
const findAllUserHandler = asyncHandler(async (req, res) => {
    const queryAll = await findAllUsers();
    res.json(queryAll);
})

//Find a user by id. Mainly used for debugging purposes
const findUserByIdHandler = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await findUserById(id);

    if (!user) return res.status(400).json({ msg: "User with this id not found..."});

    res.status(200).json(user);
})

//User login logic. Only email and password are required.
const userLoginHandler = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) return res.status(400).json({ msg: "Please enter an email and password."});

    const user = await findOneUser({ email });
    if (!user) return res.status(400).json({ msg: "User with this email does not exist!"});

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) return res.status(400).json({ msg: "Incorrect password."});

    //Initializing the payload for JWT. Yes it is a real part of JWT.
    const payload = {
        user: {
            id: user.id,
            username: user.username
        }
    }

    //Signing the JWT with the payload.
    jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        (err, token) => {
          if (err) throw err;
          res.json({ 
            msg: "Successfully logged in!",
            token
         });
        }
    );
})

module.exports = {registerUser, findAllUserHandler, findUserByIdHandler, userLoginHandler, findCurrentUserHandler};