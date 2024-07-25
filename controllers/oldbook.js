const books = require('../data');

// With Predefined Data

const getSingleBook = (req, res) => {
	try {
		const { id } = req.params;
		const book = books.find((book) => book.id === parseInt(id));

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

const getBooks = (req, res) => {
	res.status(202).json({
		status: 'success',
		message: 'All books retrieved successfully',
		length: books.length,
		data: {
			books,
		},
	});
};

const createBook = (req, res) => {
	try {
		const { name, author, ISBN } = req.body;
		if (!name || !author || !ISBN) {
			throw new Error('All fields are required');
		}
		const newBook = { id: books.length + 1 || req.body.id, ...req.body };
		books.push(newBook);
		res.status(201).json({
			status: 'success',
			message: 'Book created successfully',
			data: {
				book: newBook,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'error',
			message: error.message,
		});
	}
};

const deleteBook = (req, res) => {
	try {
		const { id } = req.params;
		const bookToDeleteIndex = books.findIndex(
			(book) => book.id === parseInt(id)
		);
		if (bookToDeleteIndex === -1) {
			throw new Error('Invalid book ID');
		}
		books.splice(bookToDeleteIndex, 1);
		res.status(202).json({
			status: 'Success',
			message: `Book was deleted successfully`,
		});
	} catch (error) {
		res.json({
			status: 'failed',
			error: error.message,
		});
	}
};

const updateBook = (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const bookToUpdateIndex = books.findIndex((book) => book.id === id);
		if (bookToUpdateIndex === -1) {
			throw new Error('Invalid book ID');
		}
		const updatedBook = { id: id, ...req.body };
		books[bookToUpdateIndex] = updatedBook;
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

module.exports = {
	getBooks,
	getSingleBook,
	createBook,
	deleteBook,
	updateBook,
};
