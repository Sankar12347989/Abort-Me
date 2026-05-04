import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <span className="logo-text">Sankar</span>
          <span className="logo-dot"></span>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="nav-link"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
