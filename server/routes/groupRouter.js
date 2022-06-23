const express = require('express');
const groupController = require('../controllers/groupController');

// Create the router
const groupRouter = express.Router();

// Add the routes to the router

groupRouter.get('/get-all', groupController.getGroups);

groupRouter.post('/post', groupController.postGroup);

groupRouter.get('/get/:id', groupController.getGroupById);

groupRouter.delete('/delete/:id',groupController.deleteGroup)



module.exports = groupRouter;
