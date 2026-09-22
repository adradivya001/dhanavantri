import React from 'react';
import { MapPin, Stethoscope, HeartPulse, Pill, CheckCircle2, Building2 } from 'lucide-react';
import './Facility.css';

const DEFAULT_FACILITY_DATA = {
  eyebrow: "ABOUT OUR FACILITY",
  heading: "Inside Our Facility",
  subheading: "A familiar, accessible medical environment designed to support patients through consultation, diagnostics and care in Sai Nagar, Anantapur.",
  images: [
    {
      src: "/images/vasundhara_building.jpg",
      alt: "Vasundhara Diagnostics & Fetal Medicine Centre building in Sai Nagar Anantapur",
      caption: "Vasundhara Diagnostics • Sai Nagar",
      icon: "Building2"
    },
    {
      src: "/images/about_clinic_interior.jpg",
      alt: "Diagnostic consultation lounge and clinical waiting environment",
      caption: "Clinical Reception & Diagnostic Area"
    }
  ],
  name: "Vasundhara Diagnostics & Fetal Medicine Centre",
  address: "Sai Nagar, Anantapur, Andhra Pradesh",
  desc: "Vasundhara Diagnostics & Fetal Medicine Centre is a specialized diagnostic imaging and fetal care clinic in Sai Nagar, Anantapur. Led by expert radiology and fetal medicine specialists, our centre offers state-of-the-art 3D/4D ultrasound, prenatal anomaly scans, NT screening, Doppler imaging, and specialized medical consultations.",
  chips: [
    { label: "Medical Consultation", icon: "Stethoscope" },
    { label: "Diagnostic Care", icon: "HeartPulse" },
    { label: "Fetal Medicine", icon: "CheckCircle2" },
    { label: "On-Site Pharmacy", icon: "Pill" }
  ],
  note: "Clean, patient-focused environment with accessible ground floor entry and dedicated stairwell."
};

const iconMap = {
  Stethoscope, HeartPulse, Pill, CheckCircle2, Building2, MapPin
};

export default function Facility({ data }) {
  const content = data || DEFAULT_FACILITY_DATA;

  const renderIcon = (iconName, size = 16, className = "") => {
    const Icon = iconMap[iconName] || CheckCircle2;
    return <Icon size={size} className={className} />;
  };

  return (
    <section id="facility" className="facility-section section-padding">
      <div className="container">
        <div className="facility-header">
          <div className="eyebrow">{content.eyebrow}</div>
          <h2 className="section-heading">{content.heading}</h2>
          <p className="section-subheading">
            {content.subheading}
          </p>
        </div>

        <div className="facility-content-grid">
          {/* Asymmetric Image Showcase */}
          <div className="facility-gallery">
            <div className="gallery-item item-large">
              <img 
                src={content.images[0].src} 
                alt={content.images[0].alt} 
                className="facility-img"
                loading="lazy"
              />
              <div className="image-overlay-pill">
                {content.images[0].icon && renderIcon(content.images[0].icon, 16)} {content.images[0].caption}
              </div>
            </div>

            <div className="gallery-item item-small">
              <img 
                src={content.images[1].src} 
                alt={content.images[1].alt} 
                className="facility-img"
                loading="lazy"
              />
              <div className="image-overlay-pill">
                {content.images[1].caption}
              </div>
            </div>
          </div>

          {/* Facility Info Card & Highlights */}
          <div className="facility-info-column">
            <div className="facility-card">
              <div className="facility-location-header">
                <MapPin size={22} className="location-icon" />
                <div>
                  <h3 className="facility-name">{content.name}</h3>
                  <span className="facility-address">{content.address}</span>
                </div>
              </div>

              <p className="facility-desc">
                {content.desc}
              </p>

              <div className="facility-highlights-list">
                {content.chips.map((chip, idx) => (
                  <div key={idx} className="facility-chip">
                    {renderIcon(chip.icon, 16, "chip-icon")}
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>

              {content.note && (
                <div className="facility-note-box">
                  <CheckCircle2 size={16} className="note-icon" />
                  <span>{content.note}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
