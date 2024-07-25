const bookSchema = require('../models/book.js');

// With MongoDB

const createBook = async (req, res) => {
	try {
		const { name, author, ISBN } = req.body;
		if (!name || !author || !ISBN) {
			return res.status(400).json({
				status: 'error',
				message: 'All fields are required',
			});
		}
		const newBook = await new bookSchema(req.body).save();
		res.status(200).json({
			status: 'Success',
			message: 'Book created successfully',
			data: newBook,
		});
	} catch (error) {
		res.status(400).json({
			status: 'error',
			message: `Error creating book, ${error.message}`,
		});
	}
};

const getSingleBook = async (req, res) => {
	try {
		const { id } = req.params;
		const book = await bookSchema.findById(id);

		if (!book) {
			throw new Error('Invalid book ID');
		}
		res.status(202).json({
			status: 'success',
			message: 'Book retrieved successfully',
			data: {
				book,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'error',
			message: error.message,
		});
	}
};

const getBooks = async (req, res) => {
	const { id } = req.params;
	const books = await bookSchema.find();
	res.status(202).json({
		status: 'success',
		message: 'All books retrieved successfully',
		length: books.length,
		data: books,
	});
};

const updateBook = async (req, res) => {
	try {
		const { id } = req.params;
		const bookID = await bookSchema.findById(id);
		if (!bookID) {
			throw new Error('Invalid book ID');
		}
		const newBook = req.body;
		const updatedBook = await bookSchema.findByIdAndUpdate(id, newBook, {
			new: true,
		});
		res.status(202).json({
			status: 'Success',
			message: `Book, ${req.body.name} updated successfully`,
			book: updatedBook,
		});
	} catch (error) {
		res.status(400).json({
			status: 'error',
			message: error.message,
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const { id } = req.params;
		const bookID = await bookSchema.findById(id);
		if (!bookID) {
			throw new Error('Invalid book ID');
		}
		const deletedBook = await bookSchema.findByIdAndDelete(id);
		res.status(202).json({
			status: 'Success',
			book: deletedBook,
			message: `Book was deleted successfully`,
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};

module.exports = {
	getBooks,
	getSingleBook,
	createBook,
	deleteBook,
	updateBook,
};
