import SideBar from "../HomePage/SideBar";
import Navbar from "../HomePage/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';

function ViewData() {
  const [data, setData] = useState('');
  const handleEvent = (e) => {
    setData(e.target.value);
    console.log("Data", data);
  };

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    Age: "",
    Email: "",
    Skills: "",
    Rating: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/viewData', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
    });
    if (response.status === 200) {
      const responseData = await response.json();
      console.log("Skills:", responseData.Skills);
      setUser({
        firstName: responseData.firstName,
        lastName: responseData.lastName,
        Age: responseData.Age,
        Email: responseData.Email,
        Skills: responseData.skills,
        Rating: responseData.rating
      });
      console.log("User:", user);
    }
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="container-fluid text-center sidebar">
        <div className="row sidebar">
          <div className="col-2 p-0">
            <SideBar />
          </div>
          <div className="col-10 viewDataBackground p-3">
            <div className="searchBar mx-auto">
              <input className="form-control me-2 mt-4" type="search" value={data} placeholder="Search Employee ID" aria-label="Search" onChange={(e) => handleEvent(e)}></input>
              <button className="btn btn-success mt-3" type="submit" onClick={handleSubmit}>Search</button>
            </div>
            <div className="col-md-6 mx-auto mt-4">
    <MDBCard className="shadow">
        <MDBCardBody>
            <MDBCardTitle>{user.firstName} {user.lastName}</MDBCardTitle>
            <MDBCardSubTitle>Age: {user.Age}</MDBCardSubTitle>
            <MDBCardText>
                <strong>Email:</strong> {user.Email}
                <br />
                <strong>Skills:</strong> <br />
                {Array.isArray(user.Skills) && user.Skills.map((skill, index) => (
                    <div key={index}>
                        <span>{skill}: </span>
                        {Array.isArray(user.Rating) && user.Rating[index] !== undefined &&
                            <div className="progress" role="progressbar" aria-label={`${skill} Progress`} aria-valuenow={user.Rating[index] * 20} aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" style={{ width: `${user.Rating[index] * 20}%` }}></div>
                            </div>
                        }
                        <br />
                    </div>
                ))}
            </MDBCardText>
        </MDBCardBody>
    </MDBCard>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewData;
