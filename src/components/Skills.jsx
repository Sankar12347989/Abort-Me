import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", icon: "🏗️" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🐍" },
    { name: "Python", icon: "🔧" },
    { name: "Git", icon: "📦" },
    { name: "VS Code", icon: "💻" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card reveal-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
