import React from "react";

import todoAppImg from "../assets/todo-app.svg";
import shoppingWebsiteImg from "../assets/shopping-website.svg";
import learningQuizImg from "../assets/learning-quiz.svg";

function Projects() {
  const projects = [
    {
      title: "To-Do List App",
      description:
        "A beautiful task management application with drag-and-drop functionality",
      imageSrc: todoAppImg,
      tech: ["React", "JavaScript", "CSS3"],
      demo: "#",
      github: "#",
    },
    {
      title: "Shopping Website",
      description:
        "Full-featured e-commerce platform with cart management and checkout",
      imageSrc: shoppingWebsiteImg,
      tech: ["React", "Django", "Payment API"],
      demo: "#",
      github: "#",
    },
    {
      title: "Online Learning & Quiz Portal",
      description:
        "Interactive learning platform with quizzes, progress tracking, and certificates",
      imageSrc: learningQuizImg,
      tech: ["React", "Django", "Python"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my best work</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card reveal-animate"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} className="project-link demo-link">
                    <span>Live Demo</span>
                    <span className="link-icon">-&gt;</span>
                  </a>
                  <a href={project.github} className="project-link github-link">
                    <span>GitHub</span>
                    <span className="link-icon">*</span>
                  </a>
                </div>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

