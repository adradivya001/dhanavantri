import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenBooking, data }) {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isTop, setIsTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Use provided data or fallback to Vasundhara default
  const content = data || {
    logoText: "VASUNDHARA",
    logoSubtext: "Diagnostics & Fetal Medicine",
    logoImage: "/images/vasundhara_logo.png",
    phone: "79893 30974",
    phoneUrl: "tel:7989330974",
    navLinks: [
      { id: "about", label: "About", href: "#hero" },
      { id: "doctors", label: "Doctors", href: "#doctors" },
      { id: "services", label: "Services", href: "#services" },
      { id: "fetal-medicine", label: "Fetal Medicine", href: "#fetal-medicine" },
      { id: "facility", label: "Facility", href: "#facility" },
      { id: "reviews", label: "Reviews", href: "#reviews" },
      { id: "contact", label: "Contact", href: "#contact" }
    ]
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 30) {
        setIsTop(true);
        setScrollDirection('up');
      } else {
        setIsTop(false);
        if (currentScrollY > lastScrollY + 5) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY - 5) {
          setScrollDirection('up');
        }
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isCompact = scrollDirection === 'down' && !isTop;

  return (
    <header className={`navbar-header-glass ${isCompact ? 'navbar-compact' : 'navbar-expanded'}`}>
      <div className="navbar-pill-container">
        {/* Brand Logo & Wordmark Area */}
        <a href="#hero" className="navbar-brand-glass" onClick={() => { setActiveTab('about'); closeMobileMenu(); }}>
          {content.logoImage && (
            <img 
              src={content.logoImage} 
              alt={content.logoText || "Hospital Logo"} 
              className="brand-logo-img-glass"
            />
          )}
          {content.logoText ? (
            <div className="brand-text-glass">
              <span className="brand-title-glass">{content.logoText}</span>
              <span className="brand-subtitle-glass">{content.logoSubtext}</span>
            </div>
          ) : null}
        </a>

        {/* Center Navigation Links Group */}
        <nav className="navbar-nav-glass desktop-only">
          {content.navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`nav-link-glass ${activeTab === link.id ? 'active' : ''}`}
              onClick={() => setActiveTab(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Menu Group */}
        <div className="navbar-actions-glass">
          <button 
            onClick={() => onOpenBooking && onOpenBooking()} 
            className="btn-glass-pill nav-btn-book-glass desktop-only"
          >
            <span>Book Appointment</span> <ArrowRight size={16} />
          </button>

          <button
            className="hamburger-btn-glass"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dark Glass Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobileMenu}>
          <div className="mobile-drawer-dark" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="navbar-brand-glass">
                {content.logoImage && (
                  <img 
                    src={content.logoImage} 
                    alt={content.logoText || "Hospital Logo"} 
                    className="brand-logo-img-sm" 
                  />
                )}
                {content.logoText ? (
                  <div className="brand-text-glass">
                    <span className="brand-title-glass">{content.logoText}</span>
                    <span className="brand-subtitle-glass">{content.logoSubtext}</span>
                  </div>
                ) : null}
              </div>
              <button className="drawer-close-btn-dark" onClick={closeMobileMenu}>
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav-links-dark">
              {content.navLinks.map((link) => (
                <a key={link.id} href={link.href} className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                  {link.label} <ChevronRight size={16} />
                </a>
              ))}
            </nav>

            <div className="mobile-drawer-footer-dark">
              <button 
                onClick={() => { closeMobileMenu(); onOpenBooking && onOpenBooking(); }} 
                className="btn-glass-pill btn-full"
              >
                <Calendar size={18} /> Book Appointment
              </button>
              <a href={content.phoneUrl} className="btn btn-outline-light btn-full">
                <Phone size={18} /> Call {content.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
