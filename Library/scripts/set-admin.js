const { createNewRole } = require("../services/role.service");
const { findUserById } = require("../services/user.service");

const setAdmin = async () => {
    const admin = await createNewRole({
        name: "admin",
        canLendBooks: true,
        canManageBooks: true,
        canManageStaff: true,
        canManageUsers: true
    });
    const user = await findUserById("8ecc340e-fd49-4e3e-99d4-ef5e6d5e3e84");
    user.isStaff = true;
    user.roleId = admin.id;

    await user.save();

    console.log(user);
}

setAdmin();