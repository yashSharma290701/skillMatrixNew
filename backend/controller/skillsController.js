const skillsData = require('../model/skills');

exports.userSkills = async(req,res)=>{
try{
const {  employeeID,skills,rating} = req.body.data
console.log({employeeID,skills,rating})

const newSkills = new skillsData({
    userId:employeeID,
    skills:skills,
    rating:rating
});

await newSkills.save()
res.status(200).
send('Skills Added')
}
catch(err){
    console.error('Error in sending Skills', error);
    res.status(500).send('Internal Server Error');
}
};