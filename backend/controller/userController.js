const UserData = require('../model/user');
const nodemailer = require('nodemailer');

function generateRandomPassword() {
    const length = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
exports.saveDetail = async (req, res) => {
    try {
        const { firstName, lastName, email, age,role,gender,phoneNumber,dateOfJoining,userId,State, designation} = req.body.data;
        const newUser = new UserData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password:generateRandomPassword(),
            age: age,
            role:role,
            gender:gender,
            designation,designation,
    phoneNumber:phoneNumber,
    dateOfJoining:dateOfJoining,
    userId:userId,
    State:State
        });
        await newUser.save();
        // Send email
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: "yashsharma@jmangroup.com",
                pass: "Ya$290701"
            }
        });
        const mailOptions = {
            from: "yashsharma@jmangroup.com",
            to: email,
            subject: "Change Password",
            text:"Name:"+ firstName +" "+lastName+"\n"+"Password:"+generateRandomPassword()+" "+"\n"+"You have to change your password: "+" http://localhost:3000/changepassword "
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error saving user details or sending email:', error);
        res.status(500).send('Internal Server Error');
    }
};