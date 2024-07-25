const indexPage = (req, res) => {
	res.status(202).json({
		status: 'Success',
		body: 'Welcome to Express JS API!',
	});
};

module.exports = indexPage;
