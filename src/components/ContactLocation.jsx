import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Compass, Clock, Phone, Copy, Check, Car, ShieldCheck } from 'lucide-react';
import './ContactLocation.css';

const DEFAULT_CONTACT_DATA = {
  eyebrow: "LOCATION & ACCESSIBILITY",
  heading: "Visit Our Clinic",
  subheading: "Conveniently located in Sai Nagar, Anantapur with full parking and step-free patient accessibility.",
  mapUrl: "https://maps.google.com/maps?q=Vasundhara%20Diagnostics%20Fetal%20Medicine%20Centre%20Sai%20Nagar%20Anantapur&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Vasundhara+Diagnostics+Fetal+Medicine+Centre+Sai+Nagar+Anantapur",
  reachSteps: [
    { title: "From Anantapur RTC Bus Stand (Approx. 2.0 km)", desc: "Take the main road directly towards Sai Nagar. The clinic is prominently located on the main Sai Nagar double road avenue." },
    { title: "From Anantapur Railway Station (Approx. 2.8 km)", desc: "Head north-east on Station Road towards Sai Nagar main junction. Accessible via auto or taxi in 8–10 minutes." },
    { title: "Key Landmarks", desc: "Located in Sai Nagar, Anantapur. Look for the prominent Vasundhara Diagnostics & Fetal Medicine Centre glow sign boards." }
  ],
  addressCard: {
    title: "Clinic Address",
    subtext: "Vasundhara Diagnostics & Fetal Medicine Centre is easily accessible for patients from all corners of Anantapur District.",
    address: "Sai Nagar, Anantapur, Andhra Pradesh - 515001, India"
  },
  parkingInfo: [
    { label: "Free Parking:", desc: "Spacious vehicle parking directly in front of the clinic building." },
    { label: "Ground Access:", desc: "Dedicated ground floor entrance with step-free patient reception lounge." },
    { label: "Wheelchair Friendly:", desc: "Step-free entry and wheelchair assistance available for expectant mothers." }
  ],
  opd: {
    title: "OPD STATUS",
    hours: "Open Today · 9:00 AM - 8:00 PM",
    liveStatus: "CLINIC OPEN",
    note: "• Fetal Medicine & Diagnostic Imaging Consultations Active"
  },
  phones: [
    { label: "Vasundhara Desk:", number: "79893 30974", link: "7989330974" },
    { label: "Direct Hotline:", number: "+91 93912 51558", link: "+919391251558" }
  ],
  whatsappLink: "https://wa.me/917989330974?text=Hello%20Vasundhara%20Diagnostics,%20I%20would%20like%20to%20inquire%20about%20location%20and%20consultations."
};

export default function ContactLocation({ data }) {
  const [copied, setCopied] = useState(false);
  const content = data || DEFAULT_CONTACT_DATA;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(content.addressCard.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-merged-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="eyebrow">{content.eyebrow}</div>
          <h2 className="section-heading">{content.heading}</h2>
          <p className="section-subheading">
            {content.subheading}
          </p>
        </div>

        <div className="location-grid-layout">
          {/* LEFT COLUMN */}
          <div className="location-col-left">
            <div className="map-card-wrapper">
              <iframe
                title="Location Map"
                src={content.mapUrl}
                width="100%"
                height="340"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href={content.googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-overlay-btn"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="reach-us-card">
              <div className="reach-header">
                <div className="reach-icon-badge">
                  <Compass size={20} />
                </div>
                <h3 className="card-title">How to Reach Us</h3>
              </div>

              <div className="reach-steps-list">
                {content.reachSteps.map((step, idx) => (
                  <div key={idx} className="reach-step-item">
                    <span className="step-num">{idx + 1}</span>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="location-col-right">
            <div className="address-card">
              <div className="address-card-header">
                <div className="address-icon-badge">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="card-title">{content.addressCard.title}</h3>
                  <p className="address-subtext">
                    {content.addressCard.subtext}
                  </p>
                </div>
              </div>

              <div className="address-full-text">
                <strong>{content.addressCard.address}</strong>
              </div>

              <div className="address-actions-row">
                <button onClick={handleCopyAddress} className="btn-copy-address">
                  {copied ? <Check size={14} className="text-teal" /> : <Copy size={14} />}
                  <span>{copied ? "ADDRESS COPIED!" : "COPY ADDRESS"}</span>
                </button>
              </div>

              <a 
                href={content.googleMapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-directions-primary"
              >
                <span>Get Driving Directions</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="parking-access-card">
              <div className="parking-header">
                <Car size={18} className="parking-icon" />
                <h4 className="parking-title">Parking & Accessibility</h4>
              </div>

              <ul className="parking-list">
                {content.parkingInfo.map((info, idx) => (
                  <li key={idx}>
                    <strong>{info.label}</strong> {info.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="opd-dark-card">
              <div className="opd-status-header">
                <div className="opd-title-group">
                  <Clock size={18} className="text-teal" />
                  <div>
                    <span className="opd-label">{content.opd.title}</span>
                    <span className="opd-hours">{content.opd.hours}</span>
                  </div>
                </div>

                <div className="opd-live-badge">
                  <span className="live-dot-green"></span>
                  <span>{content.opd.liveStatus}</span>
                </div>
              </div>

              <p className="opd-alert-note">
                {content.opd.note}
              </p>

              <div className="opd-divider"></div>

              <div className="opd-helpline-group">
                <div className="helpline-title">
                  <Phone size={18} className="text-teal" />
                  <span>DIRECT HELPLINE</span>
                </div>
                <div className="helpline-numbers">
                  {content.phones.map((phone, idx) => (
                    <div key={idx} className="num-row">
                      <span className="num-label">{phone.label}</span>
                      <a href={`tel:${phone.link}`} className="num-value">{phone.number}</a>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={content.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp-full"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.483 1.332 5.001L2 22l5.127-1.341a9.96 9.96 0 0 0 4.881 1.28h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.667-1.04-5.174-2.928-7.06A9.919 9.919 0 0 0 12.012 2zm5.83 14.155c-.247.697-1.428 1.328-1.966 1.393-.503.06-1.157.091-3.666-.948-3.21-1.327-5.267-4.577-5.426-4.79-.159-.214-1.303-1.734-1.303-3.307 0-1.573.824-2.348 1.116-2.669.292-.321.637-.402.849-.402.213 0 .425.003.61.011.196.008.459-.074.718.547.265.636.901 2.2.981 2.361.08.161.133.348.026.562-.106.214-.159.348-.318.535-.159.187-.335.418-.478.562-.159.16-.325.334-.14.651.186.317.828 1.365 1.777 2.21 1.22 1.087 2.247 1.424 2.565 1.584.318.16.504.133.69-.08.186-.213.796-.928 1.008-1.248.213-.32.425-.267.716-.16.292.107 1.856.875 2.174 1.034.318.16.53.24.61.374.08.134.08.777-.167 1.474z"/>
                </svg>
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
