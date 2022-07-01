

const userSchema = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');

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
    async postUser(req, res) {
        try{
            const user = userSchema(req.body)
            user.password = await this.encryptPassword(user.password)
            const token = jwt.sign({id: user._id}, 'secretToken', {
                expiresIn: 60 * 60 * 24
            });
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

    },async signInUser(email, password){   
        try{         
            const user = await userSchema.findOne({ mail: email });
            if (user == null) {
                return{ status: 'Failed', code: 400, message: 'Not User found', data: {}}
            }
            const isMatch = await bcrypt.compare(password, user.password);           
            if (!isMatch) {
                return{ status: 'Failed', code: 400, message: 'Incorrect Data', data: {}} 
            }
            const token = jwt.sign({id: user._id}, 'secretToken', {
                expiresIn: 60 * 60 * 24
            });       
            return{ status: 'Success', code: 200, message: 'User autenticated', {data: user, token}}             
        }catch(e){
           return{  status: 'Failed', code: 400, message: e.message, data: {}}
        }  
    },

    async updateUserData(data){//Solicitar id
        try {
            const userID = data.body.userID;
            const mail = data.body.mail;
            const name = data.body.name;
            const career = data.body.career;
            const phone = data.body.phone;

            const mailExistence = await userSchema.exists({mail: mail, _id: userID});
            const onlyMailExistence = await userSchema.exists({mail: mail});

            const phoneExistence = await userSchema.exists({phone: phone, _id: userID});
            const onlyPhoneExistence = await userSchema.exists({phone: phone});

            if (!mailExistence || onlyMailExistence){ 
                if(!phoneExistence || onlyPhoneExistence){
                    await userSchema.findOneAndUpdate({_id:userID},{mail:mail, name:name, career:career, phone:phone})
                    return  {status: 'Success',code: 200, message: 'User update',data: true}
                }
                else{
                    return{  status: 'Failed',code: 400, message: 'phone is in use',data: false} 
                }                                        
            }else{
                return{  status: 'Failed',code: 400, message: 'mail is in use',data: false} 
            }
        } catch (error) {
            return{  status: 'Failed',code: 400,message: error.message,data: false}
        }
    },
    async getGroupsUser(userID){
        

        try {
            const user = await userSchema.findOne({_id:userID}).populate({path:"groupsID",select:"name"})
            
            if(user!=null){
                
                return  {status: 'Success',code: 200, message: 'User groups found',data: user.groupsID}
            }else{
                return{  status: 'Failed',code: 400,message: "This user dont exist",data: {}}
            }
            
        } catch (error) {
            return{  status: 'Failed',code: 400,message: error.message,data: {}}    
        }

    }
};

module.exports = userService;