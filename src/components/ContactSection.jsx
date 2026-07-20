import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ShieldCheck, MessageSquare, FileSpreadsheet } from 'lucide-react';
import './ContactSection.css';

// You can set your Google Apps Script Web App URL here or via environment variable VITE_GOOGLE_SHEET_URL
const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || '';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: 'PhD Dissertation',
    toolInterest: 'SPSS & SmartPLS',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Post to Google Sheet if GOOGLE_SHEET_URL is configured
    if (GOOGLE_SHEET_URL) {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            degree: formData.degree,
            toolInterest: formData.toolInterest,
            message: formData.message
          }),
        });
      } catch (error) {
        console.error('Google Sheet submission log:', error);
      }
    }

    // 2. Format WhatsApp text & auto-open chat
    const waText = `Hi, I submitted an inquiry on The Scholar Edge:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Academic Level: ${formData.degree}
• Tool/Topic: ${formData.toolInterest}
• Research Needs: ${formData.message || 'N/A'}`;

    const waUrl = `https://wa.me/918685099555?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info & WhatsApp / Discord CTAs */}
          <div className="contact-info-side">
            <span className="badge badge-gold">Get In Touch</span>
            <h2 className="contact-heading">Let’s Discuss Your Research Goals</h2>
            <p className="contact-sub">
              Have questions about your thesis methodology, data analysis in SPSS/SmartPLS, or workshop schedules? Reach out to our senior academic consultants today.
            </p>

            <div className="contact-cards-list">
              {/* WhatsApp Direct */}
              <a 
                href="https://wa.me/918685099555" 
                target="_blank" 
                rel="noreferrer" 
                className="contact-card whatsapp-highlight"
              >
                <div className="contact-icon-box green">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <strong className="contact-card-title">Instant WhatsApp Chat</strong>
                  <span className="contact-card-value">+91-86850 99555</span>
                  <span className="contact-card-note">Click to message directly • Fast response</span>
                </div>
              </a>

              {/* Phone Direct */}
              <a href="tel:+918685099555" className="contact-card">
                <div className="contact-icon-box blue">
                  <Phone size={24} />
                </div>
                <div>
                  <strong className="contact-card-title">Direct Phone Helpline</strong>
                  <span className="contact-card-value">+91-86850 99555</span>
                  <span className="contact-card-note">Available Mon – Sat, 9:00 AM – 8:00 PM IST</span>
                </div>
              </a>

              {/* Email Direct */}
              <a href="mailto:support@thescholaredge.com" className="contact-card">
                <div className="contact-icon-box gold">
                  <Mail size={24} />
                </div>
                <div>
                  <strong className="contact-card-title">Email Research Desk</strong>
                  <span className="contact-card-value">support@thescholaredge.com</span>
                  <span className="contact-card-note">Response within 2 hours</span>
                </div>
              </a>

              {/* Office Address */}
              <div className="contact-card">
                <div className="contact-icon-box slate">
                  <MapPin size={24} />
                </div>
                <div>
                  <strong className="contact-card-title">Consultancy Office</strong>
                  <span className="contact-card-value">Academic Research Hub, University Road</span>
                  <span className="contact-card-note">New Delhi & Online Worldwide</span>
                </div>
              </div>
            </div>

            {/* Discord Server Box */}
            <div className="contact-discord-card">
              <div className="discord-card-left">
                <MessageSquare size={26} className="discord-icon" />
                <div>
                  <strong>Active Discord Community</strong>
                  <span>Join 1,200+ scholars in real-time Q&A</span>
                </div>
              </div>
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-discord btn-sm"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="contact-form-side">
            <div className="form-glass-card">
              
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <CheckCircle2 size={48} color="#10B981" />
                  </div>
                  <h3>Consultation Request Received!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your details have been logged to our Google Sheet database and sent to our WhatsApp desk (<strong>+91-86850 99555</strong>).
                  </p>
                  <div className="success-actions">
                    <a 
                      href={`https://wa.me/918685099555?text=${encodeURIComponent(`Hi, I submitted an inquiry:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Goal: ${formData.degree}`)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-whatsapp full-width"
                    >
                      <MessageCircle size={18} /> Open WhatsApp Chat Again
                    </a>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-navy full-width mt-2"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="actual-contact-form">
                  <div className="form-header">
                    <h3>Book Your Free Initial Consultation</h3>
                    <p>Receive an expert preliminary data audit & project quotation within 2 hours.</p>
                  </div>

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Dr. Ramesh Kumar / Ms. Anjali Sharma" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="scholar@university.edu" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>WhatsApp / Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Academic Level / Goal</label>
                      <select 
                        value={formData.degree}
                        onChange={(e) => setFormData({...formData, degree: e.target.value})}
                      >
                        <option value="PhD Dissertation">PhD Dissertation</option>
                        <option value="Master Thesis / M.Phil">Master's Thesis / M.Phil</option>
                        <option value="MBA / Postgrad Project">MBA / Executive DBA</option>
                        <option value="Scopus Journal Article">Scopus / WoS Journal Article</option>
                        <option value="Software Workshop">Software Training Course</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Primary Tool / Topic</label>
                      <select 
                        value={formData.toolInterest}
                        onChange={(e) => setFormData({...formData, toolInterest: e.target.value})}
                      >
                        <option value="SPSS & SmartPLS">SPSS & SmartPLS / SEM</option>
                        <option value="R & Econometrics">R Studio & Econometrics</option>
                        <option value="Python & ML">Python Data Science</option>
                        <option value="Power BI / Tableau">Power BI / Tableau</option>
                        <option value="Literature Review">Literature Review & PRISMA</option>
                        <option value="Turnitin Plagiarism">Turnitin Plagiarism Check</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Describe Your Research Needs & Timeline</label>
                    <textarea 
                      rows="3" 
                      placeholder="Mention your university, research topic, current status, or target submission deadline..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-whatsapp full-width submit-btn"
                    disabled={isSubmitting}
                  >
                    <FileSpreadsheet size={18} />
                    <span>{isSubmitting ? 'Saving to Google Sheet...' : 'Submit & Connect on WhatsApp (+91-86850 99555)'}</span>
                  </button>

                  <div className="form-footer-note">
                    <ShieldCheck size={14} color="#10B981" />
                    <span>Your research data & contact details remain 100% confidential.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
