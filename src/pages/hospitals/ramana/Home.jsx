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

// Import KC Ramanna Hospital data
import { hospital } from '../../../data/hospitals/ramana/hospital';
import { contact } from '../../../data/hospitals/ramana/contact';
import { departments } from '../../../data/hospitals/ramana/departments';
import { services } from '../../../data/hospitals/ramana/services';
import { facilities } from '../../../data/hospitals/ramana/facilities';
import { doctors } from '../../../data/hospitals/ramana/doctors';

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
    logoText: "KC RAMANNA",
    logoSubtext: "Multispecialty Hospital",
    logoImage: "",
    phone: contact.phone,
    phoneUrl: `tel:${contact.phoneRaw}`,
    navLinks: [
      { id: "about", label: "About", href: "#hero" },
      { id: "doctors", label: "Doctors", href: "#doctors" },
      { id: "departments", label: "Departments", href: "#departments" },
      { id: "services", label: "Services", href: "#services" },
      { id: "facilities", label: "Facilities", href: "#facilities" },
      { id: "reviews", label: "Reviews", href: "#reviews" },
      { id: "contact", label: "Contact", href: "#contact" }
    ]
  };

  const heroData = {
    eyebrow: "MULTISPECIALTY HEALTHCARE • ESTD 2017",
    title1: "Compassionate Care.",
    title2: "Advanced Multispecialty Healing.",
    desc: `${hospital.name} is a premier 4.9★ rated healthcare facility in Ramnagar, Anantapur. Providing trusted medical, surgical, maternity, and pediatric care with modern clinical infrastructure.`,
    buttonText: "Book Appointment",
    badgeText: "4.9 ★ Rating (680+ Reviews) • Ramnagar, Anantapur",
    stats: [
      { value: "4.9 ★", label: "PATIENT RATING" },
      { value: "Estd 2017", label: "7+ YRS TRUST" },
      { value: "Multispecialty", label: "EXPERT CARE" },
      { value: "Ramnagar", label: "ANANTAPUR" }
    ],
    image: "/hospitals/ramana/hero/rammana.png",
    imageAlt: "KC Ramanna Hospital Building in Ramnagar Anantapur",
    imageFit: "cover",
    imagePosition: "center 65%"
  };

  const doctorsData = {
    eyebrow: "OUR MEDICAL SPECIALISTS",
    heading: "Experienced Doctors & Consultants",
    subheading: "Consult with seasoned medical specialists across Diabetology, General Medicine, and Obstetrics & Gynecology.",
    doctorsList: doctors.map((doc, index) => ({
      id: doc.id,
      name: doc.name,
      signage: doc.signage || doc.departmentId,
      icon: doc.icon || (index % 2 === 0 ? "Stethoscope" : "UserCheck"),
      theme: doc.theme || (index % 2 === 0 ? "teal" : "navy"),
      credentials: doc.qualifications.map((q, qIdx) => ({
        text: q,
        type: qIdx === 0 ? "primary" : (doc.theme === "navy" ? "highlight-navy" : "highlight")
      })),
      desc: doc.bio,
      tags: doc.specializations || [],
      actionLabel: "Book Consultation",
      actionService: doc.signage || doc.name
    }))
  };

  const departmentsData = {
    eyebrow: "OUR SPECIALTIES",
    heading: "Hospital Departments",
    subheading: "Comprehensive medical and surgical departments tailored to your family's healthcare needs.",
    isFlowing: true,
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
    eyebrow: "PATIENT SERVICES",
    heading: "Clinical & Support Services",
    subheading: "Around-the-clock medical infrastructure designed for timely emergency response, diagnosis, and patient comfort.",
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
    eyebrow: "ABOUT KC RAMANNA HOSPITAL",
    heading: "Excellence in Multispecialty Healthcare Since 2017",
    desc: hospital.about.description,
    image: "/hospitals/ramana/hero/rammana.png",
    imageAlt: "KC Ramanna Hospital Facilities & Architecture",
    imagePosition: "center 60%",
    badgeText1: "KC Ramanna Hospital",
    badgeText2: "Ramnagar, Anantapur • 4.9★ Rated",
    points: hospital.about.principles.map(p => ({
      icon: "CheckCircle",
      title: p.title,
      desc: p.description
    })),
    buttonText: "Schedule a Consultation",
    actionService: "General Consultation"
  };

  const facilitiesData = {
    eyebrow: "MODERN INFRASTRUCTURE",
    heading: "Inside Our Facility",
    subheading: "Contemporary hospital infrastructure designed for high standards of hygiene, safety, and patient well-being.",
    images: [
      {
        src: "/hospitals/ramana/facilities/rammana.png",
        alt: "KC Ramanna Hospital Building Facade in Ramnagar",
        caption: "KC Ramanna Hospital • Ramnagar",
        icon: "Building2"
      },
      {
        src: "/hospitals/ramana/facilities/reception.jpg",
        alt: "KC Ramanna Hospital Outpatient & Reception Lounge",
        caption: "Reception & Consultation Lounge"
      }
    ],
    name: hospital.name,
    address: contact.address,
    desc: hospital.about.description,
    chips: facilities.filter(f => f.verified).map(f => ({
      label: f.title,
      icon: f.icon || "CheckCircle2"
    })),
    note: "Clean, patient-focused medical facility with wheelchair-accessible entrances and dedicated parking."
  };

  const patientJourneyData = {
    eyebrow: "PATIENT REVIEWS & JOURNEY",
    heading: "Trusted by 680+ Families in Anantapur",
    subheading: "Read what our patients have to say about our doctors, supportive nursing staff, and clinical care.",
    reviewsTitle: "Verified Patient Experiences",
    badgeText: "4.9 ★ Rating (683 Reviews)",
    reviews: [
      {
        name: "Suresh Kumar",
        tag: "Physician Care",
        date: "Verified Patient",
        comment: "Dr. Mahesh is exceptionally caring and takes time to explain the diagnosis clearly. Hospital is very clean and staff is very helpful."
      },
      {
        name: "Anitha Reddy",
        tag: "Maternity & Delivery",
        date: "Verified Patient",
        comment: "Dr. Prerana provided wonderful maternity care throughout my pregnancy. The nursing team was attentive and the special ward was extremely comfortable."
      },
      {
        name: "Ramesh Babu",
        tag: "Diabetic Care",
        date: "Verified Patient",
        comment: "Dr. K.C. Ramanna is a pioneer in diabetic care in Anantapur. His treatment plan helped control my sugar levels effectively."
      }
    ]
  };

  const contactData = {
    eyebrow: "LOCATION & CONTACT",
    heading: "Visit KC Ramanna Hospital",
    subheading: "Conveniently located on Main Road, Opp. Ramnagar Petrol Pump, near Kamma Bhavan, Ram Nagar, Anantapur.",
    mapUrl: contact.mapEmbedUrl,
    googleMapsLink: contact.googleMapsUrl,
    reachSteps: [
      { title: "Landmark Location", desc: "Main Road, Opp. Ramnagar Petrol Pump, Near Kamma Bhavan." },
      { title: "From Bus Stand", desc: "Located within 5-10 minutes from Anantapur RTC Bus Stand in Ram Nagar." },
      { title: "Colony Reference", desc: "Andhra Bank Colony, Ram Nagar, Kovur Nagar, Anantapur – 515004." }
    ],
    addressCard: {
      title: "Hospital Address",
      subtext: "KC Ramanna Hospital is situated on Main Road, Ramnagar, Anantapur.",
      address: contact.address
    },
    parkingInfo: [
      { label: "Timings:", desc: contact.timings },
      { label: "Accessibility:", desc: "Wheelchair accessible with dedicated parking." }
    ],
    opd: {
      title: "OPD STATUS",
      hours: contact.timings,
      liveStatus: "OPEN TODAY",
      note: "• Walk-ins and pre-booked appointments welcome."
    },
    phones: [
      { label: "Hospital Desk:", number: contact.phone, link: contact.phoneRaw },
      { label: "Emergency / Helpline:", number: contact.emergency, link: contact.phoneRaw }
    ],
    whatsappLink: `https://wa.me/91${contact.phoneRaw}?text=Hello%20KC%20Ramanna%20Hospital,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`
  };

  const footerData = {
    logoImage: "",
    brandName: "KC RAMANNA HOSPITAL",
    brandSub: "Multispecialty Healthcare",
    tagline: hospital.about.description,
    quickLinks: navbarData.navLinks,
    contact: {
      phone: contact.phone,
      phoneLink: contact.phoneRaw,
      location: "Ramnagar, Anantapur"
    },
    copyright: `© ${new Date().getFullYear()} KC Ramanna Hospital. All rights reserved.`
  };

  const mobileData = {
    phone: contact.phone,
    phoneUrl: `tel:${contact.phoneRaw}`,
    buttonText: "Book Appointment"
  };

  const floatingData = {
    whatsappUrl: `https://wa.me/91${contact.phoneRaw}?text=Hello%20KC%20Ramanna%20Hospital,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`,
    phoneUrl: `tel:${contact.phoneRaw}`,
    phoneTitle: `Call ${contact.phone}`
  };

  const modalData = {
    title: "Book an Appointment",
    subtitle: `${hospital.name}, ${contact.address}`,
    phone: contact.phone,
    phoneUrl: `tel:${contact.phoneRaw}`,
    location: "Ram Nagar, Anantapur",
    servicesList: departments.map(d => d.title)
  };

  return (
    <div className="app-main-wrapper" style={{ '--primary-teal': '#006B7D', '--primary-navy': '#0A2540' }}>
      <Navbar onOpenBooking={handleOpenBooking} data={navbarData} />
      <main>
        {/* 1. HERO SECTION */}
        <Hero onOpenBooking={handleOpenBooking} data={heroData} />
        
        {/* 2. OUR DOCTORS */}
        <Doctors onOpenBooking={handleOpenBooking} data={doctorsData} />
        
        {/* 3. OUR DEPARTMENTS (Flowing Marquee with Pause on Hover) */}
        <div id="departments">
          <Services onOpenBooking={handleOpenBooking} data={departmentsData} />
        </div>
        
        {/* 4. CLINICAL SERVICES */}
        <div id="services" style={{ background: '#f8fafc' }}>
          <Services onOpenBooking={handleOpenBooking} data={medicalServicesData} />
        </div>
        
        {/* 5. ABOUT KC RAMANNA HOSPITAL */}
        <FetalMedicineFeature onOpenBooking={handleOpenBooking} data={aboutFeatureData} />
        
        {/* 6. INSIDE OUR FACILITY */}
        <div id="facilities">
          <Facility data={facilitiesData} />
        </div>
        
        {/* 7. PATIENT REVIEWS & JOURNEY */}
        <div id="reviews">
          <WhyVasundharaReviews data={patientJourneyData} />
        </div>
        
        {/* 8. CONTACT & LOCATION */}
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
