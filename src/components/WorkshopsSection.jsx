import React, { useState } from 'react';
import { Video, PlayCircle, Calendar, Clock, Users, ArrowRight, CheckCircle2, MessageSquare, MessageCircle } from 'lucide-react';
import './WorkshopsSection.css';

export default function WorkshopsSection() {
  const [activeFormat, setActiveFormat] = useState('all');

  const workshops = [
    {
      title: 'Masterclass: Structural Equation Modeling with SmartPLS 4',
      format: 'live',
      duration: '4-Week Intensive Bootcamp',
      timing: 'Weekend Batches (Sat & Sun)',
      mode: 'Interactive Live Zoom + Session Recordings',
      level: 'Intermediate to Advanced',
      features: [
        'Hands-on execution of PLS-SEM algorithm on real publication datasets',
        'Assessment of reflective and formative measurement models',
        'Mediation & Moderation testing with Process Macro & SmartPLS',
        'Direct guidance on drafting Chapter 4 (Results & Discussion)',
        'Full certificate of completion & 1-on-1 Q&A window'
      ],
      price: 'Live Online Cohort',
      badge: 'Bestseller Workshop'
    },
    {
      title: 'SPSS & Advanced Parametric/Non-Parametric Analysis',
      format: 'live',
      duration: '3-Week Practical Series',
      timing: 'Evening Batches (Mon, Wed, Fri)',
      mode: 'Live Hands-On Exercises + Real Data Files',
      level: 'Beginner to Intermediate',
      features: [
        'Data cleaning, missing value imputation & normality checks',
        'ANOVA, Repeated Measures, MANOVA & ANCOVA',
        'Multiple Regression & Diagnostic Tests (VIF, Durbin-Watson)',
        'Exploratory Factor Analysis (EFA) step-by-step',
        'Interpretation of SPSS output tables for thesis inclusion'
      ],
      price: 'Live Online Cohort',
      badge: 'Essential for PhD Scholars'
    },
    {
      title: 'Self-Paced Master Suite: R & Python for Econometrics & Research',
      format: 'recorded',
      duration: '40+ Hours HD Video Modules',
      timing: 'Lifetime Unlimited Access 24/7',
      mode: 'Recorded HD Modules + Code Notebooks',
      level: 'All Levels Supported',
      features: [
        'Step-by-step RStudio & Jupyter Notebook walkthroughs',
        'Downloadable data clean-up scripts & RMarkdown templates',
        'Time series, GARCH, Panel Data & Machine Learning',
        'Dedicated Discord channel access for instructor doubt clearing',
        'Free update guarantee for all new curriculum modules'
      ],
      price: 'Instant Recorded Access',
      badge: 'Lifetime Access'
    }
  ];

  const filtered = activeFormat === 'all' 
    ? workshops 
    : workshops.filter(w => w.format === activeFormat);

  return (
    <section id="workshops" className="workshops-section">
      <div className="container">
        
        <div className="section-header">
          <span className="badge badge-blue">Interactive Online Learning</span>
          <h2>Workshops & Certification Courses</h2>
          <p>
            Learn directly from seasoned research statisticians. Choose between **Live Online Cohorts** with real-time Q&A or **Self-Paced Recorded Modules** with lifetime access.
          </p>

          <div className="format-toggle-buttons">
            <button
              className={`format-btn ${activeFormat === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFormat('all')}
            >
              All Formats
            </button>
            <button
              className={`format-btn ${activeFormat === 'live' ? 'active' : ''}`}
              onClick={() => setActiveFormat('live')}
            >
              <Video size={16} /> Live Online Classes
            </button>
            <button
              className={`format-btn ${activeFormat === 'recorded' ? 'active' : ''}`}
              onClick={() => setActiveFormat('recorded')}
            >
              <PlayCircle size={16} /> Self-Paced Recorded Modules
            </button>
          </div>
        </div>

        {/* Workshops Cards */}
        <div className="grid-3 workshops-grid">
          {filtered.map((item, idx) => (
            <div key={idx} className="glass-card workshop-card">
              <div className="workshop-card-header">
                <span className="badge badge-gold">{item.badge}</span>
                <span className="format-pill">
                  {item.format === 'live' ? <Video size={14} /> : <PlayCircle size={14} />}
                  {item.format === 'live' ? 'Live Online' : 'Self-Paced'}
                </span>
              </div>

              <h3 className="workshop-title">{item.title}</h3>

              <div className="workshop-meta-list">
                <div className="meta-item">
                  <Calendar size={15} />
                  <span>{item.duration}</span>
                </div>
                <div className="meta-item">
                  <Clock size={15} />
                  <span>{item.timing}</span>
                </div>
                <div className="meta-item">
                  <Users size={15} />
                  <span>Level: {item.level}</span>
                </div>
              </div>

              <div className="workshop-divider"></div>

              <h4 className="curriculum-heading">What You Will Learn:</h4>
              <ul className="workshop-features">
                {item.features.map((feat, fidx) => (
                  <li key={fidx}>
                    <CheckCircle2 size={16} className="feat-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="workshop-card-footer">
                <a 
                  href={`https://wa.me/918685099555?text=Hi%2C%20I%20want%20to%20register%20for%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp full-width mb-2"
                >
                  <MessageCircle size={16} /> Register via WhatsApp
                </a>
                <a 
                  href="https://discord.gg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-discord btn-sm full-width"
                >
                  <MessageSquare size={15} /> Join Class Discord Server
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Discord Community Callout Box */}
        <div className="discord-community-banner">
          <div className="discord-banner-content">
            <div className="discord-logo-box">
              <MessageSquare size={36} color="#FFFFFF" />
            </div>
            <div>
              <h3>Join The Scholar Edge Discord Community</h3>
              <p>
                Connect with 1,200+ PhD scholars, master’s candidates, and empirical researchers. Ask analytical questions, exchange research datasets, and get daily statistical tips.
              </p>
            </div>
          </div>
          <a 
            href="https://discord.gg" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-discord btn-lg"
          >
            <span>Join Our Server Now</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
