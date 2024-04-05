import './styles.css'
import LoginUser from './LoginPage/LoginUser';
import RegisterUser from './LoginPage/RegisterUser';
import ChangePassword from "./updatedPassword/UpdatePassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Profile from './Components/profile';
import CertificateUser from "./Components/certificate"
import Skills from './Components/skill'
import ViewData from './Components/viewdata';
import Approve from './Components/approve';
import Projects from "./Components/project"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginUser />} />
          <Route path="/signup"  element={<RegisterUser />} />
          <Route  path="/changepassword" element={<ChangePassword />} />
          <Route  path="/Home" element={<HomePage />} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/certificates" element={<CertificateUser/>} />
          <Route  path="/skills" element={<Skills/>} />
          <Route  path="/viewData" element={<ViewData/>} />
          <Route  path="/approve" element={<Approve/>} />
          <Route  path="/project" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
