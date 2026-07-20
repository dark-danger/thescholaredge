import React, { useState } from 'react';
import { BookOpen, BarChart3, GraduationCap, CheckCircle, ArrowRight, ShieldAlert, MessageCircle } from 'lucide-react';
import './ServicesSection.css';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'thesis', label: 'Thesis & Dissertation' },
    { id: 'training', label: 'Data Analytics Training' },
    { id: 'consulting', label: 'Research Consulting' },
  ];

  const services = [
    {
      category: 'thesis',
      icon: <BookOpen className="service-icon" size={32} />,
      title: 'Thesis & Dissertation Support',
      subtitle: 'End-to-end guidance from preliminary synopsis to final defense.',
      items: [
        'Synopsis & Research Proposal formulation',
        'Systematic Literature Review & Gap Identification',
        'Research Methodology & Questionnaire Design',
        'Primary & Secondary Data Analysis',
        'APA / Harvard / IEEE Academic Formatting',
        'Turnitin Plagiarism Check & Line-by-Line Reduction',
        'Peer-reviewed Journal Article Adaptation'
      ],
      badge: 'Most Popular',
      accentColor: '#1E3E62'
    },
    {
      category: 'training',
      icon: <BarChart3 className="service-icon" size={32} />,
      title: 'Data Analytics & Statistical Training',
      subtitle: 'Master key statistical software tools with practical live hands-on datasets.',
      items: [
        'SPSS: Descriptive, Parametric & Non-Parametric Tests',
        'SmartPLS / PLS-SEM: Structural Equation Modeling',
        'R & RStudio: Advanced Econometrics & Data Viz',
        'Python for Data Science & Predictive Analytics',
        'Advanced MS Excel: Pivot, Formulas & Solver',
        'Power BI & Tableau: Dynamic Business Dashboards'
      ],
      badge: 'Hands-On Training',
      accentColor: '#F59E0B'
    },
    {
      category: 'consulting',
      icon: <GraduationCap className="service-icon" size={32} />,
      title: '1-on-1 Research Consulting',
      subtitle: 'Personalized mentoring by senior statisticians with 25+ years experience.',
      items: [
        'Hypothesis Testing & Analytical Modeling',
        'Sample Size Calculation & Sampling Techniques',
        'Defending Data Results in Front of PhD Committee',
        'Scopus & Web of Science (WoS) Journal Guidance',
        'Data Cleaning & Reliability/Validity Assurance',
        '24/7 Priority Mentorship & Revision Support'
      ],
      badge: 'Expert Faculty',
      accentColor: '#2563EB'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <span className="badge badge-gold">Comprehensive Academic Guidance</span>
          <h2>Tailored Research Services for Scholars & Academicians</h2>
          <p>
            Whether you need step-by-step assistance writing your dissertation proposal, executing complex SEM models, or mastering statistical software, our senior experts deliver unmatched precision.
          </p>

          {/* Category Filter Tabs */}
          <div className="services-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid-3 services-grid">
          {filteredServices.map((service, index) => (
            <div key={index} className="glass-card service-card">
              <div className="service-card-top">
                <div className="service-icon-wrapper" style={{ borderColor: service.accentColor }}>
                  {service.icon}
                </div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>

              <div className="service-divider"></div>

              <ul className="service-checklist">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <a 
                  href={`https://wa.me/918685099555?text=Hi%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-sm full-width"
                >
                  <MessageCircle size={16} />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="guarantee-banner">
          <div className="guarantee-left">
            <div className="shield-badge">
              <ShieldAlert size={28} />
            </div>
            <div>
              <h4>100% Quality & Plagiarism-Free Guarantee</h4>
              <p>Every report comes with a complimentary Turnitin plagiarism report and statistical accuracy verification.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/918685099555?text=Hi%2C%20I%20want%20to%20request%20a%20free%20plagiarism%20or%20data%20audit."
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} /> Chat for Free Audit
          </a>
        </div>

      </div>
    </section>
  );
}
