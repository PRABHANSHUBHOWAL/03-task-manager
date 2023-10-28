const Task = require("../models/task");
const asyncWrapper = require ('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

const getAllTasks = asyncWrapper( async (req,res) =>{
    const tasks = await Task.find({});
    res.status(200).json({tasks}); 
    // res.json({succesful:true , data:"Get all Tasks"});
})
const getTask = asyncWrapper(async (req,res,next) =>{
    const task = await Task.findOne({_id : req.params.id});
    if(!task){
        return next(createCustomError(`No task with id ${req.params.id}`,404));
    }
    res.status(200).json({task});
    // res.json({succesful:true , data : req.params.id});
})
const createTask = asyncWrapper(async (req,res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task});    
})
const updateTask = asyncWrapper(async (req,res,next) =>{
    const taskID=req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body ,
        {
            new: true,runValidators: true,
        })
    console.log(task);
    if(!task){
        return res.json({msg : `No task with id ${taskID}`});
        // return next(createCustomError(`No task with id ${req.params.id}`,404));
    }
    res.json({task});
})
const deleteTask = asyncWrapper(async (req,res,next) =>{
    const {id : taskid} =req.params;
    const task = await Task.findOneAndDelete({_id : taskid})
    if(!task){
        return next(createCustomError(`No task with id ${req.params.id}`,404));
    }
    // res.json({task}); 
    // res.json({succesful:true, delete:req.params.id ,task : task});
})
module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask};