import { Section } from '../components/Section';
import { profile } from '../data/profile';

export const About = () => {
  return (
    <Section id="about" label="01 / ABOUT" title={profile.about.headline}>
      <div className="about-content">
        <div className="about-narrative">
          <p className="about-text">{profile.about.narrative}</p>
        </div>
        <div className="about-facts">
          {profile.about.facts.map((fact, index) => (
            <div key={index} className="fact-card">
              <p className="fact-label">{fact.label}</p>
              <p className="fact-value">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
