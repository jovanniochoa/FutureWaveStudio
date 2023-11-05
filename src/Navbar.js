import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  // Add a scroll event listener to set the sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
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
        {/* Use Link components for navigation */}
        <li><Link to="/home">Home</Link></li>
        <li
          className={`dropdown ${isAboutDropdownOpen ? 'open' : ''}`}
          onMouseEnter={toggleAboutDropdown}
          onMouseLeave={toggleAboutDropdown}
        >
          <Link to="/apps">Apps</Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/reaction">Reaction</Link></li>
              <li><Link to="/rock_climbing">Rock Climbing</Link></li>
            </ul>
          </div>
        </li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about_us">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
