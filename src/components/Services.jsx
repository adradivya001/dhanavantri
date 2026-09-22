import React from 'react';
import { Baby, Activity, Scan, Stethoscope, HeartPulse, Pill, ArrowUpRight, Scissors, Bone, Brain, Ear, Syringe, Ambulance, UserPlus, FileText, CalendarCheck, FileHeart } from 'lucide-react';
import './Services.css';

const DEFAULT_SERVICES_DATA = {
  eyebrow: "OUR SERVICES",
  heading: "Comprehensive Care, Under One Roof",
  subheading: "Focused medical and diagnostic services designed around patient needs.",
  services: [
    { number: "01", icon: "Baby", title: "Fetal Medicine", desc: "Specialized fetal assessment and pregnancy-focused care.", accent: "teal" },
    { number: "02", icon: "Activity", title: "Ultrasound & Sonography", desc: "Diagnostic ultrasound and sonography services.", accent: "primary" },
    { number: "03", icon: "Scan", title: "Diagnostic Imaging", desc: "Imaging services supporting clinical evaluation.", accent: "teal" },
    { number: "04", icon: "Stethoscope", title: "General Medicine", desc: "Medical consultation and care for common health concerns.", accent: "primary" },
    { number: "05", icon: "HeartPulse", title: "Diabetes Care", desc: "Focused medical care for diabetes management.", accent: "teal" },
    { number: "06", icon: "Pill", title: "Pharmacy", desc: "Convenient access to medicines within the facility.", accent: "primary" }
  ],
  disclaimer: "* Facility offerings include Vasundhara Diagnostics & Fetal Medicine Centre and Sai Kiran Hospital Medical & Diabetic Center in Sai Nagar, Anantapur."
};

const iconMap = {
  Baby, Activity, Scan, Stethoscope, HeartPulse, Pill, Scissors, Bone, Brain, Ear, Syringe, Ambulance, UserPlus, FileText, CalendarCheck, FileHeart
};

export default function Services({ onOpenBooking, data }) {
  const content = data || DEFAULT_SERVICES_DATA;

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <div className="eyebrow">{content.eyebrow}</div>
          <h2 className="section-heading">{content.heading}</h2>
          <p className="section-subheading">
            {content.subheading}
          </p>
        </div>

        <div className="services-grid">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <div 
                key={index} 
                className="service-card"
                onClick={() => onOpenBooking && onOpenBooking(service.title)}
              >
                <div className="card-top-row">
                  <span className="service-number">{service.number}</span>
                  <div className={`service-icon-box ${service.accent}`}>
                    <IconComponent size={22} />
                  </div>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <div className="service-card-action">
                  <span>Book Service</span>
                  <ArrowUpRight size={16} className="arrow-icon" />
                </div>
              </div>
            );
          })}
        </div>

        {content.disclaimer && (
          <div className="services-disclaimer-box">
            <p>{content.disclaimer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
