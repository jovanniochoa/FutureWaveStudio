import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import './App.css';
import SupportPage from './SupportPage.js';
import Home from './Home.js';
import Footer from './Footer.js';


const App = () => (
  
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>

);

export default App;