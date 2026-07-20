import React, { useState } from 'react';
import { Eye, FileText, CheckCircle, ExternalLink, Award, Sparkles, Filter, Download } from 'lucide-react';
import './PortfolioSection.css';

export default function PortfolioSection({ onOpenSamplePreview }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Empirical Study: SmartPLS 4 Moderated-Mediation Model',
      category: 'SmartPLS / SEM',
      domain: 'Management & Marketing',
      journal: 'Targeted for Scopus Q1 Journal',
      deliverables: 'Chapter 4 (Data Analysis) + SmartPLS 4 Workspace + Path Diagrams',
      abstract: 'Investigated consumer green purchasing behavior across 450 respondents using PLS-SEM with 5 latent constructs, 2 moderators, and bootstrap 5000 resampling.',
      highlights: [
        'HTMT Discriminant Validity Confirmed (< 0.85)',
        'f² Effect Sizes & q² Predictive Relevance Included',
        'Turnitin Similarity Score: 2%'
      ],
      previewContent: {
        tableSample: 'Construct Reliability: Cronbach Alpha > 0.84, AVE > 0.62',
        methodology: 'Partial Least Squares SEM with SmartPLS v4.0.9'
      }
    },
    {
      id: 2,
      title: 'Systematic Literature Review (SLR) & PRISMA Diagram',
      category: 'Literature Review',
      domain: 'Healthcare & Public Health',
      journal: 'Web of Science (WoS) Indexed',
      deliverables: '50+ Empirical Articles Synthesized + PRISMA Flow Chart + Research Gap Matrix',
      abstract: 'A comprehensive systematic review analyzing digital health adoption in post-pandemic primary care, mapping key theoretical frameworks across 2018–2025.',
      highlights: [
        'PRISMA 2020 Protocol Compliant',
        'Bibliometric Analysis using VOSviewer & R Bibliometrix',
        'Structured Synthesis Matrix for Thesis Chapter 2'
      ],
      previewContent: {
        tableSample: 'Synthesized 54 High-Impact Studies across PubMed & Scopus',
        methodology: 'PRISMA 2020 Systematic Review Framework'
      }
    },
    {
      id: 3,
      title: 'SPSS Multi-Stage Regression & ANOVA Analysis',
      category: 'SPSS Analysis',
      domain: 'Financial Economics',
      journal: 'PhD Thesis Dissertation Chapter 4',
      deliverables: 'SPSS Output (.spv) + Cleaned Dataset (.sav) + Formatted APA Chapter',
      abstract: 'Evaluated corporate governance indicators on financial performance across 120 listed firms over 7 fiscal years using hierarchical multiple regression and ANOVA.',
      highlights: [
        'Multicollinearity Checked via VIF (< 2.5)',
        'Homoscedasticity & Residual Normality Confirmed',
        'APA 7th Edition Tables & Interpretations'
      ],
      previewContent: {
        tableSample: 'R² = 0.684, F(5, 114) = 49.32, p < 0.001',
        methodology: 'Hierarchical Multiple Regression in IBM SPSS 29'
      }
    },
    {
      id: 4,
      title: 'Python Natural Language Processing & Sentiment Analysis',
      category: 'Python / ML',
      domain: 'Computational Social Science',
      journal: 'IEEE Conference Publication',
      deliverables: 'Jupyter Notebook (.ipynb) + Cleaned Corpus + Sentiment Scores CSV',
      abstract: 'Extracted and analyzed 25,000 online student reviews using Python VADER and Latent Dirichlet Allocation (LDA) topic modeling for educational feedback analysis.',
      highlights: [
        'VADER & TextBlob Sentiment Classification',
        'LDA Topic Modeling with 8 Dominant Themes',
        'High-Resolution Seaborn Visualizations'
      ],
      previewContent: {
        tableSample: 'Coherence Score (C_v) = 0.612 for 8 Topic Clusters',
        methodology: 'Python 3.11 with NLTK, Gensim & Scikit-Learn'
      }
    },
    {
      id: 5,
      title: 'R Studio Time Series & Econometric Modeling',
      category: 'R Analytics',
      domain: 'Applied Economics',
      journal: 'International Journal of Finance',
      deliverables: 'R Scripts (.R) + Stationarity & Cointegration Tests + Impulse Response Plots',
      abstract: 'Applied ARDL bounds testing and Vector Error Correction Model (VECM) to analyze macroeconomic shocks on exchange rate volatility.',
      highlights: [
        'Augmented Dickey-Fuller (ADF) Stationarity Verified',
        'Johansen Cointegration Test Executed',
        'Interactive ggplot2 Publication Graphs'
      ],
      previewContent: {
        tableSample: 'ARDL Bounds F-Statistic = 8.74 (Exceeds I(1) critical bound)',
        methodology: 'RStudio with vars, urca & ggplot2 packages'
      }
    },
    {
      id: 6,
      title: 'Scopus / WoS Peer-Review Manuscript Formatting',
      category: 'Journal Publishing',
      domain: 'Multidisciplinary',
      journal: 'Elsevier / Springer / Taylor & Francis',
      deliverables: 'Main Manuscript + Cover Letter + Response to Reviewer Matrix',
      abstract: 'Re-structured a raw PhD thesis chapter into a tight 7,000-word journal manuscript conforming strictly to author guidelines and peer review standards.',
      highlights: [
        'Strict Formatting to Target Journal Guidelines',
        'Turnitin Similarity Reduced to < 5%',
        'Comprehensive Response to Reviewer Comments'
      ],
      previewContent: {
        tableSample: 'Complete Citation & Reference Audit (APA / IEEE)',
        methodology: 'Peer-Reviewed Manuscript Refinement Protocol'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Samples' },
    { id: 'SmartPLS / SEM', label: 'SmartPLS / SEM' },
    { id: 'SPSS Analysis', label: 'SPSS Analysis' },
    { id: 'Literature Review', label: 'Literature Review' },
    { id: 'Python / ML', label: 'Python / ML' },
    { id: 'R Analytics', label: 'R Analytics' },
    { id: 'Journal Publishing', label: 'Journal Formatting' }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        
        <div className="section-header">
          <span className="badge badge-gold">Demonstrated Expertise</span>
          <h2>Our Work Samples & Case Studies</h2>
          <p>
            Explore real sample analytical outputs, literature reviews, and empirical models delivered to PhD scholars and research authors across top global universities.
          </p>

          <div className="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-chip ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid-3 portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="glass-card portfolio-card">
              <div className="portfolio-card-top">
                <span className="domain-pill">{item.domain}</span>
                <span className="badge badge-blue">{item.category}</span>
              </div>

              <h3 className="portfolio-title">{item.title}</h3>
              <span className="journal-tag">🎯 {item.journal}</span>

              <p className="portfolio-abstract">{item.abstract}</p>

              <div className="portfolio-highlights">
                {item.highlights.map((h, hidx) => (
                  <div key={hidx} className="highlight-line">
                    <CheckCircle size={15} className="highlight-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="portfolio-card-footer">
                <div className="deliverable-text">
                  <FileText size={14} />
                  <span>{item.deliverables}</span>
                </div>
                <button
                  onClick={() => onOpenSamplePreview(item)}
                  className="btn btn-navy btn-sm full-width mt-3"
                >
                  <Eye size={16} /> View Sample Preview & Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
