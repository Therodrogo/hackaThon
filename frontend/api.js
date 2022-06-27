import axios from 'axios'

const url="http://localhost:9000/"
export default class API{
    //UserMethods
    static async postUser(data){  
        try {
            const res = await axios.post(url+"user/post",data)
            return res.data
        } catch (error) {
            return error.response.data
        }   
    }
    static async getAllUsers(){

        try {
            const res = await axios.get(url+"user/get-all")
            
            return res.data
        } catch (error) {
            return error.response.data
        }
    

    }
    static async getUserByID(id){
        try {
            const res = await axios.get(url+"user/get/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async deleteUserByID(id){
        try {
            const res = await axios.delete(url+"user/delete/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }
    static async signUpUser(data){
        try {
            const res = await axios.post(url + "user/signUp/", data)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }



    //EventMethods
    static async postEvent(data){  
        try {
            const res = await axios.post(url+"event/post",data)
            return res.data
        } catch (error) {
            return error.response.data
        }   
    }
    static async getAllEvents(){

        try {
            const res = await axios.get(url+"event/get-all")
            
            return res.data
        } catch (error) {
            return error.response.data
        }
    

    }
    static async getEventByID(id){
        try {
            const res = await axios.get(url+"event/get/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async deleteEventByID(id){
        try {
            const res = await axios.delete(url+"event/delete/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }
    static async getGroupsFromEvent(id){
        try {
            const res = await axios.get(url+"event/getGroupsFromEvent/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    

    }


    //GroupMethods
    static async postGroup(data){  
        try {
            const res = await axios.post(url+"group/post",data)
            return res.data
        } catch (error) {
            return error.response.data
        }   
    }
    static async getAllGroups(){

        try {
            const res = await axios.get(url+"group/get-all")
            
            return res.data
        } catch (error) {
            return error.response.data
        }
    

    }
    static async getGroupByID(id){
        try {
            const res = await axios.get(url+"group/get/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async getGroupByCode(code){
        try {
            const res = await axios.get(url+"group/get-by-code/"+code)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async deleteGroupByID(id){
        try {
            const res = await axios.delete(url+"group/delete/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }
    static async joinGroup(data){
        try {
            const res = await axios.post(url+"group/joinGroup",data)
            return res.data
        } catch (error) {
            return error.response.data
            
        }

    }


    //PostMethods
    static async postPost(data){  
        try {
            const res = await axios.post(url+"post/post",data)
            return res.data
        } catch (error) {
            return error.response.data
        }   
    }
    static async getAllPosts(){

        try {
            const res = await axios.get(url+"post/get-all")
            
            return res.data
        } catch (error) {
            return error.response.data
        }
    

    }
    static async getPostByID(id){
        try {
            const res = await axios.get(url+"post/get/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async deletePostByID(id){
        try {
            const res = await axios.delete(url+"post/delete/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }



    //ProjectMethods
    static async postProject(data){  
        try {
            const res = await axios.post(url+"project/post",data)
            return res.data
        } catch (error) {
            return error.response.data
        }   
    }
    static async getAllProjects(){

        try {
            const res = await axios.get(url+"project/get-all")
            
            return res.data
        } catch (error) {
            return error.response.data
        }
    

    }
    static async getProjectByID(id){
        try {
            const res = await axios.get(url+"project/get/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async deleteProjectByID(id){
        try {
            const res = await axios.delete(url+"project/delete/"+id)
            return res.data
        } catch (error) {
            return error.response.data
        }    
    }


}