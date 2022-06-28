const express = require('express');
const projectController = require('../controllers/projectController');

// Create the router
const projectRouter = express.Router();

// Add the routes to the router

projectRouter.get('/get-all', projectController.getProjects);

projectRouter.post('/post', projectController.postProject);

projectRouter.get('/get/:id', projectController.getProjectById);

projectRouter.delete('/delete/:id',projectController.deleteProject)



module.exports = projectRouter;
