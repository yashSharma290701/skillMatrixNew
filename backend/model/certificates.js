const mongoose = require('mongoose');

const certificateData = new  mongoose.Schema({
    userId:{
        type:String,
        // unique:true 
    },
    certificateId:{
        type:String,
        // unique:true
    },
    courseName:String,
    IssuingDate:Date,
    EndingDate:Date,
    status:String,
    OrganizationName:String,
    techstack:String
})

const certificatesData = mongoose.model('certificate', certificateData);

module.exports = certificatesData;