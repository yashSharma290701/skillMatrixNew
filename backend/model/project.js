const mongoose = require('mongoose');

const projectData = new  mongoose.Schema({
    userId:{
        type:String,
        // unique:true
    },
    projectId:{
        type:String,
        // unique:true
    },
    managerId:{
        type:String,
        // unique:true
    },
    projectName:String,
    startingDate:Date,
    EndingDate:Date,
    status:String,
    techStack:String
})

const projectsData = mongoose.model('project', projectData);

module.exports = projectsData;