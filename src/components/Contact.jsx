import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's collaborate and create something amazing
        </p>

        <div className="contact-wrapper">
          <div className="contact-info reveal-animate">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:sankaramadasamy@gmail.com" className="info-link">
                sankaramadasamy@gmail.com
              </a>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:+919442798994" className="info-link">
                +91 9442798994
              </a>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <h3>Let's Connect</h3>
              <p>
                I'm always open to new opportunities and interesting projects
              </p>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Sankar12347989"
                className="social-icon"
                title="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sankara-madasamy-8a0560280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm1V3vCHKS3aqSjGsKPcd3w%3D%3D"
                className="social-icon"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form reveal-animate" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <div className="input-glow"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <div className="input-glow"></div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
                rows="5"
              ></textarea>
              <div className="input-glow"></div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              {isSubmitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
