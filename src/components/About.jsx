import React, { useState, useEffect } from "react";

function About() {
  const [counters, setCounters] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        projects: prev.projects < 10 ? prev.projects + 1 : 10,
        skills: prev.skills < 8 ? prev.skills + 1 : 8,
        experience: prev.experience < 1 ? prev.experience + 1 : 1,
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image reveal-animate">
          <div className="image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}cc.png`}
              alt="Sankara"
              className="about-img"
            />
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="about-content reveal-animate">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hey! I'm <span className="text-highlight">Sankara Madasamy</span>, a
            passionate Full Stack Developer based in India. Currently pursuing
            my B.Com degree while building amazing web applications.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <h4>Background</h4>
              <p>B.Com Student | Full Stack Developer | Tech Enthusiast</p>
            </div>

            <div className="detail-item">
              <h4>Expertise</h4>
              <p>React.js, Django, Python, JavaScript, HTML5, CSS3, and more</p>
            </div>

            <div className="detail-item">
              <h4>Skills</h4>
              <p>
                Building user-friendly applications with beautiful UIs and
                robust backends
              </p>
            </div>

            <div className="detail-item">
              <h4>Passion</h4>
              <p>Video & photo editing, UI/UX design, and problem-solving</p>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <h3 className="stat-number">{counters.projects}+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">{counters.skills}+</h3>
              <p className="stat-label">Skills Mastered</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">{counters.experience}+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
