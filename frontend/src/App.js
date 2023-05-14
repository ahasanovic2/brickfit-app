import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./notLogged/Appbar";
import HomePage from "./notLogged/Homepage";
import Korisnik from "./notLogged/Korisnik";
import AppbarLoggedIn from "./userLoggedIn/AppbarLoggedIn";
import LoginPage from './notLogged/Login';
import News from './News'
import Location from './Location'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Routes>
          <Route path="/news" element={<News/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
