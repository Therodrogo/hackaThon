// Packages Imports
const express = require('express');
const app = express();
const cors = require('cors');

// Router Imports
const testRouter = require('./routes/testRouter');
const eventRouter = require ('./routes/eventRouter');

// App Settings and Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// Configuring port
const port = process.env.PORT || 9000;

// Routes definition
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/events', eventRouter);
app.use('/test', testRouter);

// App Serving
app.listen(port);
console.log(`Listening On http://localhost:${port}/`);

module.exports = app;
