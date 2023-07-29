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
envelopeRouter.param('type', (req, res, next, type) => {
    let newBudget = req.query.budgetAmount;
    let budgetType = false;
    for (let i = 0; i<budget.length; i++) {
        if (type == budget[i]) {
            i = budget.length;
            budgetType = true;
        }
    }
    if (newBudget && budgetType) {
        budget.type = newBudget;
        next();
    } else {
        res.status(404).send();
    }
});

envelopeRouter.get('/', (req, res, next) => {
    let tot = 0;
    for (let i = 0; i<budget.length; i++) {
        if (budget[i] != undefined) {
            tot += budget[i];
        }
    }
    res.status(200).send(tot);
});

envelopeRouter.get('/:type', (req, res, next) => {
    res.status(200).send(newBudget);
});


envelopeRouter.put('/:type', (req, res, next) => {
    budget.food = newBudget;
    res.status(200).send(newBudget);
});

envelopeRouter.post('/:type', (req, res, next) => {
    if (newBudget) {
        envelopeRouter[type] = newBudget;
    }
    res.status(200).send(newBudget);
});

envelopeRouter.delete('/:type', (req, res, next) => {
    if (newBudget) {
        delete budget['food'];
        res.status(200).send();
    }
});
