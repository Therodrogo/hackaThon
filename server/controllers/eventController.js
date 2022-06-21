const eventService = require('../services/eventService');

const eventController = {
    async getEvent(req, res) {
        await eventService
            .getEvent()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async getEventById(req, res) {
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
};

module.exports = eventController;