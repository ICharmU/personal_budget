const express = require('express');

const envelopeRouter = express.Router();

module.exports = envelopeRouter

// if linking to html page try this
/*
router.get('/', (req, res, next) =>{
    res.sendFile(__dirname + 'index.html');
})
*/

// information holding
let budget = {
    food: 10,
    housing: 200,
    gas: 30,
    utilities: 60,
    totalBudget: 500
}

envelopeRouter.param('budgetAmount', (req, res, next, budgetAmount) => {
    let newBudget = req.query.budgetAmount;
});

// http requests
envelopeRouter.param('type', (req, res, next, type) => {
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
    res.status(200).send(budget.totalBudget);
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
envelopeRouter.put('/:budgetAmount/:type', (req, res, next) => {
    budget[type] = newBudget;
    res.status(200).send(newBudget);
});

// add more budget envelopes to budget
envelopeRouter.post('/:budgetAmount/:newType', (req, res, next) => {
    let newType = req.query.newType;
    if (newType && newBudget) {
        budget[newType] = newBudget;
        res.status(200).send(newBudget);
    } else {
        res.status(404).send();
    }
    
});

// deletes type from budget
envelopeRouter.delete('/:budgetAmount/:type', (req, res, next) => {
    if (newBudget) {
        delete budget[type];
        res.status(200).send();
    }
});

// function to add transfer amount of money to 1 from 2

envelopeRouter.post('/:budgetAmount/:budget1/:budget2', (req, res, next) => {
    req.body.budget1 = budget1;
    req.body.budget2 = budget2;
    req.body.transfer = transfer;
    if (budget[budget1] && budget[budget2] && transfer) {
        budget[budget1] += transfer;
        budget[budget2] -= transfer;
        res.status(200).send(transfer);
    } else {
        res.status(404).send();
    }
});

// update object access to be brackets instead of dot notation
// update status codes to be more specific