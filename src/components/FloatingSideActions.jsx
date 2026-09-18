import React from 'react';
import { Calendar, Phone } from 'lucide-react';
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
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.483 1.332 5.001L2 22l5.127-1.341a9.96 9.96 0 0 0 4.881 1.28h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.667-1.04-5.174-2.928-7.06A9.919 9.919 0 0 0 12.012 2zm5.83 14.155c-.247.697-1.428 1.328-1.966 1.393-.503.06-1.157.091-3.666-.948-3.21-1.327-5.267-4.577-5.426-4.79-.159-.214-1.303-1.734-1.303-3.307 0-1.573.824-2.348 1.116-2.669.292-.321.637-.402.849-.402.213 0 .425.003.61.011.196.008.459-.074.718.547.265.636.901 2.2.981 2.361.08.161.133.348.026.562-.106.214-.159.348-.318.535-.159.187-.335.418-.478.562-.159.16-.325.334-.14.651.186.317.828 1.365 1.777 2.21 1.22 1.087 2.247 1.424 2.565 1.584.318.16.504.133.69-.08.186-.213.796-.928 1.008-1.248.213-.32.425-.267.716-.16.292.107 1.856.875 2.174 1.034.318.16.53.24.61.374.08.134.08.777-.167 1.474z"/>
          </svg>
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
