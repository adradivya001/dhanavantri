import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-compact">
      <div className="container">
        <div className="footer-grid-compact">
          {/* LEFT: Logo & Short Description */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <img 
                src="/images/vasundhara_logo.png" 
                alt="Vasundhara Diagnostics Logo" 
                className="footer-logo-sm" 
              />
              <div className="footer-brand-title-wrap">
                <span className="footer-brand-name">VASUNDHARA DIAGNOSTICS</span>
                <span className="footer-brand-sub">Fetal Medicine Centre</span>
              </div>
            </div>
            <p className="footer-tagline">
              Specialized diagnostics and fetal medicine care in Sai Nagar, Anantapur.
            </p>
          </div>

          {/* CENTER: Quick Links */}
          <div className="footer-col-links">
            <span className="footer-heading">Quick Links</span>
            <div className="footer-links-grid">
              <a href="#about">About</a>
              <a href="#doctors">Doctors</a>
              <a href="#services">Services</a>
              <a href="#fetal-medicine">Fetal Medicine</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* RIGHT: Contact & Single Book CTA */}
          <div className="footer-col-contact">
            <span className="footer-heading">Contact</span>
            <div className="footer-contact-details">
              <a href="tel:7989330974" className="footer-phone">
                <Phone size={14} /> 79893 30974
              </a>
              <span className="footer-location">
                <MapPin size={14} /> Sai Nagar, Anantapur
              </span>
            </div>
            <button onClick={() => onOpenBooking()} className="btn-footer-book">
              Book Appointment
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-compact">
          <p className="footer-copyright">
            © 2026 Vasundhara Diagnostics & Fetal Medicine Centre. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="footer-back-top" aria-label="Back to top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
