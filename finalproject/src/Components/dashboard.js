// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Typography from '@mui/material/Typography';
// import { useEffect, useState } from 'react';
// import Navbar from '../HomePage/Navbar';
// import SideBar from '../HomePage/SideBar';
// import axios from 'axios';

// export default function CertificateTable() {
//   const [certificates, setCertificates] = useState([]);

//   useEffect(() => {
//     // Fetch certificates
//     const fetchCertificates = async () => {
//       try {
//         const response = await axios.post('http://localhost:5001/getAllCertificate');
//         const responseData = response.data;
//         setCertificates(responseData.allUserData);
//         console.log(responseData.allUserData);
//         if (response.status === 203) {
//           alert('Certificate Added');
//         } else if (response.status === 500) {
//           alert('Something went wrong');
//         }
//       } catch (error) {
//         console.error('Error fetching certificate data:', error);
//         alert('An error occurred while fetching certificate data');
//       }
//     };

//     // Call the fetch function
//     fetchCertificates();
//   }, []);

//   // Function to handle accepting certificate
//   const handleAccept = async (certificateId) => {
//     try {
//       const response = await axios.post('http://localhost:5001/acceptCertificate', { certificateId });
//       if (response.status === 200) {
//         alert('Certificate Accepted');
//         // You may want to refetch the certificates after accepting one
//       } else {
//         alert('Something went wrong');
//       }
//     } catch (error) {
//       console.error('Error accepting certificate:', error);
//       alert('An error occurred while accepting certificate');
//     }
//   };

//   // Function to handle rejecting certificate
//   const handleReject = async (certificateId) => {
//     try {
//       const response = await axios.post('http://localhost:5001/rejectCertificate', { certificateId });
//       if (response.status === 200) {
//         alert('Certificate Rejected');
//         // You may want to refetch the certificates after rejecting one
//       } else {
//         alert('Something went wrong');
//       }
//     } catch (error) {
//       console.error('Error rejecting certificate:', error);
//       alert('An error occurred while rejecting certificate');
//     }
//   };

//   return (
//     <div className="homepage">
//       <Navbar />
//       <div className="container-fluid text-center">
//         <div className="row">
//           <div className="col-2 p-0">
//             <SideBar />
//           </div>
//           <div className="col col-7 cardContainer" style={{ marginLeft: '4rem' }}>
//             {certificates.map((certificate) => (
//               <Card key={certificate._id} className='mb-2 mt-2 ml-3 mr-3'>
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     Employee ID: {certificate.userId}
//                   </Typography>
//                   <Typography variant="body1" component="div">
//                     Certificate ID: {certificate._id}
//                   </Typography>
//                   <Typography variant="body1" component="div">
//                     Status: {certificate.status}
//                   </Typography>
//                   <Button  onClick={() => handleAccept(certificate._id)} variant="contained" color="primary">
//                     Accept
//                   </Button>
//                   &nbsp; &nbsp; &nbsp;
//                   <Button onClick={() => handleReject(certificate._id)} variant="contained" color="secondary">
//                     Reject
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';

export default function CertificateTable() {



  // Function to handle rejecting certificate
  


  return (
    < >
      <Navbar />
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col col-2 p-0" >
            <SideBar />
          </div>
          <div className="col col-9 mt-3" style={{ marginLeft: '2%',marginRight: '2%' }}>
          <iframe title="finalPoweBI" width="1000" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d60eef79-7b13-4934-ba8c-5a1e72ff9ce6&autoAuth=true&ctid=2800c0a0-70e9-49be-8733-faeaa6aced99" frameborder="0" allowFullScreen="true"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
