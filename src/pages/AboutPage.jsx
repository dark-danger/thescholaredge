import React from 'react';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="page-wrapper about-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">About The Scholar Edge</span>
          <h1>Empowering Academicians & Researchers for 25+ Years</h1>
          <p>Learn about our journey, statistical expertise, 1-on-1 mentorship philosophy, and academic integrity pledge.</p>
        </div>
      </div>

      <AboutSection />
      
      <div className="container my-5">
        <div className="glass-card p-5">
          <h2 className="mb-3">Frequently Asked Questions About Our Mentorship</h2>
          <div className="faq-grid">
            <div className="faq-box">
              <h4>How do you ensure data confidentiality?</h4>
              <p>All client datasets, thesis drafts, and analytical results are strictly protected under Non-Disclosure Agreements (NDAs). Your data is never shared or reused.</p>
            </div>
            <div className="faq-box">
              <h4>What is your stance on Academic Integrity?</h4>
              <p>We do not write theses on behalf of students. We provide legitimate statistical consulting, software training, empirical calculation, and defense preparation.</p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}
