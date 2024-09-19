//create book
//replace book
//update book
//delete book

const { where } = require("sequelize");
const { Book } = require("../models")

const createNewBook = (body) => {
    return Book.create({ ...body});
}

const findManyBooks = (searchParam) => {
    return Book.findAll({ where : { ...searchParams }});
}

const findBookById = (id) => {
    return Book.findByPk(id);
}

const findSingleBook = (searchParam) => {
    return Book.findOne({ where : { ...searchParams }});
}

const findBookByIdAndUpdate = async (id, body) => {
    const book = await findBookById(id);
    for (const key of Object.keys(body)) {
        book[key] = body[key] ?? book[key];
    }

    await book.save();
    return book;
}

const findBookByIdAndDelete = async (id) => {
    const book = await findBookById(id);
    await book.destroy();
    return book;
}

module.exports = {
    createNewBook,
    findManyBooks,
    findBookById,
    findSingleBook,
    findBookByIdAndUpdate,
    findBookByIdAndDelete
};