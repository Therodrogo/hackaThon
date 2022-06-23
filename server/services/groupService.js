
const GroupSchema = require('../models/groupModel')

const GroupService = {
    async getGroups(){
        const Groups = await GroupSchema.find()
        if (Groups == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No Groups found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Groups found',
            data: Groups,
        };
    },
    async postGroup(req,res) {
        const Group = GroupSchema(req.body)
        Group.save()
        if (Group) {
            return {
                status: 'success',
                code: 200,
                message: 'Group post is created',
                data: Group,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Group post not created',
            data: {},
        };
    },
    async getGroupById(id) {
        const Group = await GroupSchema.find({_id:id});
        if (Group) {
            return {
                status: 'success',
                code: 200,
                message: 'Group with id ' + id + ' found',
                data: Group,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Group with id ' + id + ' not found',
            data: {},
        };
    },async deleteGroup(id){
        const Group = await GroupSchema.deleteOne({_id:id});
        if (Group) {
            return {
                status: 'success',
                code: 200,
                message: 'Group with id ' + id + ' removed',
                data: Group,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Group with id ' + id + ' not removed',
            data: {},
        };
    }
};

module.exports = GroupService;