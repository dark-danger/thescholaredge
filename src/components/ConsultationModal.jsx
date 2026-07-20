import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import './ConsultationModal.css';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Thesis & Dissertation Support',
    tool: 'SPSS & SmartPLS',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM IST)',
    comments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content consultation-modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-body">
            <div className="modal-success-icon">
              <CheckCircle2 size={54} color="#10B981" />
            </div>
            <h2>Consultation Booked Successfully!</h2>
            <p>
              Thank you <strong>{bookingData.name}</strong>. A senior statistician has been notified of your consultation request for <strong>{bookingData.service}</strong>.
            </p>
            <div className="booking-summary-box">
              <div><strong>Scheduled Preferred Window:</strong> {bookingData.preferredDate || 'Earliest Available'} ({bookingData.preferredTime})</div>
              <div><strong>Contact Number:</strong> {bookingData.phone}</div>
            </div>

            <div className="modal-success-ctas">
              <a
                href={`https://wa.me/918685099555?text=Hi%2C%20I%20just%20booked%20a%20consultation%20for%20${encodeURIComponent(bookingData.service)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp full-width"
              >
                <MessageCircle size={18} /> Chat Directly on WhatsApp (+91-86850 99555)
              </a>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }} 
                className="btn btn-outline-navy full-width mt-2"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-form-body">
            <div className="modal-header-section">
              <span className="badge badge-gold">1-on-1 Mentorship</span>
              <h2>Book Free Academic Consultation</h2>
              <p>Speak directly with our 25+ years experienced statistician team.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-86850 99555"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Required Service</label>
                  <select
                    value={bookingData.service}
                    onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                  >
                    <option value="Thesis & Dissertation Support">Thesis & Dissertation Support</option>
                    <option value="Data Analytics & Software Training">Data Analytics Training</option>
                    <option value="1-on-1 Research Consulting">1-on-1 Research Consulting</option>
                    <option value="Scopus Journal Publication">Scopus / WoS Journal Assistance</option>
                    <option value="Turnitin Plagiarism Reduction">Turnitin Plagiarism Check</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Primary Tool of Interest</label>
                  <select
                    value={bookingData.tool}
                    onChange={(e) => setBookingData({...bookingData, tool: e.target.value})}
                  >
                    <option value="SPSS & SmartPLS">SPSS & SmartPLS / SEM</option>
                    <option value="R & Econometric Modeling">R Studio & Econometrics</option>
                    <option value="Python Data Science">Python & ML</option>
                    <option value="Power BI & Tableau">Power BI & Tableau</option>
                    <option value="Excel & Basic Stats">Excel & Basic Stats</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Consultation Date</label>
                  <input
                    type="date"
                    value={bookingData.preferredDate}
                    onChange={(e) => setBookingData({...bookingData, preferredDate: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time Slot</label>
                  <select
                    value={bookingData.preferredTime}
                    onChange={(e) => setBookingData({...bookingData, preferredTime: e.target.value})}
                  >
                    <option value="Morning (10:00 AM - 1:00 PM IST)">Morning (10:00 AM - 1:00 PM IST)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM IST)">Afternoon (2:00 PM - 5:00 PM IST)</option>
                    <option value="Evening (6:00 PM - 9:00 PM IST)">Evening (6:00 PM - 9:00 PM IST)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Topic / Supervisor Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Share a brief overview of your thesis topic or specific analytical question..."
                  value={bookingData.comments}
                  onChange={(e) => setBookingData({...bookingData, comments: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gold full-width mt-1">
                Confirm & Book Free Session
              </button>

              <div className="modal-trust-footnote">
                <ShieldCheck size={14} color="#10B981" />
                <span>100% Free initial consultation • No obligation • Instant WhatsApp confirmation</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
