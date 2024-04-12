


import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../HomePage/Navbar';
import SideBar from '../HomePage/SideBar';
import "../styles.css"


export default function Dashboard() {
  


  return (
    < >
      <Navbar />
      <div className="container-fluid text-center dashboard p-0">
          
            <SideBar />
          
          <div className="container mt-4" style={{ marginLeft: '2%',marginRight: '2%' }}>
          <iframe title="finalPoweBI" width="1000" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d60eef79-7b13-4934-ba8c-5a1e72ff9ce6&autoAuth=true&ctid=2800c0a0-70e9-49be-8733-faeaa6aced99" frameborder="0" allowFullScreen="true"></iframe>
          </div>
        </div>
    </>
  );
}

