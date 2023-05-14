import "./App.css";
import { BrowserRouter as Routes, Router, Route, Link, Outlet } from 'react-router-dom';
import Appbar from "./notLogged/Appbar";
import HomePage from "./notLogged/Homepage";
import Korisnik from "./notLogged/Korisnik";
import AppbarLoggedIn from "./userLoggedIn/AppbarLoggedIn";
import LoginPage from './notLogged/Login';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <HomePage/>
    </div>
  );
}

export default App;
