const projectService = require('../services/projectService');


// Create the controller to handle all the services
const projectController = {
    // Here you add all the controllers of the service
    async getProjects(req, res) {
        await projectService
            .getProjects()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },

    async postProject(req,res){
        
        await projectService
        .postProject(req)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });
        
    },async getProjectById(req, res) {
        const id = req.params.id;
        await projectService
            .getProjectById(id)
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((err) => {
                res.status(err.code).json(err);
            });
    },
    async deleteProject(req,res){
        
        const id = req.params.id;
        await projectService.deleteProject(id)
        .then((result) => {
            res.status(result.code).json(result);
        })
        .catch((err) => {
            res.status(err.code).json(err);
        });

    }


};

module.exports = projectController;