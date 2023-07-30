const express = require('express');

const envelopeRouter = express.Router();

module.exports = envelopeRouter

// information holding
let budget = {
    food: undefined,
    housing: undefined,
    gas: undefined,
    utilities: undefined,
    totalBudget: undefined
}

// http requests
envelopeRouter.param('type', (req, res, next, type) => {
    let newBudget = req.query.budgetAmount;
    let budgetType = false;
    let budgetKeys = Object.keys(budget);
    for (let i = 0; i<budgetKeys.length; i++) {
        if (type == budgetKeys[i]) {
            i = budgetKeys.length;
            budgetType = true;
        }
    }
    if (newBudget && budgetType) {
        budget[type] = newBudget;
        next();
    } else {
        res.status(404).send();
    }
});

// retrieve total budget
envelopeRouter.get('/:type', (req, res, next) => {
    let tot = 0;
    let budgetKeys = Object.keys(budget);
    for (let i = 0; i<budgetKeys.length; i++) {
        if (budgetKeys[i] != undefined) {
            tot += budgetKeys[i];
        }
    }
    budget[totalBudget] = tot;
    res.status(200).send(tot);
});

// retrieve all budgets
envelopeRouter.get('/', (req, res, next) => {
    res.status(200).send(budget);
});

// retrieve budget of type (key from budget object)
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
        delete budget[type];
        res.status(200).send();
    }
});

// update object access to be brackets instead of dot notation