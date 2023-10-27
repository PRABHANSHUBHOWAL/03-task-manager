const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const port = 5000;

// middleware
app.use(express.static('./public'));
app.use(express.json())


app.use('/api/v1',tasks);

const start= async ()=>{
    try {
        await connectDB(process.env.mongo_uri);
        app.listen(port,()=>{
            console.log(`Server running at port no. ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();



