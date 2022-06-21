const express = require('express');
const postController = require('../controllers/postController');

// Create the router
const postRouter = express.Router();

// Add the routes to the router
postRouter.get('/get-all', postController.getPosts);

postRouter.post('/post', postController.postPost);

postRouter.get('/get/:id', postController.getPostById);

postRouter.delete('/delete/:id',postController.deletePost)

module.exports = postRouter;