const requestSchema = require('../models/requestModel')
const groupSchema = require('../models/groupModel');
const userSchema = require('../models/userModel');
const { populate } = require('../models/groupModel');

const requestService = {
    async getRequests(){
        try{
            const requests = await requestSchema.find()
            if(requests.length>0){
                return{   status: 'Success',code: 200,message: 'requests found',data: requests}
            }else{
                return{   status: 'Failed',code: 400,message: 'requests not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postRequest(req,res) {
        
        try{
            const request = requestSchema(req.body)
            await request.save()
            return{   status: 'Success',code: 200,message: 'request is created',data: request}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getRequestById(id) {
        try{
            const request = await requestSchema.findOne({_id:id});
            return{   status: 'Success',code: 200,message: 'request with id ' + id + ' is found',data: request}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async deleteRequest(id){
        try{
            const request = await requestSchema.deleteOne({_id:id});
            return{   status: 'Success',code: 200,message: 'request with id ' + id + ' is removed',data: request}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    },
    async getRequestGroup(req){
        try {
            const groupID = req.body.groupID;
            const requests = await requestSchema.find({groupID: groupID}).exec();
            if (requests.length >0){
                return{status: 'Success',code: 200,message:'request of join group for group with id '+ groupID+' found',data: requests}
            }
            else{
                return{status: 'Failed',code: 400,message:'no request found for group with id '+ groupID+'',data: requests}
            }
            
        } catch (e) {
            return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    },
    async acceptRequest(req){
        try {
            const requestID = req.body.requestID;
            const leaderID = req.body.leaderID;
            const request = await requestSchema.findOne({_id: requestID});
            const group = await groupSchema.findOne({_id: request.groupID});
            const postulant = await userSchema.findOne({_id: request.postulant});
            if (group.leaderID == leaderID){
                await groupSchema.findOneAndUpdate({_id: group._id}, 
                    {"$push": {"userID": postulant._id}}
                );
                await userSchema.findOneAndUpdate({_id: postulant._id},
                    {"$push": {"groupsID": group._id}}
                );
                await userSchema.findOneAndUpdate({_id: postulant._id},
                    {"$push": {"eventsID": group.eventID}}
                );
                await requestSchema.findOneAndDelete({_id:requestID});
                return{status: 'Success',code: 200,message:'User '+postulant.name+' added to group '+group.name ,data: true}
            }
            else{
                return{status: 'Failed',code: 400,message:'no permission to serve this request',data: false}
            }
        } catch (error) {
            return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    },
    async declineRequest(req){
        try {
            const requestID = req.body.requestID;
            const leaderID = req.body.leaderID;
            const request = await requestSchema.findOne({_id: requestID});
            const group = await groupSchema.findOne({_id: request.groupID});
            const postulant = await userSchema.findOne({_id: request.postulant});
            if (group.leaderID == leaderID){
                await requestSchema.findOneAndDelete({_id:requestID});
                return{status: 'Success',code: 200,message:'Request\'s user '+postulant.name+' declined' ,data: true}
            }
            else{
                return{status: 'Failed',code: 400,message:'no permission to serve this request',data: false}
            }
        } catch (error) {
            return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    }
};

module.exports = requestService;