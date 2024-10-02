//create book
//replace book
//update book
//delete book

const { Book, User } = require("../models");

const createNewBook = (body) => {
    return Book.create({ ...body});
}

const findManyBooks = (searchParams) => {
    return Book.findAll({ where : { ...searchParams }});
}

const findBookById = async (id) => {
    const book = await Book.findByPk(id, { include: [User] });
    if (!book) throw new Error("A book with this id does not exist!");
    return book;
}

const findSingleBook = (searchParams) => {
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