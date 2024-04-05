import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';

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


function RegisterUser() {
  const [data, setdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    role: 'user',
    gender:'',
    phoneNumber:'',
    DateOfJoining:'',
    designation:'',
    experience:'',
    userId:"",
    State:""
  })

  const handleEvent = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/DetailSaved',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
      })
    console.log(response)
    if (response.status === 500) {
      alert('Email is already Present')
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
            <MDBContainer fluid >
              <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard className='p-0'>
                  <MDBCardBody className='px-4 certificateDetails'>
                    <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='First Name' size='lg' id='form1' type='text' 
                        name='firstName' onChange={handleEvent}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='Last Name' size='lg' id='form2' type='text'
                        name='lastName' onChange={handleEvent} />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='Age' size='lg' id='form3' type='text' name ="age"
                        onChange={handleEvent} />
                      </MDBCol>
                      <MDBCol md='6' className='mb-4'>
                        <h6 className="fw-bold">Gender: </h6>
                        <MDBRadio name='gender' id='inlineRadio1' value='Female' label='Female' inline onClick={handleEvent} />
                        <MDBRadio name='gender' id='inlineRadio2' value='Male' label='Male' inline  onClick={handleEvent}/>
                        <MDBRadio name='gender' id='inlineRadio3' value='Other' label='Other' inline  onClick={handleEvent}/>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='Email' size='lg' id='form4' type='email'
                        name='email'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='Phone Number' size='lg' id='form5' type='rel'
                        name='phoneNumber' 
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='User Id ' size='lg' id='form4' type='text'
                        name='userId'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='State' size='lg' id='form5' type='rel'
                        name='State'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>

                    {/* /fdjkv */}
                    <MDBRow>
                      <MDBCol md='12'>
                        <MDBInput wrapperClass='mb-4 inputColor' label='Designation ' size='lg' id='form4' type='text'
                        name='designation'
                        onChange={handleEvent}
                        />
                      </MDBCol>
                    </MDBRow>
                    {/* bcjkds */}
                    <MDBRow>
                    <MDBCol col='6'>
                    <label htmlFor='experience' className='form-label mb-1'>Experience (in years)</label><span className='ms-1' style={{ color: 'red' }}>*</span>
                    <MDBInput  id='experience' type='number' wrapperClass='mb-4 inputColor' name='experience'  on onChange={handleEvent}  min={0} />
                  </MDBCol>
                  <MDBCol col='6'>
                    <label htmlFor='DateOfJoining' className='form-label mb-1'>Date of Joining</label><span className='ms-1' style={{ color: 'red' }}>*</span>
                    <MDBInput id='DateOfJoining' type='Date' wrapperClass='mb-4 inputColor' name='dateOfJoining'
                    onChange={handleEvent}
                    />
                  </MDBCol>
                    </MDBRow>

                    <button className='mb-4 btn-primary' size='lg' onClick={handleSubmit} >Submit</button>
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

export default RegisterUser;

