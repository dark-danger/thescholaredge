import React from 'react';
import { Award, Clock, HeartHandshake, ShieldCheck, Target, MessageCircle } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const milestones = [
    { number: '25+', label: 'Years Academic Experience', sub: 'Guided 500+ Dissertations' },
    { number: '500+', label: 'PhD & Postgrad Scholars', sub: 'Across 40+ Universities' },
    { number: '99%', label: 'Defense Approval Rate', sub: 'First-time Committee Success' },
    { number: '100%', label: 'Plagiarism-Free Work', sub: 'Verified by Turnitin' }
  ];

  const corePillars = [
    {
      icon: <Award size={24} />,
      title: '25+ Years Statistical Mastery',
      desc: 'Founded and led by an experienced academic statistician with over two decades of quantitative and qualitative research consultation.'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Mentorship',
      desc: 'We understand research stress and tight university submission deadlines. Get prompt answers to your urgent statistical queries.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Academic Rigor',
      desc: 'No shortcut AI text generator. We deliver authentic, empirical statistical analysis tailored specifically to your thesis data.'
    },
    {
      icon: <HeartHandshake size={24} />,
      title: 'Personalized Support',
      desc: 'Every scholar is paired with a domain expert who guides you through supervisor feedback, viva defense, and reviewer comments.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-hero-grid">
          {/* Left: Founder Story & Vision */}
          <div className="about-content">
            <span className="badge badge-gold">About The Scholar Edge</span>
            <h2 className="about-title">
              Empowering Students & Academicians with Knowledge, Tools & Guidance
            </h2>
            
            <p className="about-paragraph">
              <strong>The Scholar Edge</strong> was founded by a senior statistician and academic mentor with <strong>over 25 years of experience</strong> in higher education, empirical research design, and statistical data modeling.
            </p>

            <p className="about-paragraph">
              Navigating a PhD dissertation or Master’s thesis can feel overwhelming — from formulating a clear research gap to defending complex statistical findings before a university committee. We bridge that gap by acting as your trusted co-pilot, equipping you with practical software skills, empirical accuracy, and confident thesis defense preparation.
            </p>

            <div className="mission-box">
              <Target size={24} className="mission-icon" />
              <div>
                <h4>Our Core Mission</h4>
                <p>To demystify statistics, uphold research integrity, and provide accessible, 24/7 expert mentorship so every scholar achieves academic excellence and high-impact publications.</p>
              </div>
            </div>

            <div className="about-actions">
              <a 
                href="https://wa.me/918685099555" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} /> Chat on WhatsApp (+91-86850 99555)
              </a>
              <a 
                href="https://discord.gg" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-discord"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* Right: Milestones Grid */}
          <div className="milestones-wrapper">
            <div className="milestones-card-glow"></div>
            <div className="milestones-card">
              <h3 className="milestones-title">Impact & Academic Reach</h3>
              
              <div className="milestones-grid">
                {milestones.map((m, idx) => (
                  <div key={idx} className="milestone-box">
                    <span className="milestone-num">{m.number}</span>
                    <strong className="milestone-label">{m.label}</strong>
                    <span className="milestone-sub">{m.sub}</span>
                  </div>
                ))}
              </div>

              <div className="universities-trust">
                <span className="uni-title">Scholars Mentored From Top Global Institutions:</span>
                <div className="uni-tags">
                  <span>DU</span>
                  <span>JNU</span>
                  <span>IIT</span>
                  <span>IIM</span>
                  <span>AMU</span>
                  <span>Oxford Alumni</span>
                  <span>Monash</span>
                  <span>Nanyang NTU</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {corePillars.map((pillar, index) => (
            <div key={index} className="glass-card pillar-card">
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
