const express = require('express');
const userController = require('../controllers/userController');

// Create the router
const userRouter = express.Router();

// Add the routes to the router
userRouter.get('/get-all', userController.getUsers);

userRouter.post('/post', userController.postUser);

userRouter.get('/get/:id', userController.getUserById);

userRouter.delete('/delete/:id', userController.deleteUser);

userRouter.post('/signIn', userController.signInUser);

userRouter.post('/updateUserData', userController.updateUserData);

userRouter.get('/getGroupsUser/:id', userController.getGroupsUser);

module.exports = userRouter;