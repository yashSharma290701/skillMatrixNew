import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import TextField from '@mui/material/TextField';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Projects() {


  const [data, setdata] = useState({
    employeeId: '',
    projectID: '',
    projectName: '',
    managerID:'',
    StartingDate: '',
    EndingDate: '',
    status:"pending",
    techStack:''
  })
const navigate = useNavigate()
  const handleEvent = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/projectDetails',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
      })
    console.log(response)
    if(response.status==203){
    alert('Certificate Added')
    navigate('/Home')
  }
    if (response.status === 500) {
      alert('Something went wrong')
    }
  }

  return (
    <div  >
      <Navbar />
      <div class="container-fluid text-center sidebar">
        <div class="row sidebar">
          <div class="col-2 p-0 ">
            <SideBar />
          </div>
          <div class="col-10 userDetails ">
            <MDBContainer fluid className=''>
              <MDBRow className='justify-content-center align-items-center m-5 '>
                <MDBCard className='p-0'>
                  <MDBCardBody className='px-4 certificateDetails'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Project Information</h3>
                    <MDBRow>
                      <MDBCol md='6'>
                      <TextField sx={{ width: '100%', maxWidth: 500 }} label="ProjectName" name="projectName" variant="filled" className="mb-3 mt-3  empID" 
                      onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                      </MDBCol>
                      <MDBCol md='6'>
                          <TextField sx={{ width: '100%', maxWidth: 500 }} label="ProjectID" name="projectID" variant="filled" className="mb-3 mt-3  empID" 
                      onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <TextField sx={{ width: '100%', maxWidth: 700 }} label="ManagerId" name="managerID" variant="filled" className="mb-3 mt-3  empID" 
                      onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                      </MDBCol>
                      <MDBCol md='6'>
                        <TextField sx={{ width: '100%', maxWidth: 700 }} label="EmployeeId" name="employeeId" variant="filled" className="mb-3 mt-3  empID" 
                      onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='Starting Date' size='lg' id='form4' type='Date'
                        name='StartingDate'
                        onChange={handleEvent}
                        />
                        
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 certificateInput' label='Ending Date' size='lg' id='form5' type='Date'
                        name='EndingDate' 
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                      <TextField sx={{ width: '100%', maxWidth: 700 }} label="Tech Stack" name="techStack" variant="filled" className="mb-3 mt-3  empID" 
                      onChange={handleEvent} InputLabelProps={{ style: { color: 'brown' } } } />
                      </MDBCol>
                    </MDBRow>
                    <button className='mb-4 btn-primary' size='lg' onClick={handleSubmit} >Add Certificate</button>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

