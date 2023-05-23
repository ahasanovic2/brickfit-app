import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/not_logged/home/Home";
import HomeDefault from "./components/defaultHome/home/HomeDefault";
import HomeContact from "./components/not_logged/contact/HomeContact";
import HomeLocation from "./components/not_logged/location/HomeLocation";
import HomeNews from "./components/not_logged/news/HomeNews";
import HomeLogin from "./components/not_logged/userLogin/UserHomeLogin";
import AdminLogin from "./components/not_logged/adminLogin/AdminHomeLogin";
import UserHomeSignup from "./components/not_logged/userSignup/UserHomeSignup";
import AdminHomeSignup from "./components/not_logged/adminSignup/AdminHomeSignup";
import HomeAppointment from "./components/not_logged/appointmentReservation/HomeAppointment";
import HomeNewsDefault from "./components/defaultHome/news/HomeNewsDefault";
import HomeLocationDefault from "./components/defaultHome/location/HomeLocationDefault";
import HomeContactDefault from "./components/defaultHome/contact/HomeContactDefault";
import HomeAdmin from "./components/admin/home/HomeAdmin";
import HomeMachineOrder from "./components/admin/machine/HomeMachineOrder";
import HomeOverviewUser from "./components/admin/overviewUser/HomeOverviewUser";
import HomeOverviewMachines from "./components/admin/overviewMachine/HomeOverviewMachines";
import HomeAddUser from "./components/admin/user/HomeAddUser";
import HomeLoginDefault from "./components/defaultHome/userLogin/HomeLoginDefault";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/" element={<HomeDefault />} />
          <Route path="/contact" element={<HomeContact />} />
          <Route path="/contactDefault" element={<HomeContactDefault />} />
          <Route path="/location" element={<HomeLocation />} />
          <Route path="/locationDefault" element={<HomeLocationDefault />} />
          <Route path="/news" element={<HomeNews />} />
          <Route path="/newsDefault" element={<HomeNewsDefault />} />
          <Route path="/appointment-reservation" element={<HomeAppointment />} />
          <Route path="/machineOrder" element={<HomeMachineOrder />} />
          <Route path="/overviewUser" element={<HomeOverviewUser />} />
          <Route path="/overviewMachine" element={<HomeOverviewMachines />} />
          <Route path="/addUser" element={<HomeAddUser />} />
          <Route path="/user-login" element={<HomeLogin />} />
          <Route path="/login" element={<HomeLoginDefault />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-signup" element={<UserHomeSignup />} />
          <Route path="/admin-signup" element={<AdminHomeSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
