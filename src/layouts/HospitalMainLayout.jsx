import React, { useEffect } from 'react';
import HospitalNavbar from '../components/hospital/HospitalNavbar';
import HospitalFooter from '../components/hospital/HospitalFooter';

const HospitalMainLayout = ({ children, hospital, navigation, departments, contact, theme }) => {
  // Apply theme dynamically
  useEffect(() => {
    if (!theme) return;
    
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--hospital-${key}`, value);
    });
    
    // Optional font
    if (theme.typography?.fontFamily) {
      root.style.setProperty('--hospital-font', theme.typography.fontFamily);
    }
    
    return () => {
      // Cleanup custom properties if needed when unmounting
      Object.keys(theme.colors).forEach((key) => {
        root.style.removeProperty(`--hospital-${key}`);
      });
      root.style.removeProperty('--hospital-font');
    };
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ fontFamily: 'var(--hospital-font, inherit)' }}>
      <HospitalNavbar hospital={hospital} navigation={navigation} contact={contact} />
      <main className="flex-grow bg-[var(--hospital-background)]">
        {children}
      </main>
      <HospitalFooter hospital={hospital} navigation={navigation} departments={departments} contact={contact} />
    </div>
  );
};

export default HospitalMainLayout;
