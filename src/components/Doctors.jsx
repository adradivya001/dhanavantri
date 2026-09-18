import React from 'react';
import { UserCheck, Stethoscope, Sparkles } from 'lucide-react';
import './Doctors.css';

export default function Doctors({ onOpenBooking }) {
  return (
    <section id="doctors" className="doctors-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="doctors-header">
          <div className="eyebrow">
            <Sparkles size={14} /> OUR MEDICAL TEAM
          </div>
          <h2 className="section-heading">Expertise You Can Trust</h2>
          <p className="section-subheading">
            Experienced medical care across fetal medicine, radiology, general medicine and diabetes care.
          </p>
        </div>

        {/* 2 Doctor Cards Grid */}
        <div className="doctors-grid">
          {/* DOCTOR 1: Dr. N. Vasundhara */}
          <div className="doctor-card">
            {/* Top Signage / Portrait Display */}
            <div className="doctor-visual-header header-teal">
              <div className="doctor-icon-avatar avatar-teal">
                <UserCheck size={32} />
              </div>
              <div className="doctor-signage-tag">
                <span>Vasundhara Diagnostics & Fetal Medicine</span>
              </div>
            </div>

            <div className="doctor-card-content">
              {/* Doctor Name */}
              <h3 className="doctor-name">Dr. N. Vasundhara</h3>

              {/* Credentials */}
              <div className="doctor-credentials">
                <span className="cred-badge cred-primary">MBBS, MD Radiology</span>
                <span className="cred-badge cred-highlight">Fellow in Fetal Medicine</span>
              </div>

              {/* Short Context Description */}
              <p className="doctor-context-desc">
                Specialized in radiology and fetal medicine, with a focus on diagnostic imaging and pregnancy-related fetal assessment.
              </p>

              {/* Specialization Tags */}
              <div className="doctor-tags-row">
                <span className="spec-tag tag-teal">Radiology</span>
                <span className="spec-tag tag-teal">Fetal Medicine</span>
                <span className="spec-tag tag-teal">Diagnostic Imaging</span>
              </div>

              {/* Card Footer Action */}
              <div className="doctor-action-footer">
                <button 
                  onClick={() => onOpenBooking("Fetal Medicine Assessment")} 
                  className="btn-doctor-action btn-action-teal"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

          {/* DOCTOR 2: Dr. V. Sai Kiran Reddy */}
          <div className="doctor-card">
            {/* Top Signage / Portrait Display */}
            <div className="doctor-visual-header header-navy">
              <div className="doctor-icon-avatar avatar-navy">
                <Stethoscope size={32} />
              </div>
              <div className="doctor-signage-tag tag-navy">
                <span>Sai Kiran Hospital • Medical & Diabetic Center</span>
              </div>
            </div>

            <div className="doctor-card-content">
              {/* Doctor Name */}
              <h3 className="doctor-name">Dr. V. Sai Kiran Reddy</h3>

              {/* Credentials */}
              <div className="doctor-credentials">
                <span className="cred-badge cred-primary">MBBS, DNB (General Medicine)</span>
                <span className="cred-badge cred-highlight-navy">DFID (Fellowship in Diabetes)</span>
                <span className="cred-badge cred-sub">Ex-Registrar, CMC Vellore</span>
              </div>

              {/* Short Context Description */}
              <p className="doctor-context-desc">
                General medicine physician with specialized fellowship training in diabetes care and management.
              </p>

              {/* Specialization Tags */}
              <div className="doctor-tags-row">
                <span className="spec-tag tag-navy">General Medicine</span>
                <span className="spec-tag tag-navy">Diabetes Care</span>
              </div>

              {/* Card Footer Action */}
              <div className="doctor-action-footer">
                <a href="tel:9391251558" className="btn-doctor-action btn-action-navy">
                  Call 93912 51558
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
