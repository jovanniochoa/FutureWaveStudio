import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li>
          <div className="dropdown">
            <Link to="/apps">Apps</Link>
            <div className="dropdown-menu">
              <ul>
                <li><Link to="/reaction">Reaction</Link></li>
                <li><Link to="/rock_climbing">Rock Climbing</Link></li>
              </ul>
            </div>
          </div>
        </li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about_us">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
