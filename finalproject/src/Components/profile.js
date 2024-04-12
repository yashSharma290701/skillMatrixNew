import Navbar from "../HomePage/Navbar";
import SideBar from "../HomePage/SideBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import '../styles.css'

function Profile() {

    const [userDetails, setUserDetails] = useState({ data: {} });

    useEffect(() => {
        const fetchUserData = async () => {
            const email = localStorage.getItem('email');
            console.log("profile", email);
            
            try {
                const response = await axios.post("http://localhost:5001/getUserData", { email });
                setUserDetails(response);
                console.log("UserDetails:", userDetails.data.allUserData);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchUserData();
    }, []);
    
    // Function to format date to dd/mm/yyyy
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    
    return (
        <div>
            <Navbar />
            <div className="container-fluid text-center p-0 profile">
                        <SideBar />
                            <div className="container align-self-center ">
                                <div className="row  profileSection">
                                    <div className="col-lg-6 p-0">
                                        {/* Card starts here */}
                                        <div className="card mb-3 shadow-lg" style={{ borderRadius: ".5rem" }}>
                                            <div className="row ">
                                                <div className="col-md-4 text-center text-white p-0"
                                                    style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                        alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                                                    <i className="far fa-edit mb-5"></i>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body p-4">
                                                        <h6>Information</h6>
                                                        <hr className="mt-0 mb-4" />
                                                        <div className="row pt-1">
                                                            <div className="col-6 mb-3">
                                                                <h6>First Name</h6>
                                                                <p className="text-muted">{userDetails.data.allUserData?.firstName}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Last Name</h6>
                                                                <p className="text-muted">{userDetails.data.allUserData?.lastName}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Designation</h6>
                                                                <p className="text-muted">{userDetails.data.allUserData?.designation}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Age</h6>
                                                                <p className="text-muted">{userDetails.data.allUserData?.age}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>User ID</h6>
                                                                <p className="text-muted">{userDetails.data.allUserData?.userId}</p>
                                                            </div>
                                                            <div className="col-6 mb-3">
                                                                <h6>Date of dateOfJoining</h6>
                                                                <p className="text-muted">{formatDate(userDetails.data.allUserData?.dateOfJoining)}</p>
                                                            </div>
                                                            
                                                        </div>
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card ends here */}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
           
    )
}

export default Profile;

