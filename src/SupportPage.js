import React from 'react';
import { Link } from 'react-router-dom';
import './SupportPage.css';

export default function SupportPage() {
  return (
    <section id="modern-box" className="support-page">
      <Link to="/terms_of_service" className="modern-box">
        <div className="box-content">Terms of Service</div>
      </Link>
      <Link to="/privacy_policy" className="modern-box">
        <div className="box-content">Privacy Policy</div>
      </Link>
      <Link to="/parent_guide" className="modern-box">
        <div className="box-content">Parent's Guide</div>
      </Link>
      <Link to="/sfpp" className="modern-box">
        <div className="box-content">Safe and Fair Play Policy</div>
      </Link>
    </section>
  );
}
