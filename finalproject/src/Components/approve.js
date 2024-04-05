import SideBar from "../HomePage/SideBar";
import Navbar from "../HomePage/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function Approve() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5001/getAllCertificate', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                });
                console.log(response.data);
                if (response.status === 203) {
                    alert('Certificate Added');
                } else if (response.status === 500) {
                    alert('Something went wrong');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="homepage">
            <Navbar />
            <div className="container-fluid text-center sidebar">
                <div className="row sidebar">
                    <div className="col-2 p-0 ">
                        <SideBar />
                    </div>
                    <div className="col-10"></div>
                </div>
            </div>
        </div>
    );
}

export default Approve;
