const express = require('express');
let app = express();

module.exports = app;

// browser set up
app.use(express.static(__dirname));

// router connections
const apiRouter = require('./routers/api');
app.use('/api', apiRouter);

// starting up the server

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Currently listening on port ${PORT}`);
}); 