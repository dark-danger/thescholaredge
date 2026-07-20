import React from 'react';
import { X, FileText, CheckCircle2, MessageCircle } from 'lucide-react';
import './SamplePreviewModal.css';

export default function SamplePreviewModal({ sample, onClose }) {
  if (!sample) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content sample-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Sample Preview">
          <X size={20} />
        </button>

        <div className="sample-modal-header">
          <div className="sample-header-top">
            <span className="badge badge-gold">{sample.category}</span>
            <span className="sample-domain-tag">Domain: {sample.domain}</span>
          </div>
          <h2>{sample.title}</h2>
          <span className="journal-target">🎯 Target / Published In: {sample.journal}</span>
        </div>

        <div className="sample-modal-body">
          <div className="sample-section-box">
            <h4>Abstract & Objective</h4>
            <p>{sample.abstract}</p>
          </div>

          <div className="sample-section-box highlight-box">
            <h4>Sample Output Snapshot & Statistical Rigor</h4>
            <div className="sample-metrics-grid">
              <div className="metric-card">
                <strong>Methodology</strong>
                <span>{sample.previewContent?.methodology}</span>
              </div>
              <div className="metric-card">
                <strong>Key Statistical Result</strong>
                <span>{sample.previewContent?.tableSample}</span>
              </div>
            </div>
          </div>

          <div className="sample-section-box">
            <h4>Quality Deliverables Included:</h4>
            <ul className="sample-checklist">
              {sample.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sample-modal-footer">
          <div className="footer-deliverable-info">
            <FileText size={16} />
            <span>{sample.deliverables}</span>
          </div>
          
          <div className="footer-actions">
            <a
              href={`https://wa.me/918685099555?text=Hi%2C%20I%20saw%20your%20sample%20work%20on%20${encodeURIComponent(sample.title)}%20and%20want%20similar%20guidance.`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp full-width"
            >
              <MessageCircle size={16} /> Request Full Sample PDF via WhatsApp (+91-86850 99555)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
