import React from 'react';
import Button from '../common/Button';
import FadeIn from '../animations/FadeIn';

const HospitalHero = ({ hospital, contact }) => {
  return (
    <div className="relative bg-[var(--hospital-background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--hospital-heading)] leading-tight mb-6">
              {hospital.name}
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-[var(--hospital-text)] mb-8 max-w-lg">
              {hospital.tagline}
            </p>
          </FadeIn>
          
          <FadeIn delay={400} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary">Book Appointment</Button>
            <Button size="lg" variant="outline">Emergency Care</Button>
          </FadeIn>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <FadeIn delay={300}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200">
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--hospital-primary)] to-[var(--hospital-secondary)] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-[var(--hospital-primary)] opacity-50">
                <span className="text-2xl font-bold">Trusted Medical Expertise</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default HospitalHero;
