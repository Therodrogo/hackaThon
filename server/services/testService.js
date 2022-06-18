const { find } = require('../models/testModel');
const serviceSchema = require('../models/testModel')

const testService = {
    async getTests() {
        const tests = await serviceSchema.find()

        if (tests == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No tests found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Tests found',
            data: tests,
        };
    },
    async getTestById(id) {
        const test = await serviceSchema.find({_id:id});
        if (test) {
            return {
                status: 'success',
                code: 200,
                message: 'Test with id ' + id + ' found',
                data: test,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Test with id ' + id + ' not found',
            data: {},
        };
    },async postService(req,res) {
        const test = serviceSchema(req.body)
        test.save()
        if (test) {
            return {
                status: 'success',
                code: 200,
                message: 'Test post is created',
                data: test,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Test post not created',
            data: {},
        };
        
    }, async deleteService(id){
        const test = await serviceSchema.deleteOne({_id:id});
        if (test) {
            return {
                status: 'success',
                code: 200,
                message: 'Test with id ' + id + ' removed',
                data: test,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Test with id ' + id + ' not removed',
            data: {},
        };
    }
};

module.exports = testService;
