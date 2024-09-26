const sequelize = require("sequelize");
const { bookModel } = require("./book.model");
const { userModel } = require("./user.model");
const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASS } = require("../config/env.config");

const db = new sequelize({
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    dialect: "mysql"
});

const Book = bookModel(db);
const User = userModel(db);

module.exports = {db, Book, User};