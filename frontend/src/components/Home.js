import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from "./news/Appbar";
import HomePage from "./news/Homepage";
import News from './news/News';
import Location from './news/Location';
import Contact from './news/Contact';

function Home() {
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

export default Home;
