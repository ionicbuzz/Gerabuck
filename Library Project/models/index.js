const sequelize = require("sequelize");
const { bookModel } = require("./book.model");

const db = new sequelize({
    host: "127.0.0.1",
    port: "3306",
    username: "root",
    password: "tejF_6G8Y8Mf",
    database: "libraryApi",
    dialect: "mysql"
});

const Book = bookModel(db);

module.exports = {db, Book};