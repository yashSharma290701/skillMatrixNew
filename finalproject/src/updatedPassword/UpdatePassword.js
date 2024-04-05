import React from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

function ChangePassword() {
  const [data,setdata] = useState({
   email:'',
    newPassword:'',
    rePassword:''
  })
  const handleEvent=(e)=>{
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
    
  //  console.log(data);
  }
const  handleSubmit=async(e)=>{
  e.preventDefault();
  if(data.newPassword!==data.rePassword){
    alert("Mismatch Password")
  }
    const response = await fetch('http://localhost:5001/updatePassword',
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({data})
    })
    console.log(response)
    if(response.status=== 200){
    }

  


  }
  return (
    <div className='userDetails'>

    
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className=' cardBackground p-4 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Change Password</h2>
        <p className="text-white-50 mb-5">Please enter your credentials!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  label='Email' id='formControl' type='text' size="lg"
        value={data.email} name = "email" onChange={handleEvent}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  label='New-Password' id='formControl' type='password' size="lg"
        value={data.newPassword} name = "newPassword" onChange={handleEvent}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Re-type password' id='formControlled' type='password' size="lg"
        value={data.rePassword} name = "rePassword" onChange={handleEvent}
        />

        
       
        <Button variant="info" type="submit" className='mb-2 p-3' onClick={handleSubmit}><strong>Change Password</strong></Button>{' '}
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  );
}

export default ChangePassword;



