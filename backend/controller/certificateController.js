const certificateData = require('../model/certificates');
const projectData = require('../model/project')
exports.userCertificate = async (req, res) => {
    try {
        const { EmployeeID, CertificateID, CourseName, StartingDate, EndingDate, OrganizationName, status,techstack } = req.body.data
        console.log({
            EmployeeID,
            CertificateID,
            CourseName, StartingDate
            , EndingDate,
            OrganizationName, status,
            techstack
        })

        const newCertificate = new certificateData({
            userId: EmployeeID,
            certificateId: CertificateID,
            courseName: CourseName,
            IssuingDate: StartingDate,
            EndingDate: EndingDate,
            OrganizationName: OrganizationName,
            status: status,
            techstack:techstack
        });

        await newCertificate.save()
        res.status(200).
            send('Certificate Added')
    }
    catch (err) {
        console.error('Error in sending Certifiate', error);
        res.status(500).send('Internal Server Error');
    }
};
exports.projectDetails = async (req, res) => {
    try {
        const { employeeId,
        projectID,
        projectName,
        managerID,
        StartingDate,
        EndingDate,
        status,
        techStack} = req.body.data
        console.log({
            employeeId,
            projectID,
            managerID,
            projectName, StartingDate
            , EndingDate,
            techStack, status
        })
        const projectDetails = new projectData({
            userId:employeeId,
            projectId:projectID,
            managerId:managerID,
            projectName :projectName,
            StartingDate:StartingDate,
            EndingDate:EndingDate,
            techStack:techStack,
            status:status
        });
        await projectDetails.save()

    }
    catch (err) {
        console.error('Error in project Saving', error);
        res.status(500).send('Internal Server Error');
    }
}