"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const words = ["simplified", "smarter", "secure", "global"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
        setTypingSpeed(80);
      } else {
        setDisplayedText(prev => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section className="hero-dark py-5 pt-md-5 overflow-hidden position-relative" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="hero-glow"></div>

      <div className="container position-relative z-1 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Badge */}
            <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-10 rounded-pill px-3 py-2 mb-4 animate__animated animate__fadeInDown">
              <span className="small text-white opacity-75 fw-medium">🌍 Built for global teams</span>
            </div>

            {/* Main Heading */}
            <h1 className="display-3 fw-bold text-white mb-4 animate__animated animate__fadeIn" style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}>
              Office security, <br className="d-md-none" />
              <span className="text-gradient-animated typing-cursor">{displayedText}</span>
            </h1>

            {/* Subtitle */}
            <p className="lead text-white opacity-75 mb-5 px-md-5 mx-auto animate__animated animate__fadeIn" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
              Manage buildings, watchmen, and visitors from one powerful platform designed to scale across offices, cities, and enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap animate__animated animate__fadeInUp">
              <Link href="/login" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold hover-glow transition-all">
                Get started free <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <a href="#features" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold">
                Explore features
              </a>
            </div>

            {/* Trust Line */}
            <div className="mt-5 pt-4 animate__animated animate__fadeIn">
              <p className="text-white opacity-50 small fw-medium text-uppercase tracking-wider">
                Trusted by modern offices and enterprises worldwide
              </p>
              <div className="d-flex justify-content-center gap-5 mt-4 opacity-50 grayscale invert">
                <i className="bi bi-apple fs-3 text-white"></i>
                <i className="bi bi-google fs-3 text-white"></i>
                <i className="bi bi-microsoft fs-3 text-white"></i>
                <i className="bi bi-nvidia fs-3 text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="position-absolute top-20 start-10 bg-primary opacity-10 rounded-circle blur-3xl" style={{ width: '300px', height: '300px', filter: 'blur(100px)' }}></div>
        <div className="position-absolute bottom-20 end-10 bg-info opacity-10 rounded-circle blur-3xl" style={{ width: '400px', height: '400px', filter: 'blur(120px)' }}></div>
      </div>
    </section>
  );
}
