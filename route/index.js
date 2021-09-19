const express = require('express');
const route = express.Router();

route.use('/auth', require('./auth/route'));
route.use('/news', require('./news/router'));
module.exports = route;