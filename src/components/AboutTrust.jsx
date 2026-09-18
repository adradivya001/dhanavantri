import React from 'react';
import { MapPin, Heart, Shield, CheckCircle2, UserCheck } from 'lucide-react';
import './AboutTrust.css';

export default function AboutTrust() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-container">
        {/* Left Column: Clinic Environment Image */}
        <div className="about-image-column">
          <div className="about-image-frame">
            <img 
              src="/images/about_clinic_interior.jpg" 
              alt="Vasundhara Diagnostics clinical environment" 
              className="about-img"
              width="540"
              height="400"
              loading="lazy"
            />
            <div className="about-location-pill">
              <MapPin size={16} className="pill-icon" />
              <span>Sai Nagar, Anantapur</span>
            </div>
          </div>
        </div>

        {/* Right Column: About Content */}
        <div className="about-content-column">
          <div className="eyebrow">ABOUT VASUNDHARA</div>

          <h2 className="section-heading about-heading">
            Care backed by diagnostic expertise.
          </h2>

          <p className="about-paragraph">
            Vasundhara Diagnostics & Fetal Medicine Centre provides diagnostic and fetal medicine services in Sai Nagar, Anantapur. Led by <strong>Dr. N. Vasundhara</strong> (MBBS, MD Radiology, Fellow in Fetal Medicine), we focus on high-precision imaging and compassionate patient-centred care.
          </p>

          {/* 3 Compact Trust Cards */}
          <div className="trust-items-grid">
            <div className="trust-card">
              <div className="trust-icon-box">
                <Heart size={20} />
              </div>
              <div className="trust-text">
                <h3>Fetal Medicine</h3>
                <p>Specialized maternal & prenatal assessment.</p>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <Shield size={20} />
              </div>
              <div className="trust-text">
                <h3>Diagnostic Expertise</h3>
                <p>Accurate clinical imaging & evaluation.</p>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-box">
                <UserCheck size={20} />
              </div>
              <div className="trust-text">
                <h3>Patient-Focused Care</h3>
                <p>Comfortable, supportive patient environment.</p>
              </div>
            </div>
          </div>

          <div className="about-location-footer">
            <CheckCircle2 size={18} className="check-icon" />
            <span>Serving patients across Anantapur and surrounding regions.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
