const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const bookSchema = new Schema({
	author: {
		type: String,
		required: [true, 'Author name must be provided'],
		trim: true,
		maxLength: [20, "Author name can't be more than 20 characters"],
	},
	name: {
		type: String,
		required: [true, 'Book name must be provided'],
		trim: true,
		maxLength: [25, "Book name can't be more than 25 characters"],
	},
	ISBN: {
		type: String,
		required: [true, 'ISBN must be provided'],
		trim: true,
		unique: true,
	},
});

module.exports = model('Book', bookSchema);
