import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, MessageCircle } from 'lucide-react';
import './BlogSection.css';

export default function BlogSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const articles = [
    {
      title: 'How to Choose Between SPSS and SmartPLS for Your Thesis Data Analysis',
      category: 'Statistical Software',
      date: 'July 2026',
      readTime: '6 min read',
      excerpt: 'Understand when covariance-based SEM vs PLS-SEM is required by your thesis reviewers, sample size constraints, and non-normal data handling.'
    },
    {
      title: 'Top 7 Literature Review Mistakes PhD Candidates Make (And How to Fix Them)',
      category: 'Research Methodology',
      date: 'June 2026',
      readTime: '8 min read',
      excerpt: 'Learn how to transition from a descriptive summary to a critical synthesis matrix using PRISMA guidelines and literature gap framing.'
    },
    {
      title: 'A Step-by-Step Guide to Reducing Turnitin Plagiarism Scores Below 10%',
      category: 'Academic Ethics',
      date: 'May 2026',
      readTime: '5 min read',
      excerpt: 'Ethical paraphrasing methods, handling formula matches, reference list exclusion rules, and avoiding common similarity traps.'
    }
  ];

  const faqs = [
    {
      q: 'Do I need prior programming or statistical background for the training courses?',
      a: 'Not at all! Our courses in SPSS, SmartPLS, R, and Python start from foundational concepts and build up to advanced empirical estimation using real hands-on academic datasets.'
    },
    {
      q: 'How does the 1-on-1 thesis support work?',
      a: 'We pair you directly with a senior statistician with 25+ years experience. We review your research objective, guide your data collection/cleaning, run appropriate tests, and teach you how to defend the output before your university committee.'
    },
    {
      q: 'What is your Turnitin Plagiarism policy?',
      a: 'We guarantee 100% original academic assistance. All literature reviews and analytical chapters are checked via Turnitin, and a formal similarity report is provided with zero tolerance for plagiarism.'
    },
    {
      q: 'How fast can you assist with urgent data analysis deadlines?',
      a: 'We offer expedited 24/7 dedicated support for tight university submission windows. Initial data audits and analysis can often be delivered in as few as 48–72 hours.'
    },
    {
      q: 'Can you help with Scopus and Web of Science (WoS) journal revisions?',
      a: 'Yes. We assist in addressing peer reviewer comments, re-running statistical diagnostics, and formatting manuscripts to match specific journal style guidelines.'
    }
  ];

  return (
    <section id="resources" className="resources-section">
      <div className="container">
        
        <div className="section-header">
          <span className="badge badge-blue">Knowledge Hub & FAQs</span>
          <h2>Research Guides, Tips & Frequently Asked Questions</h2>
          <p>
            Free academic insights to accelerate your thesis writing, statistical choices, and publication strategy.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid-3 articles-grid">
          {articles.map((art, idx) => (
            <div key={idx} className="glass-card article-card">
              <div className="article-top">
                <span className="badge badge-gold">{art.category}</span>
                <span className="read-time">{art.readTime}</span>
              </div>
              <h3 className="article-title">{art.title}</h3>
              <p className="article-excerpt">{art.excerpt}</p>
              <div className="article-footer">
                <span className="art-date">{art.date}</span>
                <a 
                  href={`https://wa.me/918685099555?text=Hi%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(art.title)}%20and%20want%20more%20details.`}
                  target="_blank"
                  rel="noreferrer"
                  className="read-more-link"
                >
                  <span>Inquire via WhatsApp</span>
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="faq-wrapper">
          <div className="faq-header">
            <HelpCircle size={28} className="faq-icon-title" />
            <div>
              <h3>Frequently Asked Questions</h3>
              <p>Everything you need to know about working with The Scholar Edge.</p>
            </div>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <strong>{faq.q}</strong>
                  <button className="faq-toggle">
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
