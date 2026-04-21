"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['features', 'how-it-works', 'pricing', 'faq'];
      
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust 150 to catch the section a bit earlier
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-white custom-shadow' : 'bg-white bg-opacity-90'}`} style={{ transition: 'all 0.3s ease', height: '100px' }}>
      <div className="container h-100">
        <Link href="/" className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <div className="bg-primary text-white rounded p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
            <i className="bi bi-shield-lock-fill fs-4"></i>
          </div>
          <span className="fs-4">PMS Security</span>
        </Link>
        
        <button className="navbar-toggler border-0 custom-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <a className={`nav-link px-3 ${activeSection === 'features' ? 'text-primary fw-bold' : ''}`} href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 ${activeSection === 'how-it-works' ? 'text-primary fw-bold' : ''}`} href="#how-it-works">How it works</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 ${activeSection === 'pricing' ? 'text-primary fw-bold' : ''}`} href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link px-3 ${activeSection === 'faq' ? 'text-primary fw-bold' : ''}`} href="#faq">FAQ</a>
            </li>
          </ul>
          <div className="d-flex">
            <Link href="/login" className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">Sign in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
