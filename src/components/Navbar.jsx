import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const onPointerDown = (event) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target)) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="nav-logo">
          <span className="logo-text">Sankar</span>
          <span className="logo-dot"></span>
        </div>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
        >
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
