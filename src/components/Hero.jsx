import React from 'react';
import { Award, BookOpen, CheckCircle2, ShieldCheck, Star, Users, ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="container hero-container">
        
        {/* Left Column: Headline & Action */}
        <div className="hero-content">
          <div className="badge badge-gold hero-badge">
            <Sparkles size={15} />
            <span>Empowering Researchers for 25+ Years</span>
          </div>

          <h1 className="hero-title">
            Master Data Analytics Tools | <span className="highlight-gold">End-to-End Thesis</span> & Journal Publication Support
          </h1>

          <p className="hero-subtitle">
            Get personalized 1-on-1 expert guidance for PhD, M.Phil., and Postgrad research. From proposal defense and literature review to SPSS/SmartPLS data analysis and peer-reviewed journal publishing.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a 
              href="https://wa.me/918685099555" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-whatsapp hero-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Chat (+91-86850 99555)</span>
            </a>

            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-discord hero-btn"
            >
              <span>Join Our Discord</span>
            </a>

            <button
              onClick={scrollToServices}
              className="btn btn-outline-gold hero-btn"
            >
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>24/7 Expert Mentorship</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>100% Plagiarism-Free</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Data Confidentiality</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>On-Time Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Card Showcase */}
        <div className="hero-visual">
          <div className="hero-card-glow"></div>
          <div className="hero-glass-card">
            
            <div className="card-header">
              <div className="card-badge">
                <Clock size={14} /> Live Support Active
              </div>
              <div className="card-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span>4.9/5 (280+ Reviews)</span>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Comprehensive Scholar Support Hub</h3>
              <p className="card-desc">Your end-to-end roadmap from raw topic selection to indexing in Scopus / Web of Science.</p>
              
              <div className="process-mini-timeline">
                <div className="timeline-step done">
                  <div className="step-num">1</div>
                  <div className="step-info">
                    <strong>Topic & Synopsis Approval</strong>
                    <span>Literature Gap & Problem Formulation</span>
                  </div>
                </div>
                
                <div className="timeline-step active">
                  <div className="step-num">2</div>
                  <div className="step-info">
                    <strong>Data Analytics & Modeling</strong>
                    <span>SPSS, SmartPLS, R, Python & Power BI</span>
                  </div>
                </div>

                <div className="timeline-step">
                  <div className="step-num">3</div>
                  <div className="step-info">
                    <strong>Thesis Defense & Publication</strong>
                    <span>Formatting, Turnitin Report & Journal Submission</span>
                  </div>
                </div>
              </div>

              <div className="tools-preview-row">
                <span className="tools-label">Tools Expertise:</span>
                <div className="tools-tags">
                  <span className="tool-chip">SPSS</span>
                  <span className="tool-chip">SmartPLS</span>
                  <span className="tool-chip">R Studio</span>
                  <span className="tool-chip">Python</span>
                  <span className="tool-chip">Power BI</span>
                  <span className="tool-chip">Tableau</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="consultant-info">
                <div className="avatar">
                  <Award size={20} color="#0B192C" />
                </div>
                <div>
                  <strong>Senior Statistician Lead</strong>
                  <span>25+ Yrs Academic Experience</span>
                </div>
              </div>
              <a 
                href="https://wa.me/918685099555"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={15} /> Instant Chat
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
