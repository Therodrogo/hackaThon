const projectSchema = require('../models/projectModel')

const projectService = {
    async getProjects(){
        try{
            const projects = await projectSchema.find()
            if(projects.length>0){
                return{   status: 'success',code: 200,message: 'projects found',data: projects}
            }else{
                return{   status: 'failed',code: 400,message: 'projects not found',data: []}    
            }
            
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: []}
        }
    },
    async postProject(req,res) {
        
        try{
            const project = projectSchema(req.body)
            await project.save()
            return{   status: 'success',code: 200,message: 'project is created',data: project}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },
    async getProjectById(id) {
        try{
            const project = await projectSchema.find({_id:id});
            return{   status: 'success',code: 200,message: 'project with id ' + id + ' is found',data: project}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        } 
    },async deleteProject(id){
        try{
            const project = await projectSchema.deleteOne({_id:id});
            return{   status: 'success',code: 200,message: 'project with id ' + id + ' is removed',data: project}
                
        }catch(e){
           return{status: 'Failed',code: 400,message: e.message,data: {}}
        }
    }
};

module.exports = projectService;