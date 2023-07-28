const express = require('express');

const envelopeRouter = express.Router();

module.exports = envelopeRouter

// information holding
let budget = {
    food: undefined,
    housing: undefined,
    gas: undefined,
    utilities: undefined
}

// http requests
envelopeRouter.param('newBudget', (req, res, next, newBudget) => {
    let newBudget = req.query;
    if (newBudget) {
        req.budget.food = newBudget;
        next();
    } else {
        res.status(404).send();
    }
});

envelopeRouter.get('/:food', (req, res, next) => {
    res.status(200).send(newBudget);
});


envelopeRouter.put('/:food', (req, res, next) => {
    budget.food = newBudget;
    res.status(200).send(newBudget);
});

envelopeRouter.post('/:food', (req, res, next) => {
    res.status(200).send(newBudget);
});

envelopeRouter.delete('/:food', (req, res, next) => {
    if (newBudget) {
        delete budget['food'];
        res.status(200).send();
    }
});
