import React from 'react';
import { Calendar, CheckCircle, Heart, Sparkles, Eye } from 'lucide-react';
import './FetalMedicineFeature.css';

export default function FetalMedicineFeature({ onOpenBooking }) {
  return (
    <section id="fetal-medicine" className="fetal-feature-section">
      <div className="container fetal-feature-container">
        {/* Left Immersive Visual */}
        <div className="fetal-feature-visual">
          <div className="fetal-image-wrapper">
            <img 
              src="/images/fetal_feature_care.jpg" 
              alt="4D Fetal ultrasound imaging monitor view at Vasundhara Diagnostics" 
              className="fetal-feature-img"
              width="640"
              height="400"
              loading="lazy"
            />

            <div className="fetal-image-overlay"></div>

            <div className="glass-card fetal-feature-badge">
              <Sparkles size={18} className="badge-sparkle-icon" />
              <div>
                <span className="badge-main-text">Vasundhara Fetal Medicine</span>
                <span className="badge-sub-text">Dr. N. Vasundhara • Sai Nagar, Anantapur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Copy Block */}
        <div className="fetal-feature-content">
          <div className="eyebrow eyebrow-dark">
            <Sparkles size={14} /> SPECIALIZED FETAL MEDICINE
          </div>

          <h2 className="fetal-feature-heading">
            Specialized Care for Every Stage of Pregnancy
          </h2>

          <p className="fetal-feature-desc">
            Focused fetal imaging and assessment with compassionate care for expectant mothers throughout their pregnancy journey.
          </p>

          <div className="fetal-points-list">
            <div className="fetal-point-item">
              <div className="fetal-point-icon">
                <CheckCircle size={18} />
              </div>
              <div className="fetal-point-text">
                <h3>Fetal Assessment</h3>
                <p>Detailed ultrasound monitoring & evaluation.</p>
              </div>
            </div>

            <div className="fetal-point-item">
              <div className="fetal-point-icon">
                <Eye size={18} />
              </div>
              <div className="fetal-point-text">
                <h3>Pregnancy Imaging</h3>
                <p>Diagnostic scans supporting maternal care.</p>
              </div>
            </div>

            <div className="fetal-point-item">
              <div className="fetal-point-icon">
                <Heart size={18} />
              </div>
              <div className="fetal-point-text">
                <h3>Specialized Care</h3>
                <p>Compassionate, reassuring clinical environment.</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => onOpenBooking("Fetal Medicine Assessment")} 
            className="btn btn-teal fetal-feature-cta"
          >
            <Calendar size={18} /> Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
