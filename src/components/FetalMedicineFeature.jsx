import React from 'react';
import { Calendar, CheckCircle, Heart, Sparkles, Eye } from 'lucide-react';
import './FetalMedicineFeature.css';

const DEFAULT_FEATURE_DATA = {
  eyebrow: "SPECIALIZED FETAL MEDICINE",
  heading: "Specialized Care for Every Stage of Pregnancy",
  desc: "Focused fetal imaging and assessment with compassionate care for expectant mothers throughout their pregnancy journey.",
  image: "/images/fetal_feature_care.jpg",
  imageAlt: "4D Fetal ultrasound imaging monitor view at Vasundhara Diagnostics",
  badgeText1: "Vasundhara Fetal Medicine",
  badgeText2: "Dr. N. Vasundhara • Sai Nagar, Anantapur",
  points: [
    { icon: "CheckCircle", title: "Fetal Assessment", desc: "Detailed ultrasound monitoring & evaluation." },
    { icon: "Eye", title: "Pregnancy Imaging", desc: "Diagnostic scans supporting maternal care." },
    { icon: "Heart", title: "Specialized Care", desc: "Compassionate, reassuring clinical environment." }
  ],
  buttonText: "Book an Appointment",
  actionService: "Fetal Medicine Assessment"
};

const iconMap = {
  CheckCircle, Eye, Heart, Sparkles
};

export default function FetalMedicineFeature({ onOpenBooking, data }) {
  const content = data || DEFAULT_FEATURE_DATA;

  const renderIcon = (iconName, size = 18) => {
    const IconComponent = iconMap[iconName] || CheckCircle;
    return <IconComponent size={size} />;
  };

  return (
    <section id="fetal-medicine" className="fetal-feature-section">
      <div className="container fetal-feature-container">
        {/* Left Immersive Visual */}
        <div className="fetal-feature-visual">
          <div className="fetal-image-wrapper">
            <img 
              src={content.image} 
              alt={content.imageAlt} 
              className="fetal-feature-img"
              style={{
                objectFit: content.imageFit || 'cover',
                objectPosition: content.imagePosition || 'center center',
                ...(content.imageStyle || {})
              }}
              width="640"
              height="400"
              loading="lazy"
            />

            <div className="fetal-image-overlay"></div>

            <div className="glass-card fetal-feature-badge">
              <Sparkles size={18} className="badge-sparkle-icon" />
              <div>
                <span className="badge-main-text">{content.badgeText1}</span>
                <span className="badge-sub-text">{content.badgeText2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Copy Block */}
        <div className="fetal-feature-content">
          <div className="eyebrow eyebrow-dark">
            <Sparkles size={14} /> {content.eyebrow}
          </div>

          <h2 className="fetal-feature-heading">
            {content.heading}
          </h2>

          <p className="fetal-feature-desc">
            {content.desc}
          </p>

          <div className="fetal-points-list">
            {content.points.map((point, index) => (
              <div key={index} className="fetal-point-item">
                <div className="fetal-point-icon">
                  {renderIcon(point.icon)}
                </div>
                <div className="fetal-point-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onOpenBooking && onOpenBooking(content.actionService)} 
            className="btn btn-teal fetal-feature-cta"
          >
            <Calendar size={18} /> {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
