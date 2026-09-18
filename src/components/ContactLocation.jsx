import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Navigation, ExternalLink, CheckCircle2, Clock, User, ChevronRight, Building2 } from 'lucide-react';
import './ContactLocation.css';

const SERVICES_LIST = [
  "Fetal Medicine Assessment",
  "Pregnancy Scan / Anomaly Scan",
  "Ultrasound & Sonography",
  "Diagnostic Imaging Evaluation",
  "General Medicine Consultation",
  "Diabetes Management"
];

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0],
    date: '',
    time: 'Morning (9 AM - 1 PM)'
  });

  const [submitted, setSubmitted] = useState(false);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vasundhara+Diagnostics+Sai+Nagar+Anantapur";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-merged-section section-padding">
      <div className="container">
        {/* Unified Section Header */}
        <div className="contact-header">
          <div className="eyebrow">APPOINTMENT & LOCATION</div>
          <h2 className="section-heading">Book Your Appointment</h2>
          <p className="section-subheading">
            Schedule your visit with our medical and diagnostic team in Sai Nagar, Anantapur.
          </p>
        </div>

        {/* 2-Column Combined Layout */}
        <div className="contact-container-grid">
          {/* LEFT COLUMN: Interactive Appointment Form */}
          <div className="contact-form-column">
            <div className="appointment-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="merged-app-form">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <div className="input-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Swathi Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <div className="input-wrapper">
                      <Phone size={18} className="input-icon" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 79893 30974"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Medical Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                    >
                      {SERVICES_LIST.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <div className="input-wrapper">
                        <Calendar size={18} className="input-icon" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Time</label>
                      <div className="input-wrapper">
                        <Clock size={18} className="input-icon" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="form-select"
                        >
                          <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                          <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-teal btn-full btn-submit-merged">
                    Request Appointment <ChevronRight size={18} />
                  </button>

                  <p className="form-disclaimer-sm">
                    Our care team will call you to confirm your exact time slot.
                  </p>
                </form>
              ) : (
                <div className="form-success-box">
                  <CheckCircle2 size={44} className="success-icon" />
                  <h3>Appointment Request Submitted!</h3>
                  <p>
                    Thank you <strong>{formData.name}</strong>. We have received your request for <strong>{formData.service}</strong>.
                  </p>
                  <div className="success-phone-card">
                    <span>Helpline:</span>
                    <a href="tel:7989330974">79893 30974</a>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-full">
                    Book Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Visit Us Details & Integrated Google Map */}
          <div className="contact-visit-column">
            <div className="visit-us-card">
              <h3 className="visit-title">Visit Us</h3>

              {/* Dual Facility Info */}
              <div className="facility-names-block">
                <div className="facility-item-row">
                  <Building2 size={16} className="f-icon-teal" />
                  <div>
                    <span className="f-name">VASUNDHARA DIAGNOSTICS</span>
                    <span className="f-sub">Fetal Medicine Centre</span>
                  </div>
                </div>

                <div className="facility-item-row">
                  <Building2 size={16} className="f-icon-blue" />
                  <div>
                    <span className="f-name">SAI KIRAN HOSPITAL</span>
                    <span className="f-sub">Medical & Diabetic Center</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="visit-phones-grid">
                <a href="tel:7989330974" className="visit-phone-link">
                  <Phone size={15} /> 7989330974
                </a>
                <a href="tel:9391251558" className="visit-phone-link">
                  <Phone size={15} /> 9391251558
                </a>
              </div>

              {/* Location Tag */}
              <div className="visit-location-row">
                <MapPin size={16} className="loc-icon" />
                <span>Sai Nagar, Anantapur, Andhra Pradesh</span>
              </div>

              {/* Action Buttons */}
              <div className="visit-buttons-row">
                <a href="tel:7989330974" className="btn btn-teal btn-visit-action">
                  <Phone size={16} /> Call Now
                </a>
                <a 
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-visit-action"
                >
                  <Navigation size={16} /> Get Directions <ExternalLink size={13} />
                </a>
              </div>

              {/* Embedded Map Frame inside Visit Us column */}
              <div className="merged-map-container">
                <iframe
                  title="Vasundhara Diagnostics & Sai Kiran Hospital Map"
                  src="https://maps.google.com/maps?q=Sai%20Nagar%20Anantapur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '14px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
