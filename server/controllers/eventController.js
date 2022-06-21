const { postService } = require('../services/eventService');
const eventService = require('../services/eventService');


// Create the controller to handle all the services
const eventController = {
    // Here you add all the controllers of the service
    async getEvents(req, res) {
        await eventService
            .getEvents()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postEvent(req,res){
        
        await eventService
        .postEvent(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getEventById(req, res) {
        const id = req.params.id;
        await eventService
            .getEventById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deleteEvent(req,res){
        
        const id = req.params.id;
        await eventService.deleteEvent(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }


};

module.exports = eventController;