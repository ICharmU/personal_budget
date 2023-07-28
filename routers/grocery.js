const express = require('express');

const groceryRouter = express.Router();

module.exports = groceryRouter

groceryRouter.get('/', (req, res, next) => {
    console.log(req.query);
    let test = document.getElementById("test");
    console.log(test);
    test.innerHTML = req.query;
});