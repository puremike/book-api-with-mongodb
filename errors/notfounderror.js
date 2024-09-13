const notFoundErr = (id, next) => {
	let error = new Error(`Book with ID ${id} not found`);
	error.statusCode = 404;
	return next(error);
};

module.exports = notFoundErr;
