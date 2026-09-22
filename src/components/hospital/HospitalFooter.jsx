import React from 'react';
import { Link } from 'react-router-dom';

const HospitalFooter = ({ hospital, navigation, departments, contact }) => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Hospital */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--hospital-primary)] rounded-lg flex items-center justify-center font-bold text-xl">
                {hospital.name.charAt(0)}
              </div>
              <span className="text-xl font-bold">{hospital.name}</span>
            </div>
            <p className="text-gray-400 mb-6">
              {hospital.tagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-[var(--hospital-primary)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.slice(0, 5).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-[var(--hospital-primary)]">
              Departments
            </h4>
            <ul className="space-y-3">
              {departments.slice(0, 5).map(dept => (
                <li key={dept.id}>
                  <Link to={`/dhanvanthari/departments/${dept.slug}`} className="text-gray-400 hover:text-white transition-colors">
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-[var(--hospital-primary)]">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-1">📍</span>
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href={`tel:${contact.phone}`} className="hover:text-white">{contact.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {hospital.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/dhanvanthari/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/dhanvanthari/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HospitalFooter;
