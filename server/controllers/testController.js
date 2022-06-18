const { postService } = require('../services/testService');
const testService = require('../services/testService');


// Create the controller to handle all the services
const testController = {
    // Here you add all the controllers of the service
    async getTests(req, res) {
        await testService
            .getTests()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async getTestById(req, res) {
        const id = req.params.id;
        await testService
            .getTestById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async postService(req,res){
        
        await testService.postService(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },
    async deleteService(req,res){
        const id = req.params.id;
        await testService.deleteService(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }
};

module.exports = testController;
