import React from 'react';
import { MessageCircle, Calendar, Phone } from 'lucide-react';
import './FloatingSideActions.css';

export default function FloatingSideActions({ onOpenBooking }) {
  return (
    <div className="floating-side-tabs" aria-label="Quick Action Buttons">
      {/* WhatsApp Action Tab */}
      <a 
        href="https://wa.me/917989330974?text=Hello%20Vasundhara%20Diagnostics,%20I%20would%20like%20to%20inquire%20about%20an%20appointment." 
        target="_blank" 
        rel="noopener noreferrer"
        className="side-tab tab-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <div className="tab-icon-glass">
          <MessageCircle size={22} />
        </div>
      </a>

      {/* Book Appointment Action Tab */}
      <button 
        onClick={() => onOpenBooking()} 
        className="side-tab tab-calendar"
        aria-label="Book Appointment"
        title="Book Appointment"
      >
        <div className="tab-icon-glass">
          <Calendar size={22} />
        </div>
      </button>

      {/* Call Direct Action Tab */}
      <a 
        href="tel:7989330974" 
        className="side-tab tab-phone"
        aria-label="Call Vasundhara Diagnostics"
        title="Call 79893 30974"
      >
        <div className="tab-icon-glass">
          <Phone size={22} />
        </div>
      </a>
    </div>
  );
}
