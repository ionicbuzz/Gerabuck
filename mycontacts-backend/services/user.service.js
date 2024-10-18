const User = require("../models/user.model");

const createNewUser = (body) => {
    return User.create({ ...body});
}

const findAllUsers = () => {
    return User.find();
}

const findOneUser = (params) => {
    return User.findOne(params);
}

const findUserById = (id) => {
    return User.findById(id);
}

module.exports = { createNewUser, findAllUsers, findUserById, findOneUser };