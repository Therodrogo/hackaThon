const { getRequestGroup, acceptRequest } = require('../services/requestService');
const requestService = require('../services/requestService');


// Create the controller to handle all the services
const requestController = {
    // Here you add all the controllers of the service
    async getRequests(req, res) {
        await requestService
            .getRequests()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postRequest(req,res){
        
        await requestService
        .postRequest(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getRequestById(req, res) {
        const id = req.params.id;
        await requestService
            .getRequestById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deleteRequest(req,res){
        
        const id = req.params.id;
        await requestService.deleteRequest(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    },
    async getRequestGroup(req,res){
        
        await requestService
        .getRequestGroup(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },

    async acceptRequest(req,res){
        
        await requestService
        .acceptRequest(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },

    async declineRequest(req,res){
        
        await requestService
        .declineRequest(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    }


};

module.exports = requestController;