import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ToolsSection from './components/ToolsSection';
import WorkshopsSection from './components/WorkshopsSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SamplePreviewModal from './components/SamplePreviewModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSample, setSelectedSample] = useState(null);

  const handleOpenSamplePreview = (sample) => {
    setSelectedSample(sample);
  };

  const handleCloseSamplePreview = () => {
    setSelectedSample(null);
  };

  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero Banner Section */}
      <Hero />

      {/* Services Categories */}
      <ServicesSection />

      {/* Tools We Teach Showcase */}
      <ToolsSection />

      {/* Workshops & Courses */}
      <WorkshopsSection />

      {/* Work Samples & Portfolio */}
      <PortfolioSection 
        onOpenSamplePreview={handleOpenSamplePreview}
      />

      {/* About Founder & Mission */}
      <AboutSection />

      {/* Student Testimonials Carousel */}
      <TestimonialsSection />

      {/* Resources & FAQs */}
      <BlogSection />

      {/* Contact Form */}
      <ContactSection />

      {/* Site Footer */}
      <Footer 
        setActiveTab={setActiveTab}
      />

      {/* Work Sample Preview Modal & Floating WhatsApp Widget */}
      <SamplePreviewModal 
        sample={selectedSample}
        onClose={handleCloseSamplePreview}
      />

      <WhatsAppWidget />
    </div>
  );
}
