import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

const DEFAULT_FOOTER_DATA = {
  logoImage: "/images/vasundhara_logo.png",
  brandName: "VASUNDHARA DIAGNOSTICS",
  brandSub: "Fetal Medicine Centre",
  tagline: "Specialized diagnostics and fetal medicine care in Sai Nagar, Anantapur.",
  quickLinks: [
    { label: "About", href: "#hero" },
    { label: "Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Fetal Medicine", href: "#fetal-medicine" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" }
  ],
  contact: {
    phone: "79893 30974",
    phoneLink: "7989330974",
    location: "Sai Nagar, Anantapur"
  },
  copyright: "© 2026 Vasundhara Diagnostics & Fetal Medicine Centre. All rights reserved."
};

export default function Footer({ onOpenBooking, data }) {
  const content = data || DEFAULT_FOOTER_DATA;

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
              {content.logoImage && (
                <img 
                  src={content.logoImage} 
                  alt={`${content.brandName || "Hospital"} Logo`} 
                  className="footer-logo-sm" 
                />
              )}
              {content.brandName ? (
                <div className="footer-brand-title-wrap">
                  <span className="footer-brand-name">{content.brandName}</span>
                  <span className="footer-brand-sub">{content.brandSub}</span>
                </div>
              ) : null}
            </div>
            <p className="footer-tagline">
              {content.tagline}
            </p>
          </div>

          {/* CENTER: Quick Links */}
          <div className="footer-col-links">
            <span className="footer-heading">Quick Links</span>
            <div className="footer-links-grid">
              {content.quickLinks.map((link, idx) => (
                <a key={idx} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact & Single Book CTA */}
          <div className="footer-col-contact">
            <span className="footer-heading">Contact</span>
            <div className="footer-contact-details">
              <a href={`tel:${content.contact.phoneLink}`} className="footer-phone">
                <Phone size={14} /> {content.contact.phone}
              </a>
              <span className="footer-location">
                <MapPin size={14} /> {content.contact.location}
              </span>
            </div>
            <button onClick={() => onOpenBooking && onOpenBooking()} className="btn-footer-book">
              Book Appointment
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom-compact">
          <p className="footer-copyright">
            {content.copyright}
          </p>
          <button onClick={scrollToTop} className="footer-back-top" aria-label="Back to top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
