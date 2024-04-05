const UserData = require('../model/user');
const certificates = require('../model/certificates');
const project = require('../model/project')
exports.getAllData = async(req,res)=>{ 
    
    const {email}= req.body;

    try {    
      
        const allUserData = await UserData.findOne({email:email});
  console.log(email)
        // If no user data is found, return a 404 status and message
        if (!allUserData || allUserData.length === 0) {
            return res.status(404).json({ message: 'No user data found' });
        }
 
        // If user data is found, return it in the response
        res.status(200).json({allUserData});
    } catch (error) {
        // If an error occurs, return a 500 status and error message
        res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
}

exports.getAllCertificate = async(req,res)=>{ 

    try {    
      
        const allUserData = await certificates.find();
        // If no user data is found, return a 404 status and message
        if (!allUserData || allUserData.length === 0) {
            return res.status(404).json({ message: 'No user data found' });
        }
 
        // If user data is found, return it in the response
        res.status(200).json({allUserData});
    } catch (error) {
        // If an error occurs, return a 500 status and error message
        res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
}
