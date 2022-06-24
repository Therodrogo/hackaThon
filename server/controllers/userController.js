const { postService } = require('../services/userService');
const userService = require('../services/userService');


// Create the controller to handle all the services
const userController = {
    // Here you add all the controllers of the service
    async getUsers(req, res) {
        await userService
            .getUsers()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postUser(req,res){
        
        await userService
        .postUser(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getUserById(req, res) {
        const id = req.params.id;
        await userService
            .getUserById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deleteUser(req,res){
        
        const id = req.params.id;
        await userService.deleteUser(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }


};

module.exports = userController;