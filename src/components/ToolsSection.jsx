import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import './ToolsSection.css';

export default function ToolsSection() {
  const [selectedTool, setSelectedTool] = useState(0);

  const tools = [
    {
      id: 'spss',
      name: 'IBM SPSS Statistics',
      category: 'Statistical Analysis',
      badge: 'Core Academic Tool',
      logo: '📊',
      description: 'The standard statistical package for social sciences, management, psychology, and healthcare research.',
      topics: [
        'Descriptive Statistics & Data Normality Testing',
        'Parametric & Non-Parametric Hypothesis Tests',
        'ANOVA, MANOVA & ANCOVA Models',
        'Multiple Linear & Binary Logistic Regression',
        'Exploratory Factor Analysis (EFA) & Reliability (Cronbach Alpha)',
        'Chi-Square, Correlation & Non-parametric Alternatives'
      ],
      useCase: 'Best for PhD & Master scholars executing survey analysis, clinical trials, and social research.'
    },
    {
      id: 'smartpls',
      name: 'SmartPLS / PLS-SEM',
      category: 'Structural Equation Modeling',
      badge: 'High-Impact Research',
      logo: '📈',
      description: 'Variance-based structural equation modeling software widely required for top Scopus/WoS journal submissions.',
      topics: [
        'Measurement Model Assessment (CR, AVE, HTMT)',
        'Structural Model Path Coefficients & Bootstrapping',
        'Moderation & Mediation Analysis with Process Macro',
        'Higher-Order Constructs & Multi-Group Analysis (MGA)',
        'Blindfolding, Q² Predictive Relevance & PLSPredict',
        'FIMIX-PLS & Segmentation in Complex Frameworks'
      ],
      useCase: 'Essential for Management, Marketing, Information Systems, and Organizational Behavior research.'
    },
    {
      id: 'r',
      name: 'R & RStudio',
      category: 'Statistical Computing',
      badge: 'Advanced Econometrics',
      logo: '🧪',
      description: 'Open-source environment for advanced econometrics, complex data manipulation, and publication-ready graphics.',
      topics: [
        'Data Wrangling with Tidyverse & Dplyr',
        'Publication-Quality Plotting with Ggplot2',
        'Time Series Analysis, ARIMA & GARCH Models',
        'Panel Data Econometrics & Fixed/Random Effects',
        'Survival Analysis & Biostatistics',
        'Automated Reproducible Reports with RMarkdown'
      ],
      useCase: 'Ideal for Economics, Finance, Agricultural Economics, and Data Science researchers.'
    },
    {
      id: 'python',
      name: 'Python for Research',
      category: 'Data Science & ML',
      badge: 'Modern Analytics',
      logo: '🐍',
      description: 'Harness Python for large-scale data harvesting, machine learning, natural language processing, and automated statistical pipelines.',
      topics: [
        'Pandas & NumPy for Large Dataset Manipulation',
        'Scikit-learn Machine Learning Classification & Clustering',
        'NLP & Sentiment Analysis for Qualitative Data',
        'Web Scraping for Academic Data Collection',
        'Matplotlib & Seaborn Data Visualization',
        'Statistical Modeling with Statsmodels'
      ],
      useCase: 'Ideal for Computer Science, Computational Social Science, and AI/ML thesis candidates.'
    },
    {
      id: 'powerbi',
      name: 'Microsoft Power BI',
      category: 'Business Intelligence',
      badge: 'Interactive Dashboards',
      logo: '⚡',
      description: 'Transform complex thesis findings into interactive visual dashboards for committee presentations and corporate sponsors.',
      topics: [
        'DAX (Data Analysis Expressions) Formulas',
        'Data Modeling & Relationship Architectures',
        'Interactive Drill-through Reports & Tooltips',
        'Automated Data Refresh & Gateway Integration',
        'Executive Dashboard Storytelling',
        'Exporting Insights for Dissertation Defense'
      ],
      useCase: 'Perfect for MBA dissertations, executive DBAs, and institutional research presentations.'
    },
    {
      id: 'tableau',
      name: 'Tableau Desktop',
      category: 'Data Visual Analytics',
      badge: 'Visual Storytelling',
      logo: '🎨',
      description: 'Create compelling visual stories, geospatial maps, and high-resolution chart exports for research monographs.',
      topics: [
        'Calculated Fields & Level of Detail (LOD) Expressions',
        'Geospatial Mapping & Spatial Analytics',
        'Trend Lines, Forecasting & Clustering',
        'Dashboard Interactivity & Action Filters',
        'High-DPI Chart Export for Journal Articles',
        'Storyline Creation for Defense Presentation'
      ],
      useCase: 'Used across all disciplines requiring high-impact visual representation of spatial or high-dimensional data.'
    }
  ];

  const activeToolData = tools[selectedTool];

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        
        <div className="section-header dark">
          <span className="badge badge-gold">Analytical Mastery</span>
          <h2>Tools We Teach & Apply in Your Research</h2>
          <p>
            Gain hands-on proficiency in the exact statistical software tools demanded by academic journals, thesis committees, and global research institutions.
          </p>
        </div>

        {/* Tools Interactive Grid */}
        <div className="tools-layout">
          
          {/* Tool Selector Tabs */}
          <div className="tools-selector-list">
            {tools.map((tool, idx) => (
              <div
                key={tool.id}
                className={`tool-selector-card ${selectedTool === idx ? 'active' : ''}`}
                onClick={() => setSelectedTool(idx)}
              >
                <span className="tool-logo">{tool.logo}</span>
                <div className="tool-selector-info">
                  <strong>{tool.name}</strong>
                  <span>{tool.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Tool Detail Showcase */}
          <div className="tool-detail-card">
            <div className="tool-detail-header">
              <div className="tool-header-left">
                <span className="tool-big-logo">{activeToolData.logo}</span>
                <div>
                  <span className="badge badge-gold mb-1">{activeToolData.badge}</span>
                  <h3>{activeToolData.name}</h3>
                  <span className="tool-cat-name">{activeToolData.category}</span>
                </div>
              </div>
            </div>

            <p className="tool-description">{activeToolData.description}</p>

            <div className="tool-usecase-box">
              <Sparkles size={18} className="sparkle-icon" />
              <span><strong>Academic Use Case:</strong> {activeToolData.useCase}</span>
            </div>

            <h4 className="topics-heading">Key Syllabus & Capabilities Covered:</h4>
            <div className="topics-grid">
              {activeToolData.topics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <CheckCircle2 size={16} className="topic-check" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div className="tool-detail-actions">
              <a 
                href={`https://wa.me/918685099555?text=Hi%2C%20I%20want%20to%20learn%20${encodeURIComponent(activeToolData.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp full-width"
              >
                <MessageCircle size={18} /> Enroll / Inquire via WhatsApp (+91-86850 99555)
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
