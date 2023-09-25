import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import App from './App';
import Navbar from "./component/navbar.js"
import Masterarea from "./component/masterarea.js"
import Cards from "./component/cards.js";
import Footer from "./component/footer.js";
import Login from "./component/login.js";
import Signup from "./component/signup.js";
import AboutUs from "./component/aboutUs.js";
import Help from "./component/help.js";
import VoterEducation from "./component/voterEducation.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <App /> */}
    
    <Navbar/>
    
    <Routes>
          <Route path="/" element={<Masterarea/>} />
    </Routes>
    <Routes>
          <Route path="/" element={<Cards/>} />
    </Routes>
    
    
    
    
    <Routes>
          <Route path="/login" element={<Login/>} />
    </Routes>
    <Routes>
          <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Routes>
          <Route path="/aboutUs" element={<AboutUs/>} />
    </Routes>
    <Routes>
          <Route path="/help" element={<Help/>} />
    </Routes>
    <Routes>
          <Route path="/voterEducation" element={<VoterEducation/>} />
    </Routes>

    <Footer/>
  </Router>
);


