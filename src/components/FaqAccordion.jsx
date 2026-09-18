import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import './FaqAccordion.css';

const FAQ_DATA = [
  {
    question: "What fetal medicine scans and services are offered at Vasundhara Diagnostics?",
    answer: "Vasundhara Diagnostics & Fetal Medicine Centre provides specialized fetal assessment, pregnancy monitoring ultrasound scans, anomaly scans, and prenatal evaluations, led by Dr. N. Vasundhara (MBBS, MD Radiology, Fellow in Fetal Medicine)."
  },
  {
    question: "Do I need a pre-booked appointment for diagnostic ultrasound scans?",
    answer: "While walk-ins are welcomed, pre-booking an appointment is recommended to minimize waiting time. You can book an appointment online through this website or by calling 79893 30974."
  },
  {
    question: "Who conducts the fetal medicine and ultrasound diagnostic scans?",
    answer: "All fetal medicine consultations and advanced ultrasound diagnostic scans are personally evaluated by Dr. N. Vasundhara, a radiologist with specialized fellowship training in fetal medicine."
  },
  {
    question: "What medical services are available at Sai Kiran Hospital?",
    answer: "Sai Kiran Hospital Medical & Diabetic Center provides general internal medicine consultations, comprehensive diabetes management, and routine medical care under the direction of Dr. V. Sai Kiran Reddy (MBBS, DNB, DFID CMC Vellore)."
  },
  {
    question: "What are the facility consultation hours and location in Sai Nagar, Anantapur?",
    answer: "The facility is located in Sai Nagar, Anantapur, Andhra Pradesh. General consultation and diagnostic services operate Monday through Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 1:00 PM."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="faq-header">
          <div className="eyebrow">
            <Sparkles size={14} /> FAQ
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Find answers to common questions about our diagnostic imaging, fetal medicine, and medical consultation services in Sai Nagar, Anantapur.
          </p>
        </div>

        <div className="faq-accordion-container">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <div className="faq-question-left">
                    <HelpCircle size={18} className="faq-icon" />
                    <h3 className="faq-question">{item.question}</h3>
                  </div>
                  <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
