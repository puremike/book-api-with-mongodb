const dotenv = require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const server = app;
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
	try {
		await mongoose
			.connect(process.env.MONGODB_URI)
			.then(() => console.log('Database Connection Successful!'));
		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.log('Connection Failed!', error);
	}
};

connectDB();
