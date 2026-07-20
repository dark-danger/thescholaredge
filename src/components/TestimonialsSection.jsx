import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, GraduationCap, MessageCircle } from 'lucide-react';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Ananya Sharma',
      role: 'PhD Scholar, Management Studies',
      university: 'Delhi University (DU)',
      rating: 5,
      title: 'Expert Guidance That Transformed My Thesis Defense!',
      quote: 'I was struggling to justify my SmartPLS structural equation model to my doctoral committee. The Scholar Edge team analyzed my dataset within 3 days, provided step-by-step interpretation, and conducted a mock viva defense. My dissertation was accepted with zero statistical revisions!',
      tag: 'SmartPLS & Viva Guidance'
    },
    {
      name: 'Prof. Rajesh K. Varma',
      role: 'Associate Professor & Research Mentor',
      university: 'Panjab University',
      rating: 5,
      title: 'Unmatched Statistical Rigor & 25+ Years Experience Shows!',
      quote: 'As an academic supervisor, I frequently refer my scholars to The Scholar Edge for advanced SPSS and R training. Their personal 1-on-1 focus and 100% adherence to academic ethics make them stand far above typical commercial agencies.',
      tag: 'Faculty Endorsement'
    },
    {
      name: 'Priya Mukherjee',
      role: 'MBA Postgrad Student',
      university: 'Management Development Institute (MDI)',
      rating: 5,
      title: 'From Confusion to Scopus Publication in 4 Months',
      quote: 'They didn’t just execute the regression analysis — they taught me how to interpret every coefficient in SPSS. Thanks to their journal guidance, my final year dissertation chapter was adapted and published in a Scopus Q2 indexed journal.',
      tag: 'Scopus Publication'
    },
    {
      name: 'Dr. Vikramaditya Singh',
      role: 'PhD Researcher, Economics',
      university: 'Jawaharlal Nehru University (JNU)',
      rating: 5,
      title: '24/7 Support When Deadlines Were Tight',
      quote: 'When my supervisor asked for a complete revision of Chapter 4 multivariate analysis 10 days before submission, The Scholar Edge team worked around the clock on WhatsApp and Zoom to help me hit the deadline. Absolute lifesavers!',
      tag: '24/7 Priority Mentorship'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        
        <div className="section-header">
          <span className="badge badge-gold">Scholar Success Stories</span>
          <h2>Trusted by PhD Candidates & Academicians</h2>
          <p>
            Read authentic reviews from researchers who achieved dissertation defense approvals and high-impact journal publications with our guidance.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonial-carousel">
          <button 
            className="carousel-control prev" 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-active-card">
            <div className="quote-badge">
              <Quote size={36} className="quote-icon" />
            </div>

            <div className="rating-stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            <h3 className="testimonial-headline">"{current.title}"</h3>
            <p className="testimonial-quote">{current.quote}</p>

            <div className="testimonial-footer">
              <div className="author-details">
                <div className="author-avatar">
                  <GraduationCap size={24} color="#0B192C" />
                </div>
                <div>
                  <strong className="author-name">{current.name}</strong>
                  <span className="author-role">{current.role} • {current.university}</span>
                </div>
              </div>
              <span className="service-tag-pill">{current.tag}</span>
            </div>
          </div>

          <button 
            className="carousel-control next" 
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Callout */}
        <div className="testimonials-bottom-cta">
          <span>Ready to join 500+ successful PhD & Postgrad scholars?</span>
          <a 
            href="https://wa.me/918685099555"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} /> Chat on WhatsApp (+91-86850 99555)
          </a>
        </div>

      </div>
    </section>
  );
}
