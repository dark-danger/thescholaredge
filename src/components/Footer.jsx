import React from 'react';
import { BookOpen, MessageCircle, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo" onClick={scrollToTop}>
              <div className="footer-logo-icon">
                <BookOpen size={22} />
              </div>
              <div className="footer-logo-text">
                <span className="brand-name">THE SCHOLAR EDGE</span>
                <span className="brand-sub">EDTECH & RESEARCH CONSULTANCY</span>
              </div>
            </div>
            
            <p className="footer-brand-desc">
              Empowering students, PhD scholars, and academicians with 25+ years of statistical expertise, 1-on-1 thesis mentoring, and hands-on data analytics training.
            </p>

            <div className="footer-trust-badges">
              <span className="badge badge-gold">
                <ShieldCheck size={14} /> 100% Plagiarism-Free
              </span>
              <span className="badge badge-blue">24/7 Dedicated Support</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('services')}>Our Services</button></li>
              <li><button onClick={() => handleNav('tools')}>Tools We Teach</button></li>
              <li><button onClick={() => handleNav('workshops')}>Workshops & Courses</button></li>
              <li><button onClick={() => handleNav('portfolio')}>Work Samples & Portfolio</button></li>
              <li><button onClick={() => handleNav('about')}>About Founder & Mission</button></li>
              <li><button onClick={() => handleNav('testimonials')}>Student Testimonials</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Key Offerings */}
          <div className="footer-col">
            <h4 className="footer-col-title">Key Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNav('services')}>Thesis & Dissertation Support</button></li>
              <li><button onClick={() => handleNav('services')}>SPSS & SmartPLS Data Analysis</button></li>
              <li><button onClick={() => handleNav('services')}>R Studio & Econometrics</button></li>
              <li><button onClick={() => handleNav('services')}>Python Machine Learning</button></li>
              <li><button onClick={() => handleNav('services')}>Systematic Literature Review</button></li>
              <li><button onClick={() => handleNav('services')}>Scopus Journal Assistance</button></li>
              <li><button onClick={() => handleNav('services')}>Turnitin Plagiarism Audit</button></li>
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-contact-list">
              <a 
                href="https://wa.me/918685099555" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-contact-item whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp: +91-86850 99555</span>
              </a>

              <a href="tel:+918685099555" className="footer-contact-item">
                <Phone size={16} />
                <span>Helpline: +91-86850 99555</span>
              </a>

              <a href="mailto:support@thescholaredge.com" className="footer-contact-item">
                <Mail size={16} />
                <span>support@thescholaredge.com</span>
              </a>

              <div className="footer-contact-item address">
                <MapPin size={16} />
                <span>Academic Research Hub, University Rd, New Delhi</span>
              </div>
            </div>

            <div className="footer-social-row">
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="btn btn-discord btn-sm full-width">
                Join Class Discord Server
              </a>
            </div>
          </div>

        </div>

        {/* Policies Row */}
        <div className="footer-policy-row">
          <div className="policy-links">
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Terms of Service</a>
            <span className="dot">•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Refund & Satisfaction Policy</a>
            <span className="dot">•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Academic Integrity Pledge</a>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Credits Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} The Scholar Edge. All Rights Reserved. Empowering Academicians Worldwide.</p>
          <p className="developer-credit">Designed & Developed with <Heart size={14} fill="#F59E0B" color="#F59E0B" /> for Academic Excellence</p>
        </div>

      </div>
    </footer>
  );
}
