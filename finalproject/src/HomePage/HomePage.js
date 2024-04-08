import SideBar from "./SideBar";
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
    return (
        <div className="homepage">
            <Navbar />
            <div class="container-fluid text-center ">
                <div class="row ">
                    <div class="col-2 p-0 ">
                        <SideBar />
                    </div>
                    <div class="col-10">
                      abcd
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomePage;