function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Sankara Madasamy</h3>
          <p className="footer-subtitle">Full Stack Developer</p>
        </div>

        <div className="footer-section">
          <p className="footer-text">
            Building beautiful web experiences with React, Django, and modern
            technologies.
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-links">
            <a href="https://github.com/Sankar12347989" title="GitHub" className="footer-link">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sankara-madasamy-8a0560280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm1V3vCHKS3aqSjGsKPcd3w%3D%3D"
              title="LinkedIn"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sankaramadasamy@gmail.com"
              title="Email"
              className="footer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sankara Madasamy. All rights reserved.</p>
        <p className="footer-credit">
          Designed & Built with ❤️ and modern web technologies
        </p>
      </div>
    </footer>
  );
}

export default Footer;
