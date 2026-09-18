import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenBooking }) {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isTop, setIsTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

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
          <img 
            src="/images/vasundhara_logo.png" 
            alt="Vasundhara Diagnostics & Fetal Medicine Centre" 
            className="brand-logo-img-glass"
          />
          <div className="brand-text-glass">
            <span className="brand-title-glass">VASUNDHARA</span>
            <span className="brand-subtitle-glass">Diagnostics & Fetal Medicine</span>
          </div>
        </a>

        {/* Center Navigation Links Group */}
        <nav className="navbar-nav-glass desktop-only">
          <a 
            href="#hero" 
            className={`nav-link-glass ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </a>
          <a 
            href="#doctors" 
            className={`nav-link-glass ${activeTab === 'doctors' ? 'active' : ''}`}
            onClick={() => setActiveTab('doctors')}
          >
            Doctors
          </a>
          <a 
            href="#services" 
            className={`nav-link-glass ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Services
          </a>
          <a 
            href="#fetal-medicine" 
            className={`nav-link-glass ${activeTab === 'fetal-medicine' ? 'active' : ''}`}
            onClick={() => setActiveTab('fetal-medicine')}
          >
            Fetal Medicine
          </a>
          <a 
            href="#facility" 
            className={`nav-link-glass ${activeTab === 'facility' ? 'active' : ''}`}
            onClick={() => setActiveTab('facility')}
          >
            Facility
          </a>
          <a 
            href="#reviews" 
            className={`nav-link-glass ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </a>
          <a 
            href="#contact" 
            className={`nav-link-glass ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </a>
        </nav>

        {/* Right CTA & Menu Group */}
        <div className="navbar-actions-glass">
          <button 
            onClick={() => onOpenBooking()} 
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
                <img 
                  src="/images/vasundhara_logo.png" 
                  alt="Vasundhara Diagnostics Logo" 
                  className="brand-logo-img-sm" 
                />
                <div className="brand-text-glass">
                  <span className="brand-title-glass">VASUNDHARA</span>
                  <span className="brand-subtitle-glass">Diagnostics & Fetal Medicine</span>
                </div>
              </div>
              <button className="drawer-close-btn-dark" onClick={closeMobileMenu}>
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav-links-dark">
              <a href="#hero" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                About <ChevronRight size={16} />
              </a>
              <a href="#doctors" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Doctors <ChevronRight size={16} />
              </a>
              <a href="#services" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Services <ChevronRight size={16} />
              </a>
              <a href="#fetal-medicine" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Fetal Medicine <ChevronRight size={16} />
              </a>
              <a href="#facility" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Facility <ChevronRight size={16} />
              </a>
              <a href="#reviews" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Reviews <ChevronRight size={16} />
              </a>
              <a href="#contact" className="mobile-nav-link-dark" onClick={closeMobileMenu}>
                Contact <ChevronRight size={16} />
              </a>
            </nav>

            <div className="mobile-drawer-footer-dark">
              <button 
                onClick={() => { closeMobileMenu(); onOpenBooking(); }} 
                className="btn-glass-pill btn-full"
              >
                <Calendar size={18} /> Book Appointment
              </button>
              <a href="tel:7989330974" className="btn btn-outline-light btn-full">
                <Phone size={18} /> Call 79893 30974
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
