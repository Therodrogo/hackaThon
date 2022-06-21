const express = require('express');
const eventController = require('../controllers/eventController');

const eventRouter = express.Router();

eventRouter.get('/get-all', eventController.getEvent);

eventRouter.get('/get/:id', eventController.getEventById);