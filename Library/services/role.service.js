//create book
//replace book
//update book
//delete book

const { Role } = require("../models");

const createNewRole = (body) => {
    return Role.create({ ...body});
}

const findManyRoles = (searchParams) => {
    return Role.findAll({ where : { ...searchParams }});
}

const findRoleById = async (id) => {
    const role = await Role.findByPk(id);
    if (!role) throw new Error("A role with this id does not exist!");
    return role;
}

const findSingleRole = (searchParams) => {
    return Role.findOne({ where : { ...searchParams }});
}

const findRoleByIdAndUpdate = async (id, body) => {
    const role = await findRoleById(id);
    for (const key of Object.keys(body)) {
        role[key] = body[key] ?? role[key];
    }

    await role.save();
    return role;
}

const findRoleByIdAndDelete = async (id) => {
    const role = await findRoleById(id);
    await role.destroy();
    return role;
}

module.exports = {
    createNewRole,
    findManyRoles,
    findRoleById,
    findSingleRole,
    findRoleByIdAndUpdate,
    findRoleByIdAndDelete
};