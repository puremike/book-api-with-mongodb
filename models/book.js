const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
	author: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	ISBN: {
		type: String,
		required: true,
	},
});

module.exports = model('Book', bookSchema);
