const UserData = require('../model/user');
const certificates = require('../model/certificates');
const projects = require('../model/project')
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
 
       console.log(allUserData)
        res.status(200).json({allUserData});
    } catch (error) {
        // If an error occurs, return a 500 status and error message
        res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
}

// exports.getAllProjects = async (req, res) => {
//     try {
//         const allUserProject = await projects.find();
//         if (!allUserProject || allUserProject.length === 0) {
//             return res.status(404).json({ message: "No projects found" });
//         }
//         console.log(allUserProject);
//         res.status(200).json({ allUserProject });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching projects", error: error.message });
//     }
// };





exports.acceptCertificate = async (req, res) => {
    const { certificateId } = req.body;
    try {
      const certificate = await certificates.findById(certificateId);
      if (!certificate) {
        return res.status(404).json({ error: 'Certificate not found' });
      }
      certificate.status = 'accepted';
      await certificate.save();
      res.status(200).json({ message: 'Certificate accepted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to accept certificate', error: error.message });
    }
  };
  
  exports.rejectCertificate = async (req, res) => {
    const { certificateId } = req.body;
    try {
      const certificate = await certificates.findById(certificateId);
      if (!certificate) {
        return res.status(404).json({ error: 'Certificate not found' });
      }
      certificate.status = 'rejected';
      await certificate.save();
      res.status(200).json({ message: 'Certificate rejected successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to reject certificate', error: error.message });
    }
  };