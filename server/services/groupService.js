
const GroupSchema = require('../models/groupModel')
const userSchema = require('../models/userModel')
const eventSchema = require('../models/eventModel')

const GroupService = {
    async getGroups(){
        try{
            const groups = await GroupSchema.find()
            if(groups.length>0){
                return{   status: 'Success',code: 200,message: 'groups found',data: groups}
            }else{
                return{   status: 'Failed',code: 400,message: 'groups not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postGroup(req,res) {
        
        try{
            const group = GroupSchema(req.body)
            group.userID.push(group.leaderID)
            const user = await userSchema.findOne({_id:group.leaderID}).populate({path:"eventsID",select:"_id"})
            var IsOnGroup=false           
            user.eventsID.forEach(element => {
                if(element._id.equals(group.eventID))IsOnGroup=true    
            });
            
            if(!IsOnGroup){
                await group.save()
                await eventSchema.findOneAndUpdate(
                    {"_id":group.eventID},
                    {"$push":{"groupsID":group._id}}
                )
                await userSchema.findOneAndUpdate({"_id":group.userID},
                    {"$push":{"eventsID":group.eventID}}
                )
                await userSchema.findOneAndUpdate({"_id":group.userID},
                    {"$push":{"groupsID":group._id}}
                )
                return{   status: 'Success',code: 200,message: 'group is created',data: group}
            }else{
                return{status: 'Failed',code: 400,message:"You are already registered in a group for this event",data: {}}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getGroupById(id) {
        try{
            const group = await GroupSchema.findOne({_id:id});
            console.log(group)
            return{   status: 'Success',code: 200,message: 'group with id ' + id + ' is found',data: group}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },async deleteGroup(id){
        try{
            const group = await GroupSchema.deleteOne({_id:id});
            return{   status: 'Success',code: 200,message: 'group with id ' + id + ' is removed',data: group}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    },async joinGroup(req){
       
        const groupID = req.groupID
        const code = req.code
        const userID = req.userID
        try {
            const user = await userSchema.findOne({_id:userID}).populate({path:"groupsID",select:"_id"})
            const group = await GroupSchema.findOne({_id:groupID}).populate("eventID").populate("userID")
            try {
                if(group.code==code){
                    var onUserGroups=false
                    user.groupsID.forEach(element => {
                        if(element._id==groupID) onUserGroups=true
                    });
                    if(!onUserGroups){
                        
                        if(group.userID.length+1<group.eventID.groupLimit){
                            await GroupSchema.findOneAndUpdate({_id:groupID},
                                {"$push":{"userID":userID}}   

                            )
                            await userSchema.findOneAndUpdate({"_id":userID},
                                {"$push":{"eventsID":group.eventID}}
                            )
                            await userSchema.findOneAndUpdate({"_id":userID},
                                {"$push":{"groupsID":group._id}}
                            )
                            return{status: 'Success',code: 400,message: "You have been successfully added",data:true}
                        }else{
                            return{status: 'Failed',code: 400,message: "This group is complete",data:false}
                        }
                        
                    }else{
                        return{status: 'Failed',code: 400,message: "You are already registered in a group for this event",data:false}
                    }
                }else{
                    return{status: 'Failed',code: 400,message: "This is an invalid code",data:false}
                }

                
                
            } catch (error) {
                return{status: 'Failed',code: 400,message: e.message,data: false}           
            }
            
            
            
        }
        catch (error) {
            return{status: 'Failed',code: 400,message: e.message,data: false}
        }
        
        
        

    }
};

module.exports = GroupService;