const express = require('express');
const app = express();
const port = 5000;
app.use(express.static('./public'));

const router=require('./routes/tasks');
app.use('/api/v1',router);
app.listen(port,()=>{
    console.log(`Server running at port no. ${port}`);
})


