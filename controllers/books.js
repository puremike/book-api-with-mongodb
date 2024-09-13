const bookSchema = require('../models/book.js');
const notFoundErr = require('../errors/notfounderror');

// CRUD

// Create Book
const createBook = async (req, res, next) => {
	try {
		const newBook = await new bookSchema(req.body).save();
		return res.status(200).json({
			status: 'Success',
			message: 'Book created successfully',
			data: newBook,
		});
	} catch (error) {
		next(error);
	}
};

const getSingleBook = async (req, res, next) => {
	try {
		const {id} = req.params;
		const book = await bookSchema.findById(id);

		if (!book) {
			return notFoundErr(id, next);
		}
		return res.status(201).json({
			status: 'success',
			message: 'Book retrieved successfully',
			data: book,
		});
	} catch (error) {
		next(error);
	}
};

const getBooks = async (req, res) => {
	try {
		const {id} = req.params;
		const books = await bookSchema.find();
		return res.status(201).json({
			status: 'success',
			message: 'All books retrieved successfully',
			length: books.length,
			data: books,
		});
	} catch (error) {
		return res.status(404).send('Books not found', error);
	}
};

const updateBook = async (req, res, next) => {
	try {
		const {id} = req.params;
		const newBook = req.body;
		const updatedBook = await bookSchema.findByIdAndUpdate(id, newBook, {
			new: true,
		});
		if (!updatedBook) {
			return notFoundErr(id, next);
		}
		return res.status(201).json({
			status: 'Success',
			message: `Book, ${req.body.name} updated successfully`,
			book: updatedBook,
		});
	} catch (error) {
		next(error);
	}
};

const deleteBook = async (req, res, next) => {
	try {
		const {id} = req.params;
		const deletedBook = await bookSchema.findByIdAndDelete(id);
		if (!deletedBook) {
			return notFoundErr(id, next);
		}
		return res.status(203).json({
			status: 'Success',
			message: `Book was deleted successfully`,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getBooks,
	getSingleBook,
	createBook,
	deleteBook,
	updateBook,
};
