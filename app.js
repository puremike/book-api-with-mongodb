const express = require('express');
const bookRoute = require('./routes/books');
const indexRoute = require('./routes/index');
const app = express();

app.use(express.json());
app.use('/api/v1/', indexRoute);
app.use('/api/v1/books', bookRoute);

module.exports = app;
