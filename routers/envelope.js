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
    res.status(200).send(totalBudget);
});

// retrieve all budgets
envelopeRouter.get('/', (req, res, next) => {
    res.status(200).send(budget);
});

// retrieve budget of type
envelopeRouter.get('/:type', (req, res, next) => {
    res.status(200).send(newBudget);
});

// update budget of type
envelopeRouter.put('/:type', (req, res, next) => {
    budget[type] = newBudget;
    res.status(200).send(newBudget);
});

// add more budget envelopes to budget
envelopeRouter.post('/:newType', (req, res, next) => {
    let newType = req.query.newType;
    let newBudget = req.query.budgetAmount;
    if (newType && newBudget) {
        budget[newType] = newBudget;
        res.status(200).send(newBudget);
    } else {
        res.status(404).send();
    }
    
});

// deletes type from budget
envelopeRouter.delete('/:type', (req, res, next) => {
    if (newBudget) {
        delete budget[type];
        res.status(200).send();
    }
});

// function to add transfer amount of money to budgetType1 from budgetType2
const transferBudget = (req, res, next) => {
    req.body.budget1 = budget1;
    req.body.budget2 = budget2;
    req.body.transfer = transfer;
    if (budget[budget1] && budget[budget2] && transfer) {
        budget[budget1] += transfer;
        budget[budget2] -= transfer;
        next();
    } else {
        res.status(404).send();
    }
};


envelopeRouter.post('/', transferBudget, (req, res, next) => {
    res.status(200).send(transfer);
});

// update object access to be brackets instead of dot notation