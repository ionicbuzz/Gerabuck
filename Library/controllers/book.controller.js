const asyncHandler = require("express-async-handler");
const { createNewBook, findManyBooks, findBookByIdAndDelete, findBookByIdAndUpdate } = require("../services/book.service");

const createBookHandler = asyncHandler(async (req, res) => {
    const { title, author } = req.body;
    const book = await createNewBook({ title, author});
    res.status(201).json(book);
})

const getManyBooksHandler = asyncHandler(async (req, res) => {
    const books = await findManyBooks({ ...req.query});
    res.json(books);
})

const deleteBookHandler = asyncHandler(async(req, res) => {
    const book = await findBookByIdAndDelete(req.params.id);
    res.status(202).json(book);
})

const updateBookHandler = asyncHandler(async(req, res) => {
    const { title, author } = req.body;
    const book = await findBookByIdAndUpdate(req.params.id, { title, author });
    res.status(202).json(book);
})

module.exports = { createBookHandler, getManyBooksHandler, deleteBookHandler, updateBookHandler };