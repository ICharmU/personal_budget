const express = require('express');
const apiRouter = express.Router();

const groceryRouter = require('./grocery');
apiRouter.use('/grocery', groceryRouter);

module.exports = apiRouter