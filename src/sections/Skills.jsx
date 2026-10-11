import { Section } from '../components/Section';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

export const Skills = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <Section id="skills" label="03 / TECHNOLOGIES" title="Tools I Work With.">
      <div className="skills-content">
        <div className="skills-category">
          <h3 className="skills-category-title">Frontend</h3>
          <div className="skills-grid">
            {skills.frontend.map((skill, index) => (
              <div key={index} className="skill-item">
                {getIcon(skill.icon)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Backend</h3>
          <div className="skills-grid">
            {skills.backend.map((skill, index) => (
              <div key={index} className="skill-item">
                {getIcon(skill.icon)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Databases</h3>
          <div className="skills-grid">
            {skills.databases.map((skill, index) => (
              <div key={index} className="skill-item">
                {getIcon(skill.icon)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Programming Languages</h3>
          <div className="skills-grid">
            {skills.languages.map((skill, index) => (
              <div key={index} className="skill-item">
                {getIcon(skill.icon)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Development Tools</h3>
          <div className="skills-grid">
            {skills.tools.map((skill, index) => (
              <div key={index} className="skill-item">
                {getIcon(skill.icon)}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Additional Skills</h3>
          <div className="skills-list">
            {skills.additional.map((skill, index) => (
              <div key={index} className="skill-item-simple">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
