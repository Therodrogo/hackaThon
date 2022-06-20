const express = require('express');
const eventController = require('../controllers/eventController');

// Create the router
const eventRouter = express.Router();

// Add the routes to the router
eventRouter.get('/get-all', eventController.getEvents);

eventRouter.post('/postEvent', eventController.postEvent);

eventRouter.get('/get/:id', eventController.getEventById);

eventRouter.delete('/delete/:id',eventController.deleteEvent)

module.exports = eventRouter;