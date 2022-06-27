

const userSchema = require('../models/userModel');
const bcrypt = require('bcryptjs');

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
            user.password = await this.encryptPassword(user.password)
            await user.save()
            return{   status: 'Success',code: 200,message: 'User is created',data: user}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }   
    },
    async getUserById(id) {
        
        try{
            const user = await userSchema.findOne({_id:id});
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
    },async encryptPassword(password) {

        const salt = await bcrypt.genSalt(4);
        const hash = bcrypt.hash(password, salt);
        return hash;

    },async signUpUser(email, password){   
        try{         
            const user = await userSchema.findOne({ mail: email });
            if (user == null) {
                return{ status: 'Failed',code: 400,message: 'Not User found',data: false}
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return{ status: 'Failed',code: 400,message: 'Incorrect Data', data: false} 
            }       
            return{ status: 'Success',code: 200,message: 'User autenticated',data: true}             
        }catch(e){
           return{  status: 'Failed',code: 400,message: e.message,data: false}
        }  
    }
};

module.exports = userService;