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

import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import PortfolioPage from './pages/PortfolioPage';
import ResourcesPage from './pages/ResourcesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSample, setSelectedSample] = useState(null);

  const handleOpenSamplePreview = (sample) => {
    setSelectedSample(sample);
  };

  const handleCloseSamplePreview = () => {
    setSelectedSample(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return (
          <>
            <ServicesSection />
            <ToolsSection />
          </>
        );
      case 'courses':
        return <CoursesPage />;
      case 'workshops':
        return <WorkshopsSection />;
      case 'portfolio':
        return <PortfolioPage onOpenSamplePreview={handleOpenSamplePreview} />;
      case 'resources':
        return <ResourcesPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactSection />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'refund':
        return <RefundPolicyPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <ServicesSection />
            <ToolsSection />
            <WorkshopsSection />
            <PortfolioSection onOpenSamplePreview={handleOpenSamplePreview} />
            <AboutSection />
            <TestimonialsSection />
            <BlogSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Dynamic Page View Content */}
      <main className="main-content">
        {renderContent()}
      </main>

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
