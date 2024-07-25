const dotenv = require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const server = app;
const PORT = process.env.PORT;

const connectDB = async () => {
	try {
		await mongoose
			.connect(process.env.MONGO_URL)
			.then(() => console.log('Database Connection Successful!'));
	} catch (error) {
		console.log('Connection Failed!', error);
	}
};

connectDB();

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
