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
    }
};

module.exports = userService;