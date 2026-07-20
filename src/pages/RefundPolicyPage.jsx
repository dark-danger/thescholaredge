import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="page-wrapper policy-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Scholar Satisfaction</span>
          <h1>Refund & Quality Satisfaction Policy</h1>
          <p>Last updated: July 2026</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="glass-card p-5 policy-card">
          <h2>1. Satisfaction Guarantee</h2>
          <p>We are committed to delivering 100% accurate statistical outputs and educational mentorship. If any statistical calculation or model requires modification per supervisor feedback, we re-run diagnostics free of charge during the active mentorship window.</p>

          <h2>2. Workshop Cancellation & Refund</h2>
          <p>For live online workshops, scholars can request a full refund up to 48 hours before the cohort start date. For recorded masterclasses, refunds are evaluated if technical access issues cannot be resolved.</p>
        </div>
      </div>
    </div>
  );
}
