const { find } = require('../models/eventModel');
const eventSchema = require('../models/eventModel')

const eventService = {
    async getEvents(){
        try{
            const events = await eventSchema.find()
            if(events.length>0){
                return{   status: 'success',code: 200,message: 'events found',data: events}
            }else{
                return{   status: 'failed',code: 400,message: 'events not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postEvent(req,res) {
        try{
            const event = eventSchema(req.body)
            await event.save()
            return{   status: 'success',code: 200,message: 'event is created',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getEventById(id) {
        try{
            const event = await eventSchema.find({_id:id});
            return{   status: 'success',code: 200,message: 'event with id ' + id + ' is found',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },async deleteEvent(id){
        try{
            const event = await eventSchema.deleteOne({_id:id});
            return{   status: 'success',code: 200,message: 'event with id ' + id + ' is removed',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    }
};

module.exports = eventService;