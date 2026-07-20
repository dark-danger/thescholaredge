import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';

export default function TestimonialsPage() {
  return (
    <div className="page-wrapper testimonials-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Verified Scholar Feedback</span>
          <h1>Student Testimonials & Case Studies</h1>
          <p>Read authentic experiences from PhD scholars and Master's candidates across top global universities.</p>
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}
