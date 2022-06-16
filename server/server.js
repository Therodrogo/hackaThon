// Packages Imports
const express = require('express');
const app = express();
const cors = require('cors');

// Router Imports
const testRouter = require('./routes/testRouter');

// App Settings and Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// Configuring port
const port = process.env.PORT || 9000;

// Routes definition
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/test', testRouter);

// App Serving
app.listen(port);
console.log(`Listening On http://localhost:${port}/`);

module.exports = app;
