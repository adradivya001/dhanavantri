import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react';
import './AppointmentModal.css';

const DEFAULT_MODAL_DATA = {
  title: "Book an Appointment",
  subtitle: "Vasundhara Diagnostics & Fetal Medicine Centre, Sai Nagar, Anantapur.",
  phone: "79893 30974",
  phoneUrl: "tel:7989330974",
  location: "Sai Nagar, Anantapur",
  servicesList: [
    "Fetal Medicine Assessment",
    "Pregnancy Scan / Anomaly Scan",
    "Ultrasound & Sonography",
    "Laboratory Diagnostic Test",
    "Prenatal Screening",
    "General Health Screening"
  ]
};

export default function AppointmentModal({ isOpen, onClose, initialService = '', data }) {
  const content = data || DEFAULT_MODAL_DATA;
  const servicesList = content.servicesList || DEFAULT_MODAL_DATA.servicesList;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || servicesList[0],
    date: '',
    time: 'Morning (9 AM - 1 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: servicesList[0],
      date: '',
      time: 'Morning (9 AM - 1 PM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container glass-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close appointment modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-badge">
                <Stethoscope size={14} /> Quick Appointment Request
              </div>
              <h3 id="modal-title" className="modal-title">{content.title}</h3>
              <p className="modal-subtitle">
                {content.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anitha Reddy"
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
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="form-select"
                >
                  {servicesList.map((srv, idx) => (
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
                  <label className="form-label">Preferred Slot</label>
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

              <div className="form-group">
                <label className="form-label">Additional Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-teal btn-full">
                Confirm Appointment Request <ChevronRight size={18} />
              </button>

              <p className="form-disclaimer">
                Our care coordinator will contact you promptly at <strong>{content.phone}</strong> to confirm your slot.
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
               <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h3>Appointment Request Received!</h3>
            <p>
              Thank you <strong>{formData.name}</strong>. We have received your request for <strong>{formData.service}</strong>.
            </p>
            <div className="success-details-card">
              <div className="detail-item">
                <span>Location:</span> <strong>{content.location}</strong>
              </div>
              <div className="detail-item">
                <span>Direct Helpline:</span> <strong><a href={content.phoneUrl}>{content.phone}</a></strong>
              </div>
            </div>
            <button onClick={handleReset} className="btn btn-primary btn-full">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
