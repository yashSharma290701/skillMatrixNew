const UserData = require("../model/user")

exports.login = async(req,res)=>{
    const {username,password} = req.body.data
    console.log(username,password);
try{
    const user = await UserData.findOne({email:username});
    console.log(user.passwords);
    if(user){
        if(password===user.passwords && user.role==="User"){
            return res.status(200).json({Role:user.role, email:user.email})
        }
        if(password===user.passwords){
            return res.status(200).json({Role:user.role, email:user.email})
        }
        else{
            console.log("password not match");
            return res.status(401).json("Incorrect Passsword")
        }
    }
    else{
        return res.status(401).json("Email not found")
    }
}
catch(err){
    console.log(err);
return res.status(500).json("Internal Server Error!")
}
}