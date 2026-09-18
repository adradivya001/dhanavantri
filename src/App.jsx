import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Doctors from './components/Doctors';
import Services from './components/Services';
import FetalMedicineFeature from './components/FetalMedicineFeature';
import Facility from './components/Facility';
import WhyVasundharaReviews from './components/WhyVasundharaReviews';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="app-main-wrapper">
      {/* Black Glassmorphism Floating Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. HERO SECTION */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. OUR DOCTORS */}
        <Doctors onOpenBooking={handleOpenBooking} />

        {/* 3. OUR SERVICES */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. FETAL MEDICINE */}
        <FetalMedicineFeature onOpenBooking={handleOpenBooking} />

        {/* 5. INSIDE OUR FACILITY */}
        <Facility />

        {/* 6. PATIENT REVIEWS */}
        <WhyVasundharaReviews />

        {/* 7. MERGED BOOK APPOINTMENT + VISIT US */}
        <ContactLocation />
      </main>

      {/* 8. FOOTER */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking} 
        initialService={selectedService} 
      />

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
