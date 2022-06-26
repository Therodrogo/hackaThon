
const GroupService = require('../services/groupService');


// Create the controller to handle all the services
const GroupController = {
    // Here you add all the controllers of the service
    async getGroups(req, res) {
        await GroupService
            .getGroups()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postGroup(req,res){
        
        await GroupService
        .postGroup(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getGroupById(req, res) {
        const id = req.params.id;
        await GroupService
            .getGroupById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deleteGroup(req,res){
        
        const id = req.params.id;
        await GroupService.deleteGroup(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    },
    async joinGroup(req,res){
        
        
        await GroupService.joinGroup(req.body)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }


};

module.exports = GroupController;