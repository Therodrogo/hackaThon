const { find } = require('../models/eventModel');
const eventSchema = require('../models/eventModel')

const eventService = {
    async getEvents(){
        const events = await eventSchema.find()
        if (events == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No events found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Events found',
            data: events,
        };
    },
    async postEvent(req,res) {
        const event = eventSchema(req.body)
        event.save()
        if (event) {
            return {
                status: 'success',
                code: 200,
                message: 'Event post is created',
                data: event,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Event post not created',
            data: {},
        };
    },
    async getEventById(id) {
        const event = await eventSchema.find({_id:id});
        if (event) {
            return {
                status: 'success',
                code: 200,
                message: 'Event with id ' + id + ' found',
                data: event,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Event with id ' + id + ' not found',
            data: {},
        };
    },async deleteEvent(id){
        const event = await eventSchema.deleteOne({_id:id});
        if (event) {
            return {
                status: 'success',
                code: 200,
                message: 'Event with id ' + id + ' removed',
                data: event,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Event with id ' + id + ' not removed',
            data: {},
        };
    }
};

module.exports = eventService;