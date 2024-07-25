const express = require('express');
const {
	getBooks,
	getSingleBook,
	createBook,
	deleteBook,
	updateBook,
} = require('../controllers/books');

const router = express.Router();

router.route('/').get(getBooks).post(createBook);

router.route('/:id').get(getSingleBook).delete(deleteBook).patch(updateBook);

module.exports = router;
