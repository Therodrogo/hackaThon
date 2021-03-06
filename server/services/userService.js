const userSchema = require('../models/userModel');
const groupSchema = require('../models/groupModel')
const bcrypt = require('bcryptjs');
const { group } = require('console');

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
            await user.save()
            return{   status: 'Success',code: 200,message: 'User is created', data: user    };
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }   
    },
    async getUserById(id) {
        
        try{
            const user = await userSchema.findOne({_id:id});
            return{   status: 'Success', code: 200, message: 'User with id ' + id + ' is found', data: user }
                
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
            return{ status: 'Success', code: 200, message: 'User autenticated', data: user}             
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
            const user = await userSchema.findOne({_id:userID})
            .populate({path:"groupsID",select:["name","leaderID"]})
            
            if(user!=null){
                if(user.groupsID.length>0){
                    const grupos =[]
                    const gr = await Promise.all(await user.groupsID.map(async (element)=>{
                        grupos.push(await groupSchema.findOne({_id:element._id}).populate([{path:"userID",select:"name"},{path:"eventID",select:"name"}]))    
                    }))
                    
                    
                    return  {status: 'Success',code: 200, message: 'User groups found',data:grupos}
                }else{
                    return{  status: 'Failed',code: 400,message: "This user dont have groups for see",data: {}}
                }
                
            }else{
                return{  status: 'Failed',code: 400,message: "This user dont exist",data: {}}
            }
            
        } catch (error) {
            console.log(error)
            return{  status: 'Failed',code: 400,message: error.message,data: {}}    
        }

    }
};

module.exports = userService;