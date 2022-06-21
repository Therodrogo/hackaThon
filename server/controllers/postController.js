const postService = require('../services/postService');


// Create the controller to handle all the services
const postController = {
    // Here you add all the controllers of the service
    async getPosts(req, res) {
        await postService
            .getPosts()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postPost(req,res){
        
        await postService
        .postPost(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getPostById(req, res) {
        const id = req.params.id;
        await postService
            .getPostById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deletePost(req,res){
        
        const id = req.params.id;
        await postService.deletePost(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }


};

module.exports = postController;