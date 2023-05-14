import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/not_logged/home/Home";
import HomeContact from "./components/not_logged/contact/HomeContact";
import HomeLocation from "./components/not_logged/location/HomeLocation";
import HomeNews from "./components/not_logged/news/HomeNews";
import HomeLogin from "./components/not_logged/userLogin/UserHomeLogin";
import AdminLogin from "./components/not_logged/adminLogin/AdminHomeLogin";
import UserHomeSignup from "./components/not_logged/userSignup/UserHomeSignup";
import AdminHomeSignup from "./components/not_logged/adminSignup/AdminHomeSignup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<HomeContact/>}/>
          <Route path="/location" element={<HomeLocation/>}/>
          <Route path="/news" element={<HomeNews/>}/>
          <Route path="/user-login" element={<HomeLogin/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/user-signup" element={<UserHomeSignup/>}/>
          <Route path="/admin-signup" element={<AdminHomeSignup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
