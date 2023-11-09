import React from 'react';
import './Footer.css'; // Import your footer styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider">
        <div className="footer-social-icons">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/futurewavestudio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="footer-app-buttons">

          <a href="https://itunes.apple.com" target="_blank">
            <button>
              <img src="appstore.png" alt="App Store" width="200" />
            </button>
          </a>
          <a href="https://play.google.com" target="_blank">
            <button>
              <img src="google.png" alt="App Store" width="200" />
            </button>
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-left">
          <a href="/terms_of_service">Terms of Service</a>
          <a href="/privacy_policy">Privacy Policy</a>
          <a href="/parent_guide">Parent's Guide</a>
          <a href="/sfpp">Safe and Fair Play Policy</a>
          <a href="/legal-docs">Other Legal Docs</a>
          <a href="/media">For Media</a>
          <a href="/cookies">Manage Cookies</a>
        </div>
        <div className="footer-company-logo">
          <a href="/">
            <img src="LargerFutureWaveStudio_Icon.jpg" alt="Company Logo" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FutureWave Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
