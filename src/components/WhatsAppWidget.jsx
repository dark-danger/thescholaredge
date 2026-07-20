import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import './WhatsAppWidget.css';

export default function WhatsAppWidget() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="whatsapp-widget-container">
      {tooltipOpen && (
        <div className="whatsapp-tooltip-card">
          <button 
            className="tooltip-close-btn"
            onClick={() => setTooltipOpen(false)}
            aria-label="Close message popover"
          >
            <X size={14} />
          </button>
          
          <div className="tooltip-header">
            <div className="online-indicator"></div>
            <strong>The Scholar Edge Support</strong>
          </div>
          
          <p className="tooltip-text">
            👋 Need instant help with SPSS, SmartPLS, or Thesis guidance? Chat directly on WhatsApp!
          </p>

          <a 
            href="https://wa.me/918685099555?text=Hi!%20I%20visited%20The%20Scholar%20Edge%20website%20and%20want%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noreferrer" 
            className="tooltip-whatsapp-btn"
          >
            <MessageCircle size={16} /> Chat (+91-86850 99555)
          </a>
        </div>
      )}

      <a
        href="https://wa.me/918685099555?text=Hi!%20I%20visited%20The%20Scholar%20Edge%20website%20and%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-btn"
        title="Chat on WhatsApp +91-86850 99555"
      >
        <MessageCircle size={30} color="#FFFFFF" />
        <span className="pulse-ring"></span>
      </a>
    </div>
  );
}
