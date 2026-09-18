import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="hero-section-ref">
      <div className="container hero-container-ref">
        {/* Left Column Content */}
        <div className="hero-content-ref">
          {/* Eyebrow Pill */}
          <div className="eyebrow-badge-green">
            <span className="live-dot-green"></span>
            SPECIALIZED DIAGNOSTICS & FETAL MEDICINE
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-ref">
            Advanced Diagnostics.<br />
            <span className="highlight-teal">Specialized Fetal Care.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-desc-ref">
            Specialized diagnostic imaging and fetal medicine care in Sai Nagar, Anantapur, led by Dr. N. Vasundhara, MBBS, MD Radiology, Fellow in Fetal Medicine.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons-ref">
            <button onClick={() => onOpenBooking()} className="btn-pill-primary">
              <Calendar size={18} />
              <span>Book Appointment</span>
              <ArrowRight size={18} />
            </button>

            <a href="tel:7989330974" className="btn-pill-secondary">
              <Phone size={16} />
              <span>Call 79893 30974</span>
            </a>
          </div>

          {/* Verified Rating / Location Strip */}
          <div className="hero-rating-strip">
            <div className="specialized-strip-badge">
              <ShieldCheck size={16} className="badge-shield-icon" />
              <span>Specialized Care • Sai Nagar, Anantapur</span>
            </div>
          </div>

          {/* 4 Bottom Cards */}
          <div className="hero-stats-grid">
            <div className="stat-card">
              <span className="stat-value">Fetal Medicine</span>
              <span className="stat-label">SPECIALIZED CARE</span>
            </div>

            <div className="stat-card">
              <span className="stat-value">Diagnostic Imaging</span>
              <span className="stat-label">ADVANCED SCANS</span>
            </div>

            <div className="stat-card">
              <span className="stat-value">Radiology</span>
              <span className="stat-label">MEDICAL IMAGING</span>
            </div>

            <div className="stat-card">
              <span className="stat-value">Sai Nagar</span>
              <span className="stat-label">ANANTAPUR</span>
            </div>
          </div>
        </div>

        {/* Right Column: Building Photo Card */}
        <div className="hero-visual-ref">
          <div className="building-card-frame">
            <img 
              src="/images/vasundhara_building.jpg" 
              alt="Vasundhara Diagnostics & Sai Kiran Hospital Building in Sai Nagar Anantapur" 
              className="building-img-ref"
              width="600"
              height="650"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
