import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import './MobileBottomBar.css';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="mobile-bottom-bar mobile-only">
      <a href="tel:7989330974" className="mobile-bar-btn call-btn">
        <Phone size={18} /> Call 79893 30974
      </a>
      <button onClick={() => onOpenBooking()} className="mobile-bar-btn book-btn">
        <Calendar size={18} /> Book Appointment
      </button>
    </div>
  );
}
