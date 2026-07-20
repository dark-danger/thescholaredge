import React from 'react';
import PortfolioSection from '../components/PortfolioSection';

export default function PortfolioPage({ onOpenSamplePreview }) {
  return (
    <div className="page-wrapper portfolio-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Empirical Proof of Quality</span>
          <h1>Research Portfolio & Sample Deliverables</h1>
          <p>Explore real anonymized sample outputs, statistical models, literature review matrices, and publication case studies.</p>
        </div>
      </div>

      <PortfolioSection onOpenSamplePreview={onOpenSamplePreview} />
    </div>
  );
}
