import React from 'react';
import { UserCheck, Stethoscope, Sparkles } from 'lucide-react';
import './Doctors.css';

export default function Doctors({ onOpenBooking, data }) {
  const defaultData = {
    eyebrow: "OUR MEDICAL TEAM",
    heading: "Expertise You Can Trust",
    subheading: "Experienced medical care across fetal medicine, radiology, general medicine and diabetes care.",
    doctorsList: [
      {
        id: "vasundhara",
        name: "Dr. N. Vasundhara",
        signage: "Vasundhara Diagnostics & Fetal Medicine",
        icon: "UserCheck",
        theme: "teal",
        credentials: [
          { text: "MBBS, MD Radiology", type: "primary" },
          { text: "Fellow in Fetal Medicine", type: "highlight" }
        ],
        desc: "Specialized in radiology and fetal medicine, with a focus on diagnostic imaging and pregnancy-related fetal assessment.",
        tags: ["Radiology", "Fetal Medicine", "Diagnostic Imaging"],
        actionLabel: "Book Consultation",
        actionService: "Fetal Medicine Assessment"
      },
      {
        id: "saikiran",
        name: "Dr. V. Sai Kiran Reddy",
        signage: "General Medicine & Diabetes Specialist",
        icon: "Stethoscope",
        theme: "navy",
        credentials: [
          { text: "MBBS, DNB (General Medicine)", type: "primary" },
          { text: "DFID (Fellowship in Diabetes)", type: "highlight-navy" },
          { text: "Ex-Registrar, CMC Vellore", type: "sub" }
        ],
        desc: "General medicine physician with specialized fellowship training in diabetes care and management.",
        tags: ["General Medicine", "Diabetes Care"],
        actionLabel: "Book Consultation",
        actionService: "General Medicine Consultation"
      }
    ]
  };

  const content = data || defaultData;

  const getIcon = (iconName) => {
    if (iconName === "Stethoscope") return <Stethoscope size={32} />;
    return <UserCheck size={32} />;
  };

  return (
    <section id="doctors" className="doctors-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="doctors-header">
          <div className="eyebrow">
            <Sparkles size={14} /> {content.eyebrow}
          </div>
          <h2 className="section-heading">{content.heading}</h2>
          <p className="section-subheading">
            {content.subheading}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {content.doctorsList.map((doc) => (
            <div className="doctor-card" key={doc.id}>
              {/* Top Signage / Portrait Display */}
              <div className={`doctor-visual-header header-${doc.theme}`}>
                <div className={`doctor-icon-avatar avatar-${doc.theme}`}>
                  {getIcon(doc.icon)}
                </div>
                <div className={`doctor-signage-tag ${doc.theme === 'navy' ? 'tag-navy' : ''}`}>
                  <span>{doc.signage}</span>
                </div>
              </div>

              <div className="doctor-card-content">
                {/* Doctor Name */}
                <h3 className="doctor-name">{doc.name}</h3>

                {/* Credentials */}
                <div className="doctor-credentials">
                  {doc.credentials.map((cred, i) => (
                    <span key={i} className={`cred-badge cred-${cred.type}`}>{cred.text}</span>
                  ))}
                </div>

                {/* Short Context Description */}
                <p className="doctor-context-desc">
                  {doc.desc}
                </p>

                {/* Specialization Tags */}
                <div className="doctor-tags-row">
                  {doc.tags.map((tag, i) => (
                    <span key={i} className={`spec-tag tag-${doc.theme}`}>{tag}</span>
                  ))}
                </div>

                {/* Card Footer Action */}
                <div className="doctor-action-footer">
                  <button 
                    onClick={() => onOpenBooking && onOpenBooking(doc.actionService)} 
                    className={`btn-doctor-action btn-action-${doc.theme}`}
                  >
                    {doc.actionLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
