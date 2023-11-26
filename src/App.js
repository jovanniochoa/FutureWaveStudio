import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Home from './Home.js';
import AppPage from './AppPage.js';
import SupportPage from './SupportPage.js';
import AboutUsPage from './AboutUsPage.js';
import Reaction from './ReactionPage.js';
import RockClimbing from './rock_climbingPage.js';
import ParentGuide from './ParentGuide.js'
import PrivacyPolicy from './PrivacyPolicy.js'
import TermsOfService from './TermsOfService.js'
import SFPP from './SFPP.js'
import './App.css';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/apps" element={<AppPage />} />
          <Route path="/reaction" element={<Reaction />} />
          <Route path="/rock_climbing" element={<RockClimbing />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/parent_guide" element={<ParentGuide />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_of_service" element={<TermsOfService />} />
        <Route path="/sfpp" element={<SFPP />} />
        <Route path="/about_us" element={<AboutUsPage />} />

      </Routes>
    </Router>
    <Footer />
  </div>
);

export default App;
