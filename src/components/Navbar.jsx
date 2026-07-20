import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, BookOpen, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'tools', label: 'Tools We Teach' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      {/* Top Banner Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-pill">
              <ShieldCheck className="w-3.5 h-3.5" size={14} /> 24/7 Academic Support
            </span>
            <span className="top-text">Empowering PhD & Postgrad Scholars for 25+ Years</span>
          </div>
          <div className="top-bar-right">
            <a 
              href="https://wa.me/918685099555" 
              target="_blank" 
              rel="noreferrer" 
              className="top-contact-link whatsapp"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp: +91-86850 99555</span>
            </a>
            <a 
              href="tel:+918685099555" 
              className="top-contact-link phone"
            >
              <Phone size={14} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavClick('home')}>
            <div className="logo-icon">
              <BookOpen size={24} />
            </div>
            <div className="logo-text">
              <span className="brand-name">THE SCHOLAR EDGE</span>
              <span className="brand-sub">RESEARCH & DATA CONSULTANCY</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Header Action Buttons */}
          <div className="header-actions">
            <a
              href="https://wa.me/918685099555"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
              title="Chat on WhatsApp +91-86850 99555"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="btn btn-discord btn-sm"
              title="Join our research Discord community"
            >
              <span>Discord</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <a
              href="https://wa.me/918685099555"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp full-width"
            >
              <MessageCircle size={18} /> Chat on WhatsApp (+91-86850 99555)
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noreferrer"
              className="btn btn-discord full-width"
            >
              Join Our Discord Server
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
