import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { profile } from '../data/profile';
import { Mail, Github, Linkedin, FileText, Phone, Send } from 'lucide-react';

export const Contact = () => {
  const handleEmailClick = () => {
    if (profile.contact.email) {
      window.location.href = `mailto:${profile.contact.email}`;
    }
  };

  return (
    <Section
      id="contact"
      label="06 / CONTACT"
      title={profile.contact.headline}
      description={profile.contact.description}
    >
      <div className="contact-content">
        <div className="contact-primary">
          <Button variant="primary" onClick={handleEmailClick} icon="arrow" size="large">
            <Mail size={20} />
            Get in Touch
          </Button>
        </div>

        <div className="contact-links">
          {profile.contact.phone && (
            <a
              href={`tel:${profile.contact.phone}`}
              className="contact-link"
            >
              <Phone size={24} />
              <span>{profile.contact.phone}</span>
            </a>
          )}
          {profile.contact.telegram && (
            <a
              href={profile.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Send size={24} />
              <span>Telegram</span>
            </a>
          )}
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          )}
          {profile.contact.linkedin && (
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
          )}
          {profile.contact.resume && (
            <a
              href={profile.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FileText size={24} />
              <span>Résumé</span>
            </a>
          )}
        </div>

        <div className="contact-note">
          <p className="text-muted">
            {profile.contact.email ? (
              <a href={`mailto:${profile.contact.email}`} className="contact-email">
                {profile.contact.email}
              </a>
            ) : profile.contact.phone || profile.contact.telegram ? (
            <div className="contact-details">
              {profile.contact.phone && (
                <div className="contact-detail-item">
                  <Phone size={16} />
                  <a href={`tel:${profile.contact.phone}`} className="contact-email">
                    {profile.contact.phone}
                  </a>
                </div>
              )}
              {profile.contact.telegram && (
                <div className="contact-detail-item">
                  <Send size={16} />
                  <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer" className="contact-email">
                    @FIRAA67
                  </a>
                </div>
              )}
            </div>
          ) : (
            'Contact details coming soon. Check back for updates.'
          )}
          </p>
        </div>
      </div>
    </Section>
  );
};
