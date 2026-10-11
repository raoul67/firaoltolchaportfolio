import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { achievements } from '../data/achievements';
import { Award, Trophy } from 'lucide-react';

export const Achievements = () => {
  return (
    <Section
      id="achievements"
      label="07 / ACHIEVEMENTS"
      title="Milestones & Recognition."
      description="Key accomplishments and recognition throughout my academic and professional journey."
    >
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="achievement-card">
            <div className="achievement-image">
              <img src={achievement.image} alt={achievement.title} />
              <div className="achievement-icon">
                <Trophy size={32} />
              </div>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
