const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name : String, 
    completed : Boolean
})

module.exports = mongoose.model('Tasks', TaskSchema);