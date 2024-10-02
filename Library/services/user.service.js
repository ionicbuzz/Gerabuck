//create book
//replace book
//update book
//delete book

const { where } = require("sequelize");
const { User, Role } = require("../models");

const createNewUser = (body) => {
    return User.create({ ...body});
}

const findManyUsers = (searchParams) => {
    return User.findAll({ where : { ...searchParams }});
}

const findUserById = async(id) => {
    const user = await User.findByPk(id, { include: [Role]});
    if (!user) throw new Error("A user with this id does not exist!");
    return user;
}

const findSingleUser = (searchParams) => {
    return User.findOne({ where : { ...searchParams }});
}

const findUserByIdAndUpdate = async (id, body) => {
    const user = await findUserById(id);
    for (const key of Object.keys(body)) {
        if (body[key] != undefined){
            user[key] = body[key];
        }
    }

    await user.save();
    return user;
}

const findUserByIdAndDelete = async (id) => {
    const user = await findUserById(id);
    await user.destroy();
    return user;
}

module.exports = {
    createNewUser,
    findManyUsers,
    findUserById,
    findSingleUser,
    findUserByIdAndUpdate,
    findUserByIdAndDelete
};