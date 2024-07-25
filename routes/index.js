const express = require('express');
const indexPage = require('../controllers/index');

const router = express.Router();

router.route('/').get(indexPage);

module.exports = router;
