const express = require('express');
const testController = require('../controllers/testController');


// Create the router
const testRouter = express.Router();

// Add the routes to the router
testRouter.get('/get-all', testController.getTests);

testRouter.get('/get/:id', testController.getTestById);

testRouter.post('/postService', testController.postService);

testRouter.delete('/deleteByID/:id', testController.deleteService);

module.exports = testRouter;
