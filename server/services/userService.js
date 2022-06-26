const { find } = require('../models/userModel');
const userSchema = require('../models/userModel')

const userService = {
    async getUsers(){
        

        try{
            const users = await userSchema.find()
            if(users.length>0){
                return{   status: 'Success',code: 200,message: 'Users found',data: users}
            }else{
                return{   status: 'Failed',code: 400,message: 'Users not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        } 
    },
    async postUser(req,res) {
        try{
            const user = userSchema(req.body)
            await user.save()
            return{   status: 'Success',code: 200,message: 'User is created',data: user}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }   
    },
    async getUserById(id) {
        
        try{
            const user = await userSchema.find({_id:id});
            return{   status: 'Success',code: 200,message: 'User with id ' + id + ' is found',data: user}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }  
        
    },async deleteUser(id){
        
        try{
            const user = await userSchema.deleteOne({_id:id});
            return{   status: 'Success',code: 200,message: 'User with id ' + id + ' is removed',data: user}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }  
    }
};

module.exports = userService;