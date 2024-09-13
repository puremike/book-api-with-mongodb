const express = require('express');
const bookRoute = require('./routes/books');
const indexRoute = require('./routes/index');
const app = express();
const errorHandler = require('./errors/task-error-handler');

app.use(express.json());
app.use('/api/v1/', indexRoute);
app.use('/api/v1/books', bookRoute);

app.use(errorHandler);

module.exports = app;
