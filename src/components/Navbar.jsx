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

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Compact / Expand state
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

      // 2. Active Tab Scroll Spy
      const links = content.navLinks || [];
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page check -> activate last link (usually contact)
      if (currentScrollY + windowHeight >= documentHeight - 60 && links.length > 0) {
        setActiveTab(links[links.length - 1].id);
        ticking = false;
        return;
      }

      // Top of page check -> activate first link (about / hero)
      if (currentScrollY < 120 && links.length > 0) {
        setActiveTab(links[0].id);
        ticking = false;
        return;
      }

      // Check sections from bottom to top
      const scrollPos = currentScrollY + 160;
      for (let i = links.length - 1; i >= 0; i--) {
        const link = links[i];
        const targetId = link.href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPos >= top) {
            setActiveTab(link.id);
            break;
          }
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [content.navLinks]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveTab(link.id);
    closeMobileMenu();

    const targetId = link.href.replace('#', '');
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      const navOffset = 90;
      const elemPosition = targetElem.getBoundingClientRect().top;
      const offsetPosition = elemPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, null, link.href);
      }
    }
  };

  const isCompact = scrollDirection === 'down' && !isTop;

  return (
    <header className={`navbar-header-glass ${isCompact ? 'navbar-compact' : 'navbar-expanded'}`}>
      <div className="navbar-pill-container">
        {/* Brand Logo & Wordmark Area */}
        <a 
          href="#hero" 
          className="navbar-brand-glass" 
          onClick={(e) => handleNavClick(e, { id: 'about', href: '#hero' })}
        >
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
              onClick={(e) => handleNavClick(e, link)}
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
                <a 
                  key={link.id} 
                  href={link.href} 
                  className={`mobile-nav-link-dark ${activeTab === link.id ? 'active' : ''}`} 
                  onClick={(e) => handleNavClick(e, link)}
                >
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
