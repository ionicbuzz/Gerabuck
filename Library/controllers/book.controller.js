const asyncHandler = require("express-async-handler");
const { createNewBook, findManyBooks, findBookByIdAndDelete, findBookByIdAndUpdate, findBookById } = require("../services/book.service");
const { User } = require("../models");

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

const bookLendingHandler = asyncHandler(async(req, res) => {
    const { action, userId: borrower } = req.body;
    if (!(action && borrower && ["lend", "return"].includes(action))) throw new Error("Bad request. Action and userId are required");
    const book = await findBookById(req.params.id, {include: [{ model: User, as: borrower}]});

    if (action === "lend"){
        if (!book.isAvailable) throw new Error("The book is not available for lending.");
        book.borrow = borrower;
        book.isAvailable = false;
    } else {
        book.borrow = null;
        book.isAvailable = true
    }
    await book.save();
    res.status(202).json(book);
})

module.exports = { createBookHandler, getManyBooksHandler, deleteBookHandler, updateBookHandler, bookLendingHandler };