import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import Button from '../common/Button';

const HospitalNavbar = ({ hospital, navigation, contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[var(--hospital-surface)] border-b border-[var(--hospital-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to={navigation[0]?.path || '/'} className="flex items-center gap-3">
              {/* Optional logo image could go here */}
              <div className="w-10 h-10 bg-[var(--hospital-primary)] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                {hospital.name.charAt(0)}
              </div>
              <span className="text-xl font-bold text-[var(--hospital-primary)]">
                {hospital.name}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[var(--hospital-primary)] bg-[var(--hospital-primary)] bg-opacity-10'
                    : 'text-[var(--hospital-text)] hover:text-[var(--hospital-primary)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${contact.phone}`} className="flex items-center text-[var(--hospital-primary)] font-medium text-sm gap-2">
              <PhoneCall size={16} />
              <span>{contact.phone}</span>
            </a>
            <Button variant="primary">Book Appointment</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--hospital-text)] hover:text-[var(--hospital-primary)] focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--hospital-surface)] border-b border-[var(--hospital-border)] absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--hospital-text)] hover:text-[var(--hospital-primary)] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-3 flex flex-col gap-3">
              <Button variant="primary" className="w-full">Book Appointment</Button>
              <Button variant="outline" className="w-full">Emergency: {contact.phone}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HospitalNavbar;
