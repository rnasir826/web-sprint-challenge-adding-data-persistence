// build your `/api/tasks` router here

const express = require("express");
const Tasks = require("./model");
const router = express.Router();

// Gets all tasks 
router.get('/',(req,res)=>{
    Tasks.allTasks()
        .then(response => {
        res.status(200).json({Tasks:response})
    }).catch(err =>{
        res.status(500).json({Error: 'Could not find task', err})
    })
})
module.exports = router; 