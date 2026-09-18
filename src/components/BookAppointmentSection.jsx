import React, { useState } from 'react';
import { Calendar, Phone, Clock, User, CheckCircle2, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import './BookAppointmentSection.css';

const SERVICES_LIST = [
  "Fetal Medicine Assessment",
  "Pregnancy Scan / Anomaly Scan",
  "Ultrasound & Sonography",
  "Diagnostic Imaging Evaluation",
  "General Medicine Consultation",
  "Diabetes Management"
];

export default function BookAppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES_LIST[0],
    date: '',
    time: 'Morning (9 AM - 1 PM)'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-section" className="book-section section-padding">
      <div className="container">
        <div className="book-section-header">
          <div className="eyebrow">EASY BOOKING</div>
          <h2 className="section-heading">Book Your Appointment</h2>
          <p className="section-subheading">
            Schedule a diagnostic scan or medical consultation at Vasundhara Diagnostics & Sai Kiran Hospital in Sai Nagar, Anantapur.
          </p>
        </div>

        <div className="book-section-grid">
          {/* Left Form Card */}
          <div className="book-form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="inline-book-form">
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
                  <label className="form-label">Select Medical Service</label>
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
                    <label className="form-label">Time Slot</label>
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

                <button type="submit" className="btn btn-teal btn-full btn-book-submit">
                  Confirm Appointment Request <ChevronRight size={18} />
                </button>
              </form>
            ) : (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Appointment Request Received!</h3>
                <p>
                  Thank you <strong>{formData.name}</strong>. We have received your appointment request for <strong>{formData.service}</strong>.
                </p>
                <div className="success-phone-card">
                  <span>Direct Line Helpline:</span>
                  <a href="tel:7989330974">79893 30974</a>
                </div>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-full">
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

          {/* Right Direct Hotline Info Box */}
          <div className="book-info-card">
            <div className="hotline-badge">
              <Sparkles size={16} /> Direct Booking & Assistance
            </div>
            <h3 className="hotline-title">Need Immediate Consultation?</h3>
            <p className="hotline-desc">
              Call our care coordinator directly for prompt slot allocation and scan inquiries.
            </p>

            <div className="hotline-box">
              <span className="hotline-label">Vasundhara Diagnostics Helpline</span>
              <a href="tel:7989330974" className="hotline-number">79893 30974</a>
            </div>

            <div className="hotline-box secondary-hotline">
              <span className="hotline-label">Sai Kiran Hospital Line</span>
              <a href="tel:9391251558" className="hotline-number number-blue">93912 51558</a>
            </div>

            <div className="hotline-location-tag">
              <MapPin size={16} /> Sai Nagar, Anantapur, Andhra Pradesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
