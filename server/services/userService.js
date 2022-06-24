const { find } = require('../models/userModel');
const userSchema = require('../models/userModel')

const userService = {
    async getUsers(){
        const users = await userSchema.find()

        if (users == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No users found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Users found',
            data: users,
        };
    },
    async postUser(req,res) {
        const user = userSchema(req.body)
        user.save()
        if (user) {
            return {
                status: 'success',
                code: 200,
                message: 'User post is created',
                data: user,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'User post not created',
            data: {},
        };
    },
    async getUserById(id) {
        const user = await userSchema.find({_id:id});
        if (user) {
            return {
                status: 'success',
                code: 200,
                message: 'User with id ' + id + ' found',
                data: user,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'User with id ' + id + ' not found',
            data: {},
        };
    },async deleteUser(id){
        const user = await userSchema.deleteOne({_id:id});
        if (user) {
        
            return {
                status: 'success',
                code: 200,
                message: 'User with id ' + id + ' removed',
                data: user,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'user with id ' + id + ' not removed',
            data: {},
        };
    }
};

module.exports = userService;