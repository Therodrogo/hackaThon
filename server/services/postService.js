const { find } = require('../models/postModel');
const postSchema = require('../models/postModel')

const postService = {
    async getPosts(){
        try{
            const posts = await postSchema.find()
            if(posts.length>0){
                return{   status: 'Success',code: 200,message: 'posts found',data: posts}
            }else{
                return{   status: 'Failed',code: 400,message: 'posts not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postPost(req,res) {
        
        
        try{
            const post = postSchema(req.body)
            await post.save()
            return{   status: 'Success',code: 200,message: 'Post is created',data: post}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getPostById(id) {
        
        try{
            const post = await postSchema.find({_id:id});
            return{   status: 'Success',code: 200,message: 'Post with id ' + id + ' is found',data: post}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }  
    },async deletePost(id){
        try{
            const post = await postSchema.deleteOne({_id:id});
            return{   status: 'Success',code: 200,message: 'post with id ' + id + ' is removed',data: post}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    }
};

module.exports = postService;