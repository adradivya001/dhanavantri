import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import './MobileBottomBar.css';

const DEFAULT_MOBILE_DATA = {
  phone: "79893 30974",
  phoneUrl: "tel:7989330974",
  buttonText: "Book Appointment"
};

export default function MobileBottomBar({ onOpenBooking, data }) {
  const content = data || DEFAULT_MOBILE_DATA;

  return (
    <div className="mobile-bottom-bar mobile-only">
      <a href={content.phoneUrl} className="mobile-bar-btn call-btn">
        <Phone size={18} /> Call {content.phone}
      </a>
      <button onClick={() => onOpenBooking && onOpenBooking()} className="mobile-bar-btn book-btn">
        <Calendar size={18} /> {content.buttonText}
      </button>
    </div>
  );
}
