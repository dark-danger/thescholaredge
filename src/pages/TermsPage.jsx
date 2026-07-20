import React from 'react';

export default function TermsPage() {
  return (
    <div className="page-wrapper policy-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Terms of Service</span>
          <h1>Terms & Conditions of Mentorship</h1>
          <p>Last updated: July 2026</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="glass-card p-5 policy-card">
          <h2>1. Educational Purpose</h2>
          <p>The Scholar Edge provides educational tutoring, statistical software training, research methodology consulting, and formatting guidance. Our services are intended as academic reference and skill mentorship.</p>

          <h2>2. User Responsibilities</h2>
          <p>Scholars remain the ultimate author of their academic thesis or dissertation. Scholars are responsible for reviewing and verifying all empirical outputs and presenting them to their university committees.</p>

          <h2>3. Intellectual Property</h2>
          <p>All training course materials, recorded modules, and proprietary dataset scripts provided during workshops remain the intellectual property of The Scholar Edge.</p>
        </div>
      </div>
    </div>
  );
}
