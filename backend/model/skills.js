const mongoose = require('mongoose');

const certificateData = new  mongoose.Schema({
    userId:{
        type:String,
        // unique:true
    },
    skills:String,
    rating:Number
    
})

const skillData = mongoose.model('skills', certificateData);

module.exports = skillData;

