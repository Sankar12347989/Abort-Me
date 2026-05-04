import React, { useState, useEffect } from "react";

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack Developer";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content fade-in-up">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-highlight">Sankar</span>
          </h1>
          <div className="typing-container">
            <h2 className="typing-text">
              {displayedText}
              <span className="cursor"></span>
            </h2>
          </div>
          <p className="hero-subtitle">
            Building beautiful, responsive web applications with modern
            technologies. Specialized in React, Django, and creating amazing
            user experiences.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            <span className="btn-text">View Projects</span>
            <span className="btn-icon">→</span>
          </button>
          <button className="btn btn-outline" onClick={scrollToContact}>
            <span className="btn-text">Contact Me</span>
            <span className="btn-icon">📧</span>
          </button>
        </div>

        <div className="hero-social">
          <a href="https://github.com/Sankar12347989" className="social-link" title="GitHub">
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sankara-madasamy-8a0560280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm1V3vCHKS3aqSjGsKPcd3w%3D%3D"
            className="social-link"
            title="LinkedIn"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sankaramadasamy@gmail.com"
            className="social-link"
            title="Email"
          >
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="hero-image-container fade-in-down">
        <div className="image-frame">
          <img
            src={`${import.meta.env.BASE_URL}cc.png`}
            alt="Sankara Portrait"
            className="hero-image"
          />
          <div className="image-border-glow"></div>
          <div className="floating-particle particle-1"></div>
          <div className="floating-particle particle-2"></div>
          <div className="floating-particle particle-3"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
