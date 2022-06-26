const { find } = require('../models/eventModel');
const eventSchema = require('../models/eventModel')

const eventService = {
    async getEvents(){
        try{
            const events = await eventSchema.find()
            if(events.length>0){
                return{   status: 'Success',code: 200,message: 'events found',data: events}
            }else{
                return{   status: 'Failed',code: 400,message: 'events not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postEvent(req,res) {
        try{
            const event = eventSchema(req.body)
            await event.save()
            
            return{   status: 'Success',code: 200,message: 'event is created',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getEventById(id) {
        try{
            const event = await eventSchema.find({_id:id});
            return{   status: 'Success',code: 200,message: 'event with id ' + id + ' is found',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },async deleteEvent(id){
        try{
            const event = await eventSchema.deleteOne({_id:id});
            return{   status: 'Success',code: 200,message: 'event with id ' + id + ' is removed',data: event}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    },async getGroupsFromEvent(id){
        try {
            const event = await eventSchema.findOne({_id:id}).populate(
                {
                    path:"groupsID" 
                }
            )  
           
            
            if(event.groupsID.length>0){
               return{   status: 'Success',code: 200,message: 'Groups were found for the event with ID' + id,data: event.groupsID}
            }else{
                return{   status: 'Failed',code: 200,message: 'Event with id:' + id + ' dont have groups',data: []}
            }
            
            


            //return{ status: 'success',code: 200,message: 'Groups for event with' + id + ' are found',data: event.}
        } catch (e) {
            return{status: 'Failed',code: 400,message: e.message,data: []}
        }
        
    }
};

module.exports = eventService;