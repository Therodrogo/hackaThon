
const GroupSchema = require('../models/groupModel')

const GroupService = {
    async getGroups(){
        try{
            const groups = await GroupSchema.find()
            if(groups.length>0){
                return{   status: 'success',code: 200,message: 'groups found',data: groups}
            }else{
                return{   status: 'failed',code: 400,message: 'groups not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postGroup(req,res) {
        
        try{
            const group = GroupSchema(req.body)
            group.userID.push(group.leaderID)
            await group.save()
            return{   status: 'success',code: 200,message: 'group is created',data: group}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getGroupById(id) {
        try{
            const group = await GroupSchema.find({_id:id});
            return{   status: 'success',code: 200,message: 'group with id ' + id + ' is found',data: group}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },async deleteGroup(id){
        try{
            const group = await GroupSchema.deleteOne({_id:id});
            return{   status: 'success',code: 200,message: 'group with id ' + id + ' is removed',data: group}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    }
};

module.exports = GroupService;