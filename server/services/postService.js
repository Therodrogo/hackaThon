const { find } = require('../models/postModel');
const postSchema = require('../models/postModel')

const postService = {
    async getPosts(){
        const posts = await postSchema.find()

        if (posts == 0) {
            return {
                status: 'failed',
                code: 404,
                message: 'No posts found',
                data: {},
            };
        }
        return {
            status: 'success',
            code: 200,
            message: 'Posts found',
            data: posts,
        };
    },
    async postPost(req,res) {
        const post = postSchema(req.body)
        post.save()
        if (post) {
            return {
                status: 'success',
                code: 200,
                message: 'Post post is created',
                data: post,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Post post not created',
            data: {},
        };
    },
    async getPostById(id) {
        const post = await postSchema.find({_id:id});
        if (post) {
            return {
                status: 'success',
                code: 200,
                message: 'Post with id ' + id + ' found',
                data: post,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'Post with id ' + id + ' not found',
            data: {},
        };
    },async deletePost(id){
        const post = await postSchema.deleteOne({_id:id});
        if (post) {
        
            return {
                status: 'success',
                code: 200,
                message: 'Post with id ' + id + ' removed',
                data: post,
            };
        }
        return {
            status: 'failed',
            code: 404,
            message: 'post with id ' + id + ' not removed',
            data: {},
        };
    }
};

module.exports = postService;