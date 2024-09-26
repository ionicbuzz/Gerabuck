const { DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");

const userModel = (db) => {
    return db.define("User", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isStaff: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        hooks: {
            beforeSave: async (user) => {
                if (user.changed("password")){
                    const salt = await bcryptjs.genSalt(10);
                    const hash = await bcryptjs.hash(user.password, salt);
                    user.password = hash;
                }
            }
        }
    })
};

module.exports = {userModel};