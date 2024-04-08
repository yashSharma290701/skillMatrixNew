import React from 'react';
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import LoginIcon from '@mui/icons-material/Login';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function LoginUser() {
  const [data,setdata] = useState({
    username:'',
    password:'',
    role:''
  })
  const navigate = useNavigate();
  const handleEvent=(e)=>{
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
    
   
  }
const  handleSubmit=async(e)=>{
  e.preventDefault();
    const response = await fetch('http://localhost:5001/login',
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({data})
    })
    console.log(response)
    if(response.status=== 200){
     
      navigate('/signup')
    }
    if(response.status=== 200){
      const responseData= await response.json()
      localStorage.setItem('role', responseData.Role);
      localStorage.setItem('email', responseData.email);
      console.log("sdfsdfdsaf",responseData.Role)
      console.log("sdfsdfdsaf",responseData.email)
      navigate('/home')
    }
    // if(data.username === 'yashsharma@jmangroup.com' &&  data.password === '600113'){
    //   navigate('/signup')
    // }else{
    //   alert('Wrong Username or password')
    // }


  }
  return (
    <div className='userDetails'>

    
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className=' text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px', border:'none'}}>
      <MDBCardBody className='cardBackground p-4 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase"><LoginIcon fontSize="large"/> Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  label={<><PersonIcon /> Email address</>}  id='formControlLg' type='email' size="lg"
        value={data.username} name = "username" onChange={handleEvent} required />
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  label={<><PasswordIcon /> Email address</>} id='formControlg' type='password' size="lg"
        value={data.password} name = "password" onChange={handleEvent} required
        />


        <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
       
        <Button variant="info" type="submit" className='mb-2 p-3' onClick={handleSubmit}><strong>Login</strong></Button>{' '}
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  );
}

export default LoginUser;



