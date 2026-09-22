import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Hero from '../../../components/Hero';
import Doctors from '../../../components/Doctors';
import Services from '../../../components/Services';
import FetalMedicineFeature from '../../../components/FetalMedicineFeature';
import Facility from '../../../components/Facility';
import WhyVasundharaReviews from '../../../components/WhyVasundharaReviews';
import ContactLocation from '../../../components/ContactLocation';
import Footer from '../../../components/Footer';
import AppointmentModal from '../../../components/AppointmentModal';
import MobileBottomBar from '../../../components/MobileBottomBar';
import FloatingSideActions from '../../../components/FloatingSideActions';

// Import Dhanvanthari data
import { hospital } from '../../../data/hospitals/dhanvanthari/hospital';
import { contact } from '../../../data/hospitals/dhanvanthari/contact';
import { departments } from '../../../data/hospitals/dhanvanthari/departments';
import { services } from '../../../data/hospitals/dhanvanthari/services';
import { facilities } from '../../../data/hospitals/dhanvanthari/facilities';
import { doctors } from '../../../data/hospitals/dhanvanthari/doctors';

const Home = () => {
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

  const navbarData = {
    logoText: "",
    logoSubtext: "",
    logoImage: "/hospitals/dhanvanthari/logo/dhanavantri_logo.png",
    phone: contact.phone,
    phoneUrl: `tel:${contact.phone.replace(/\D/g, '')}`,
    navLinks: [
      { id: "about", label: "About", href: "#hero" },
      { id: "departments", label: "Departments", href: "#departments" },
      { id: "services", label: "Services", href: "#services" },
      { id: "facilities", label: "Facilities", href: "#facilities" },
      { id: "doctors", label: "Doctors", href: "#doctors" },
      { id: "contact", label: "Contact", href: "#contact" }
    ]
  };

  const heroData = {
    eyebrow: "MULTISPECIALTY HEALTHCARE",
    title1: "Trusted Care.",
    title2: "Compassionate Healing.",
    desc: hospital.about.description,
    buttonText: "Book Appointment",
    badgeText: "Trusted Care • Ramnagar, Anantapur",
    stats: [
      { value: "Multispecialty", label: "CARE" },
      { value: "Emergency", label: "24/7 SUPPORT" },
      { value: "Experienced", label: "DOCTORS" },
      { value: "Ramnagar", label: "ANANTAPUR" }
    ],
    image: "/hospitals/dhanvanthari/hero/dhanavantri.png",
    imageAlt: "Dhanvanthari Hospital Building in Ramnagar Anantapur",
    imageFit: "cover",
    imagePosition: "center 50%"
  };

  const departmentsData = {
    eyebrow: "OUR SPECIALTIES",
    heading: "Hospital Departments",
    subheading: "Comprehensive medical specialties for complete patient care.",
    services: departments.map((dept, index) => ({
      number: String(index + 1).padStart(2, '0'),
      icon: dept.icon || "Activity",
      title: dept.title,
      desc: dept.description,
      accent: index % 2 === 0 ? "teal" : "primary"
    })),
    disclaimer: ""
  };

  const medicalServicesData = {
    eyebrow: "PATIENT CARE",
    heading: "Medical Services",
    subheading: "Support and diagnostic services for effective treatment.",
    services: services.map((srv, index) => ({
      number: String(index + 1).padStart(2, '0'),
      icon: srv.icon || "Activity",
      title: srv.title,
      desc: srv.description,
      accent: index % 2 !== 0 ? "teal" : "primary"
    })),
    disclaimer: ""
  };

  const aboutFeatureData = {
    eyebrow: "ABOUT DHANVANTHARI",
    heading: hospital.about.title,
    desc: hospital.about.description,
    image: "/hospitals/dhanvanthari/hero/dhanavantri.png",
    imageAlt: "Dhanvanthari Hospital Care",
    badgeText1: "Dhanvanthari Hospital",
    badgeText2: "Ramnagar, Anantapur",
    points: hospital.about.principles.slice(0, 3).map(p => ({
      icon: "CheckCircle",
      title: p.title,
      desc: p.description
    })),
    buttonText: "Learn More",
    actionService: "General Inquiry"
  };

  const facilitiesData = {
    eyebrow: "INFRASTRUCTURE",
    heading: "Hospital Facilities",
    subheading: "Modern healthcare infrastructure designed for patient comfort and advanced treatment.",
    images: [
      {
        src: "/hospitals/dhanvanthari/facilities/dhanvanthari_reception.jpg",
        alt: "Dhanvanthari Hospital Reception & Consultation Area",
        caption: "Clinical Reception & Consultation Area",
        icon: "Building2"
      },
      {
        src: "/hospitals/dhanvanthari/facilities/dhanvanthari_ward.jpg",
        alt: "Dhanvanthari Modern Patient Wards and Clinical Rooms",
        caption: "Modern Patient Care Wards & Diagnostics"
      }
    ],
    name: hospital.name,
    address: contact.address,
    desc: hospital.about.description,
    chips: facilities.filter(f => f.verified).slice(0, 4).map(f => ({
      label: f.title,
      icon: f.icon || "CheckCircle2"
    })),
    note: "Dedicated to providing accessible, high-quality healthcare in Anantapur."
  };
  
  if (facilitiesData.chips.length === 0) {
    facilitiesData.chips = [
      { label: "Emergency Care", icon: "HeartPulse" },
      { label: "Modern Wards", icon: "Building2" },
      { label: "24/7 Support", icon: "Stethoscope" }
    ];
  }

  const patientJourneyData = {
    eyebrow: "PATIENT JOURNEY",
    heading: "Your Path to Recovery",
    subheading: "A streamlined process to ensure you receive the best care seamlessly.",
    reviewsTitle: "Step-by-Step Care",
    badgeText: "Trusted Process",
    reviews: hospital.journey.map(step => ({
      name: `Step ${step.step}`,
      tag: "Process",
      date: "Seamless Experience",
      comment: `${step.title}: ${step.description}`
    }))
  };

  const doctorsData = {
    eyebrow: "OUR SPECIALISTS",
    heading: "Expert Medical Professionals",
    subheading: "Experienced healthcare providers across various specialties.",
    doctorsList: doctors.map(doc => ({
      id: doc.id,
      name: doc.name,
      signage: doc.departmentId,
      icon: doc.icon || "UserCheck",
      theme: "teal",
      credentials: doc.qualifications.map(q => ({ text: q, type: "primary" })),
      desc: doc.bio || "Specialist doctor.",
      tags: doc.specializations || [],
      actionLabel: "Book Consultation",
      actionService: doc.departmentId
    }))
  };
  
  if (doctorsData.doctorsList.length === 0) {
    doctorsData.doctorsList = [{
      id: "placeholder",
      name: "Doctor Information",
      signage: "Specialists",
      icon: "UserCheck",
      theme: "teal",
      credentials: [{ text: "Specialized Care", type: "primary" }],
      desc: "Specialist information will be updated soon.",
      tags: ["Medical Care"],
      actionLabel: "Contact Us",
      actionService: "General Consultation"
    }];
  }

  const contactData = {
    eyebrow: "LOCATION & CONTACT",
    heading: "Visit Dhanvanthari",
    subheading: "Located in Ramnagar, Anantapur for easy access to quality healthcare.",
    mapUrl: contact.mapEmbedUrl || "https://maps.google.com/maps?q=Ramnagar%20Anantapur&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: contact.googleMapsUrl || "https://maps.google.com",
    reachSteps: [
      { title: "From RTC Bus Stand", desc: "Easily accessible from the main bus stand." },
      { title: "From Railway Station", desc: "Located within convenient distance via auto or taxi." },
      { title: "Landmark", desc: "Andhra Bank Colony, Ramnagar." }
    ],
    addressCard: {
      title: "Hospital Address",
      subtext: "Dhanvanthari Hospital is located in Ramnagar, Anantapur.",
      address: contact.address
    },
    parkingInfo: [
      { label: "Accessibility:", desc: "Patient-friendly access." },
      { label: "Emergency:", desc: "Emergency services available." }
    ],
    opd: {
      title: "STATUS",
      hours: "Healthcare Services",
      liveStatus: "AVAILABLE",
      note: "• Contact hospital for specific consultation timings."
    },
    phones: [
      { label: "Reception:", number: contact.phone, link: contact.phone.replace(/\D/g, '') },
      { label: "Emergency:", number: contact.emergency || contact.phone, link: (contact.emergency || contact.phone).replace(/\D/g, '') }
    ],
    whatsappLink: `https://wa.me/91${contact.phone.replace(/\D/g, '')}`
  };

  const footerData = {
    logoImage: "/hospitals/dhanvanthari/logo/dhanavantri_logo.png",
    brandName: "",
    brandSub: "",
    tagline: hospital.about.description,
    quickLinks: navbarData.navLinks,
    contact: {
      phone: contact.phone,
      phoneLink: contact.phone.replace(/\D/g, ''),
      location: "Ramnagar, Anantapur"
    },
    copyright: `© ${new Date().getFullYear()} Dhanvanthari Hospital. All rights reserved.`
  };

  const mobileData = {
    phone: contact.phone,
    phoneUrl: `tel:${contact.phone.replace(/\D/g, '')}`,
    buttonText: "Book Appointment"
  };

  const floatingData = {
    whatsappUrl: `https://wa.me/91${contact.phone.replace(/\D/g, '')}?text=Hello%20Dhanvanthari%20Hospital,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`,
    phoneUrl: `tel:${contact.phone.replace(/\D/g, '')}`,
    phoneTitle: `Call ${contact.phone}`
  };

  const modalData = {
    title: "Book an Appointment",
    subtitle: `${hospital.name}, ${contact.address}`,
    phone: contact.phone,
    phoneUrl: `tel:${contact.phone.replace(/\D/g, '')}`,
    location: "Ramnagar, Anantapur",
    servicesList: departments.map(d => d.title)
  };

  return (
    <div className="app-main-wrapper" style={{ '--primary-teal': '#006B7D', '--primary-navy': '#006B7D' }}>
      <Navbar onOpenBooking={handleOpenBooking} data={navbarData} />
      <main>
        {/* 1. HERO SECTION */}
        <Hero onOpenBooking={handleOpenBooking} data={heroData} />
        
        {/* 2. OUR DOCTORS */}
        <Doctors onOpenBooking={handleOpenBooking} data={doctorsData} />
        
        {/* 3. OUR SERVICES */}
        <div id="departments">
          <Services onOpenBooking={handleOpenBooking} data={departmentsData} />
        </div>
        
        <div id="services" style={{ background: '#f8fafc' }}>
          <Services onOpenBooking={handleOpenBooking} data={medicalServicesData} />
        </div>
        
        {/* 4. ABOUT DHANVANTHARI (Using Fetal Medicine Feature layout) */}
        <FetalMedicineFeature onOpenBooking={handleOpenBooking} data={aboutFeatureData} />
        
        {/* 5. INSIDE OUR FACILITY */}
        <Facility data={facilitiesData} />
        
        {/* 6. PATIENT REVIEWS / JOURNEY */}
        <WhyVasundharaReviews data={patientJourneyData} />
        
        {/* 7. CONTACT LOCATION */}
        <ContactLocation data={contactData} />
      </main>
      <Footer onOpenBooking={handleOpenBooking} data={footerData} />
      
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking} 
        initialService={selectedService} 
        data={modalData}
      />
      <MobileBottomBar onOpenBooking={handleOpenBooking} data={mobileData} />
      <FloatingSideActions onOpenBooking={handleOpenBooking} data={floatingData} />
    </div>
  );
};

export default Home;

