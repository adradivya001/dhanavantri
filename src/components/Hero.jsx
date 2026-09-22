import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenBooking, data }) {
  // Use provided data or fallback to Vasundhara default
  const content = data || {
    eyebrow: "SPECIALIZED DIAGNOSTICS & FETAL MEDICINE",
    title1: "Advanced Diagnostics.",
    title2: "Specialized Fetal Care.",
    desc: "Specialized diagnostic imaging and fetal medicine care in Sai Nagar, Anantapur, led by Dr. N. Vasundhara, MBBS, MD Radiology, Fellow in Fetal Medicine.",
    buttonText: "Book Appointment",
    badgeText: "Specialized Care • Sai Nagar, Anantapur",
    stats: [
      { value: "Fetal Medicine", label: "SPECIALIZED CARE" },
      { value: "Diagnostic Imaging", label: "ADVANCED SCANS" },
      { value: "Radiology", label: "MEDICAL IMAGING" },
      { value: "Sai Nagar", label: "ANANTAPUR" }
    ],
    image: "/images/vasundhara_building.jpg",
    imageAlt: "Vasundhara Diagnostics & Sai Kiran Hospital Building in Sai Nagar Anantapur"
  };

  return (
    <section id="hero" className="hero-section-ref">
      <div className="container hero-container-ref">
        {/* Left Column Content */}
        <div className="hero-content-ref">
          {/* Eyebrow Pill */}
          <div className="eyebrow-badge-green">
            <span className="live-dot-green"></span>
            {content.eyebrow}
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-ref">
            {content.title1}<br />
            <span className="highlight-teal">{content.title2}</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-desc-ref">
            {content.desc}
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons-ref">
            <button onClick={() => onOpenBooking && onOpenBooking()} className="btn-pill-primary">
              <Calendar size={18} />
              <span>{content.buttonText}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Verified Rating / Location Strip */}
          <div className="hero-rating-strip">
            <div className="specialized-strip-badge">
              <ShieldCheck size={16} className="badge-shield-icon" />
              <span>{content.badgeText}</span>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="hero-stats-grid">
            {content.stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Photo Card */}
        <div className="hero-visual-ref">
          <div className="building-card-frame">
            <img 
              src={content.image} 
              alt={content.imageAlt} 
              className="building-img-ref"
              style={{
                objectFit: content.imageFit || 'cover',
                objectPosition: content.imagePosition || 'center center',
                ...(content.imageStyle || {})
              }}
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
