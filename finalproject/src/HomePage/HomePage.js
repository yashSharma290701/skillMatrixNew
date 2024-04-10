import SideBar from "./SideBar";
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
    return (
        // <div className="container-fluid">
        //     <div className="container">
        //             <Navbar />
        //     </div>

           
        //     <div className="container-fluid text-center">
        //         <div className="row">
        //             <div className="row">
        //                 <div className="col-3">
        //                     <SideBar />
        //                 </div>
        //                 <div className="col-9">
        //                     <iframe title="finalPoweBI" width="1120" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d60eef79-7b13-4934-ba8c-5a1e72ff9ce6&autoAuth=true&ctid=2800c0a0-70e9-49be-8733-faeaa6aced99" frameborder="0" allowFullScreen="true"></iframe>

        //                 </div>


        //             </div>
        //             <div>

        //             </div>

        //         </div>
        //     </div>

        // </div>
<div>

     <div className="container-fluid">
        <div className="row">
             <Navbar />
             <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-8">
                    {/* <iframe title="finalPoweBI" width="1120" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=d60eef79-7b13-4934-ba8c-5a1e72ff9ce6&autoAuth=true&ctid=2800c0a0-70e9-49be-8733-faeaa6aced99" frameborder="0" allowFullScreen="true"></iframe> */}
                    </div>
                </div>
             </div>
        </div>
            
      </div>
 
</div>

    )
}
export default HomePage;