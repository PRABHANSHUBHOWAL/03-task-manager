const Task = require("../models/task");

const getAllTasks = async (req,res) =>{
    try {
        const task = await Task.find({});
        res.json({task}); 
    } catch (error) {
        res.json({msg : "Generic Error found at getAllTasks"});
    }
    // res.json({succesful:true , data:"Get all Tasks"});
}
const getTask = async (req,res) =>{
    try {
        const task = await Task.findOne({_id : req.params.id});
        res.json({task}); 
    } catch (error) {
        res.json({msg : "Generic Error found at getAllTasks"});
    }
    // res.json({succesful:true , data : req.params.id});
}
const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.json({task}); 
    } catch (error) {
        res.json({msg : "Generic Error found at createTask"});
    }
    
}
const updateTask = (req,res) =>{
    
    res.json({succesful:true, update:req.params.id});
}
const deleteTask = async (req,res) =>{
    try {
        const {id : taskid} =req.params;
        const task = await Task.findOneAndDelete({_id : taskid})
        if(!task)
        return res.json({msg :"Task not found at deleteTask"});
        // res.json({task}); 
        res.json({succesful:true, delete:req.params.id ,task : task});
    } catch (error) {
        res.json({msg :"Generic Error found at deleteTask",error : error});
    }
    
}
module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask};