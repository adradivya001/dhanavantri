import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import './WhyVasundharaReviews.css';

const REVIEWS_DATA = [
  {
    name: "Lalitha M.",
    tag: "Fetal Ultrasound Scan",
    date: "Verified Visit",
    comment: "Very polite staff and clear diagnostic imaging experience. Dr. Vasundhara explained the scan process comfortably."
  },
  {
    name: "Rajesh & Swathi K.",
    tag: "Pregnancy Monitoring",
    date: "Verified Visit",
    comment: "Pristine clinical environment in Sai Nagar. Prompt appointment management and professional fetal assessment."
  },
  {
    name: "Sowmya P.",
    tag: "Diagnostic Care",
    date: "Verified Visit",
    comment: "Very clean diagnostic centre with patient-focused attention. Reliable reporting and easy location accessibility."
  }
];

export default function WhyVasundharaReviews() {
  return (
    <section id="reviews" className="why-reviews-section section-padding">
      <div className="container">
        {/* Reviews Section Header */}
        <div className="reviews-header-block">
          <div className="eyebrow">PATIENT EXPERIENCES</div>
          <h2 className="section-heading">What Our Patients Say</h2>
          <p className="section-subheading">
            Real experiences from patients who have visited our facility in Sai Nagar, Anantapur.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-wrapper">
          <div className="reviews-top-bar">
            <div className="reviews-title-wrap">
              <MessageSquare size={20} className="reviews-header-icon" />
              <h3 className="reviews-heading">Patient Feedback</h3>
            </div>
            <div className="google-review-badge">
              <span className="google-g">G</span>
              <span className="badge-text">Google Reviews Indicator</span>
            </div>
          </div>

          <div className="reviews-grid">
            {REVIEWS_DATA.map((rev, idx) => (
              <div key={idx} className="review-card">
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                </div>
                <p className="review-comment">"{rev.comment}"</p>
                <div className="review-meta">
                  <div className="avatar-circle">{rev.name.charAt(0)}</div>
                  <div className="meta-text">
                    <span className="patient-name">{rev.name}</span>
                    <span className="patient-tag">{rev.tag} • {rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
