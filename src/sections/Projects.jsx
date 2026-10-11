import { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { projects, projectCategories } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section
      id="projects"
      label="02 / SELECTED WORK"
      title="Selected Projects. Practical Thinking."
      description="A selection of projects and experiments exploring web development, organizational systems, and digital design."
    >
      <div className="projects-content">
        <div className="project-filters">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-preview">
                <div className="preview-mockup">
                  {project.category === 'web-development' ? (
                    <div className="mockup-browser">
                      <div className="mockup-header">
                        <span className="mockup-dot mockup-dot--red"></span>
                        <span className="mockup-dot mockup-dot--yellow"></span>
                        <span className="mockup-dot mockup-dot--green"></span>
                      </div>
                      <div className="mockup-body">
                        <div className="mockup-sidebar"></div>
                        <div className="mockup-main">
                          <div className="mockup-card mockup-card--1"></div>
                          <div className="mockup-card mockup-card--2"></div>
                          <div className="mockup-card mockup-card--3"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mockup-gallery">
                      <div className="mockup-frame mockup-frame--1"></div>
                      <div className="mockup-frame mockup-frame--2"></div>
                      <div className="mockup-frame mockup-frame--3"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="project-info">
                <p className="project-category">{project.categoryName}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.sourceCode ? (
                    <Button variant="text" href={project.sourceCode} icon="external">
                      <Github size={16} />
                      Source Code
                    </Button>
                  ) : (
                    <span className="project-link-disabled">Source Code Coming Soon</span>
                  )}
                  {project.liveDemo ? (
                    <Button variant="text" href={project.liveDemo} icon="external">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  ) : (
                    <span className="project-link-disabled">Live Demo Coming Soon</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
