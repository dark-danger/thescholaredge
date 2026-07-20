import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Clock, Video, PlayCircle, MessageCircle, Star, Sparkles } from 'lucide-react';
import './Pages.css';

export default function CoursesPage() {
  const [filterTool, setFilterTool] = useState('all');

  const courses = [
    {
      id: 'spss-mastery',
      tool: 'spss',
      title: 'IBM SPSS Statistics for Academic Research & Thesis',
      level: 'Beginner to Advanced',
      duration: '4 Weeks (24 Hours)',
      format: 'Live Online Zoom + Recorded Access',
      rating: 4.9,
      reviewsCount: 142,
      price: 'Live Cohort',
      badge: 'Bestseller',
      syllabus: [
        'Data Cleaning, Missing Value Imputation & Normality Testing',
        'Parametric & Non-Parametric Tests (T-Test, Mann-Whitney, Wilcoxon)',
        'ANOVA, MANOVA & Repeated Measures Analysis',
        'Correlation & Multiple Linear Regression Modeling',
        'Exploratory Factor Analysis (EFA) & Reliability (Cronbach Alpha)',
        'Binary & Multinomial Logistic Regression'
      ]
    },
    {
      id: 'smartpls-bootcamp',
      tool: 'smartpls',
      title: 'SmartPLS 4 & PLS-SEM Structural Equation Modeling',
      level: 'Intermediate to Advanced',
      duration: '3 Weeks (18 Hours)',
      format: 'Live Hands-On Workshop',
      rating: 5.0,
      reviewsCount: 188,
      price: 'Live Cohort',
      badge: 'High Impact Journal Tool',
      syllabus: [
        'Reflective & Formative Measurement Model Assessment (CR, AVE, HTMT)',
        'Structural Model Path Coefficients, Bootstrapping & Blindfolding',
        'Moderation & Mediation Analysis with Process Macro & SmartPLS',
        'Higher-Order Constructs & Multi-Group Analysis (MGA)',
        'PLS-Predict & FIMIX Segmentation',
        'Writing Chapter 4 Data Analysis for Scopus / WoS Journals'
      ]
    },
    {
      id: 'r-econometrics',
      tool: 'r',
      title: 'R & RStudio for Advanced Econometrics & Data Visualization',
      level: 'Intermediate',
      duration: '5 Weeks (30 Hours)',
      format: 'Self-Paced Recorded HD + Live Doubts',
      rating: 4.8,
      reviewsCount: 95,
      price: 'Lifetime Access',
      badge: 'Econometrics Core',
      syllabus: [
        'Data Manipulation with Tidyverse & Dplyr',
        'Publication-Ready Graphics using Ggplot2',
        'Time Series Analysis, ARIMA & GARCH Models',
        'Panel Data Econometrics (Fixed & Random Effects)',
        'RMarkdown for Reproducible Thesis Reports'
      ]
    },
    {
      id: 'python-data-science',
      tool: 'python',
      title: 'Python for Research, NLP & Machine Learning',
      level: 'All Levels',
      duration: '6 Weeks (36 Hours)',
      format: 'Live Interactive Code-Along',
      rating: 4.9,
      reviewsCount: 110,
      price: 'Live Cohort',
      badge: 'Modern Tech Stack',
      syllabus: [
        'Pandas & NumPy for Large Academic Datasets',
        'Scikit-learn Classification, Regression & Clustering',
        'Natural Language Processing (NLP) for Qualitative Thesis Data',
        'Web Scraping Academic Repositories',
        'Matplotlib & Seaborn Advanced Plots'
      ]
    },
    {
      id: 'powerbi-dashboards',
      tool: 'powerbi',
      title: 'Microsoft Power BI Business Intelligence Masterclass',
      level: 'Beginner',
      duration: '2 Weeks (12 Hours)',
      format: 'Recorded Suite',
      rating: 4.7,
      reviewsCount: 76,
      price: 'Self-Paced',
      badge: 'DBA & MBA Favorite',
      syllabus: [
        'DAX Formulas & Measures Creation',
        'Data Modeling & Relationship Management',
        'Interactive Executive Dashboards',
        'Drill-Through Reports for Viva Presentation'
      ]
    }
  ];

  const filteredCourses = filterTool === 'all'
    ? courses
    : courses.filter(c => c.tool === filterTool);

  return (
    <div className="page-wrapper courses-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Structured Learning Programs</span>
          <h1>Data Analytics Courses & Certification Programs</h1>
          <p>Master empirical statistical software with step-by-step guidance from senior research faculty.</p>
          
          <div className="course-filter-buttons mt-4">
            <button className={`filter-chip ${filterTool === 'all' ? 'active' : ''}`} onClick={() => setFilterTool('all')}>All Software</button>
            <button className={`filter-chip ${filterTool === 'spss' ? 'active' : ''}`} onClick={() => setFilterTool('spss')}>IBM SPSS</button>
            <button className={`filter-chip ${filterTool === 'smartpls' ? 'active' : ''}`} onClick={() => setFilterTool('smartpls')}>SmartPLS 4</button>
            <button className={`filter-chip ${filterTool === 'r' ? 'active' : ''}`} onClick={() => setFilterTool('r')}>R Studio</button>
            <button className={`filter-chip ${filterTool === 'python' ? 'active' : ''}`} onClick={() => setFilterTool('python')}>Python</button>
            <button className={`filter-chip ${filterTool === 'powerbi' ? 'active' : ''}`} onClick={() => setFilterTool('powerbi')}>Power BI</button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className="glass-card course-catalog-card">
              <div className="course-card-header">
                <span className="badge badge-gold">{course.badge}</span>
                <div className="course-rating">
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <span>{course.rating} ({course.reviewsCount} scholars)</span>
                </div>
              </div>

              <h3>{course.title}</h3>

              <div className="course-meta-tags">
                <span><Clock size={14} /> {course.duration}</span>
                <span><Video size={14} /> {course.format}</span>
                <span><Sparkles size={14} /> {course.level}</span>
              </div>

              <div className="course-divider"></div>

              <h4>Detailed Curriculum Syllabus:</h4>
              <ul className="course-syllabus-list">
                {course.syllabus.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="course-card-footer">
                <a
                  href={`https://wa.me/918685099555?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp full-width"
                >
                  <MessageCircle size={16} /> Enroll / Inquire via WhatsApp (+91-86850 99555)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
