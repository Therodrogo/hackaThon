const express = require('express');
const requestController = require('../controllers/requestController');

// Create the router
const requestRouter = express.Router();

// Add the routes to the router

requestRouter.get('/get-all', requestController.getRequests);

requestRouter.post('/post', requestController.postRequest);

requestRouter.get('/get/:id', requestController.getRequestById);

requestRouter.delete('/delete/:id',requestController.deleteRequest);

requestRouter.post('/get-request-group',requestController.getRequestGroup);

requestRouter.post('/accept-request',requestController.acceptRequest);

requestRouter.post('/decline-request',requestController.declineRequest);





module.exports = requestRouter;