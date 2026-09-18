import React from 'react';
import { MapPin, Stethoscope, HeartPulse, Pill, CheckCircle2, Building2 } from 'lucide-react';
import './Facility.css';

export default function Facility() {
  return (
    <section id="facility" className="facility-section section-padding">
      <div className="container">
        <div className="facility-header">
          <div className="eyebrow">ABOUT OUR FACILITY</div>
          <h2 className="section-heading">Inside Our Facility</h2>
          <p className="section-subheading">
            A familiar, accessible medical environment designed to support patients through consultation, diagnostics and care in Sai Nagar, Anantapur.
          </p>
        </div>

        <div className="facility-content-grid">
          {/* Asymmetric Image Showcase */}
          <div className="facility-gallery">
            <div className="gallery-item item-large">
              <img 
                src="/images/vasundhara_building.jpg" 
                alt="Vasundhara Diagnostics & Sai Kiran Hospital exterior building in Sai Nagar Anantapur" 
                className="facility-img"
                loading="lazy"
              />
              <div className="image-overlay-pill">
                <Building2 size={16} /> Facility Exterior • Sai Nagar
              </div>
            </div>

            <div className="gallery-item item-small">
              <img 
                src="/images/about_clinic_interior.jpg" 
                alt="Diagnostic consultation lounge and clinical waiting environment" 
                className="facility-img"
                loading="lazy"
              />
              <div className="image-overlay-pill">
                Clinical Reception & Consultation Area
              </div>
            </div>
          </div>

          {/* Facility Info Card & Highlights */}
          <div className="facility-info-column">
            <div className="facility-card">
              <div className="facility-location-header">
                <MapPin size={22} className="location-icon" />
                <div>
                  <h3 className="facility-name">Sai Nagar Facility Hub</h3>
                  <span className="facility-address">Sai Nagar, Anantapur, Andhra Pradesh</span>
                </div>
              </div>

              <p className="facility-desc">
                Our combined facility houses <strong>Sai Kiran Hospital</strong> (Medical & Diabetic Center) and <strong>Vasundhara Diagnostics</strong> (Fetal Medicine Centre), bringing general medicine, diabetes management, diagnostic ultrasound, and specialized fetal care together under one roof.
              </p>

              <div className="facility-highlights-list">
                <div className="facility-chip">
                  <Stethoscope size={16} className="chip-icon" />
                  <span>Medical Consultation</span>
                </div>

                <div className="facility-chip">
                  <HeartPulse size={16} className="chip-icon" />
                  <span>Diagnostic Care</span>
                </div>

                <div className="facility-chip">
                  <CheckCircle2 size={16} className="chip-icon" />
                  <span>Fetal Medicine</span>
                </div>

                <div className="facility-chip">
                  <Pill size={16} className="chip-icon" />
                  <span>On-Site Pharmacy</span>
                </div>
              </div>

              <div className="facility-note-box">
                <CheckCircle2 size={16} className="note-icon" />
                <span>Clean, patient-focused environment with accessible ground floor entry and dedicated stairwell.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
