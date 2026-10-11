import { Section } from '../components/Section';
import { profile } from '../data/profile';
import { Building2, GraduationCap, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <Section id="experience" label="04 / EXPERIENCE" title="Learning Through Real Projects.">
      <div className="experience-timeline">
        {profile.experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-icon">
              {item.role.includes('Intern') ? (
                <Building2 size={24} />
              ) : (
                <GraduationCap size={24} />
              )}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-organization">{item.organization}</p>
              </div>
              <div className="experience-meta">
                <span className="experience-location">
                  <MapPin size={16} />
                  {item.location}
                </span>
              </div>
              <p className="experience-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
