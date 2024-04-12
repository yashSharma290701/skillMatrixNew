const skillsData = require('../model/skills');
const UserData = require('../model/user');

exports.viewData = async (req, res) => {
    try {
        const employeeID = req.body.data;
        console.log(employeeID);

        const foundData = await skillsData.find({ userId: employeeID }).exec();

        if (foundData && foundData.length > 0) {

            const userData = await UserData.findOne({ userId: employeeID }).exec();

            if(userData){
                console.log("User Name:", userData.firstName);
              //  res.status(200).json({Employee_Name:userData.firstName+" "+userData.lastName})
            }
            // Employee IDs found, do something with foundData
            Skills =[]
            Rating=[]
            foundData.forEach(data => {
                console.log("Found skillsData:", data);
                Skills.push(data.skills)
                Rating.push(data.rating)
                // Perform your operations on each found document here
            });
            res.status(200).json({skills:Skills,rating:Rating,firstName:userData.firstName,lastName:userData.lastName,Age:userData.age,Email:userData.email}); // Send foundData as response
        } else {
            // No documents found for the provided employeeID
            console.log("No matching skillsData found");
            res.status(404).send('No matching skillsData found');
        }
    } catch (error) {
        console.error('Error in sending Skills', error);
        res.status(500).send('Internal Server Error');
    }
};