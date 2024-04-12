const UserData = require('../model/user');

exports.updatePassword=async(req,res)=>{
    try{
        const { email, newPassword, defaultPassword} = req.body.data;
       console.log(email, newPassword, defaultPassword);
       if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    const user = await UserData.findOne({ email });
    console.log(user)
    // If user not found, send error response
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    if(user.passwords=== defaultPassword){
        user.passwords = newPassword;     
    }
    else{
        return res.status(404).json({error:"Mismatch"})
    }
    // Update the user's password with the new password
    await user.save();
    // Send a success response
    res.status(200).json({ message: "Password updated successfully" });
    }
    catch(err){
        console.error("Error updating password:", error);
        res.status(500).json({ error: "An error occurred while updating the password" });
    }
};