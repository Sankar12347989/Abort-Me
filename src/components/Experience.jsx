import React from "react";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Fly Towards Digital Innovation",
      duration: "2 Months",
      description: [
        "Worked on real-time web development projects",
        "Gained hands-on experience with React and Django",
        "Improved UI/UX design and debugging skills",
        "Collaborated with team on feature development",
      ],
      highlights: ["React", "Django", "UI/UX", "Debugging"],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey and growth</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card reveal-animate delay-${index + 1}`}
            >
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-company">{exp.company}</span>
              </div>

              <div className="exp-duration">
                <span className="duration-badge">📅 {exp.duration}</span>
              </div>

              <div className="exp-description">
                <ul className="description-list">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-highlights">
                {exp.highlights.map((tech, idx) => (
                  <span key={idx} className="highlight-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="exp-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
