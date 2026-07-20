import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper policy-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Legal & Data Protection</span>
          <h1>Privacy Policy & Confidentiality Pledge</h1>
          <p>Last updated: July 2026</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="glass-card p-5 policy-card">
          <h2>1. Data Confidentiality & Non-Disclosure</h2>
          <p>At <strong>The Scholar Edge</strong>, we understand the sensitive nature of academic thesis manuscripts, datasets, and intellectual property. All materials uploaded or submitted to us are strictly confidential and governed under automated Non-Disclosure Agreement (NDA) principles.</p>

          <h2>2. Information Collection</h2>
          <p>We collect personal information such as your name, email address, phone/WhatsApp number, and institution details solely for the purpose of communicating regarding your consultation and training enrollment.</p>

          <h2>3. No Third-Party Sharing</h2>
          <p>Your research data, raw dataset files, and questionnaire responses are never shared, sold, or published to third-party databases, repository services, or AI training sets.</p>

          <h2>4. Academic Ethics & Turnitin Safeguards</h2>
          <p>All guidance provided is designed to assist scholars in acquiring genuine analytical skills and empirical precision. We strictly adhere to university academic codes of conduct.</p>
        </div>
      </div>
    </div>
  );
}
