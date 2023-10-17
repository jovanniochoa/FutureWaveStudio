import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./futurewavestudio_logo.jpg" alt="Company Logo" />
        <h1>FutureWave Studio</h1>
      </div>
      <div
        className={`navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li
          className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`}
          onMouseEnter={toggleAboutDropdown}
          onMouseLeave={toggleAboutDropdown}
        >
          <a href="#apps">Apps</a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#reaction">Reaction</a></li>
              <li><a href="#rock_climbing">Rock Climbing</a></li>
            </ul>
          </div>
        </li>
        <li><a href="#support">Support</a></li>
        <li><a href="#about_us">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
