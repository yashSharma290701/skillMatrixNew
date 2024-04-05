const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    passwords:String,
    age: Number,
    role:String,
    gender:String,
    phoneNumber:Number,
    dateOfJoining:Date,
    designation:String,
    userId:{
        type:String,
        unique:true
    },
    State:String

});

const UserData = mongoose.model('User', userDataSchema);

module.exports = UserData;
