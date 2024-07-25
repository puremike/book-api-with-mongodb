const mongoose = require('mongoose');
const { Schema, model } = mongoose;

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
		unique: true,
	},
});

module.exports = model('Book', bookSchema);
