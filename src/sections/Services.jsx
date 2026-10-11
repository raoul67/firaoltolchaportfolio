import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

export const Services = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon size={32} /> : null;
  };

  return (
    <Section
      id="services"
      label="05 / WHAT I CAN HELP WITH"
      title="From Idea to Interface."
    >
      <div className="services-grid">
        {services.map((service) => (
          <Card key={service.id} className="service-card">
            <div className="service-number">{service.number}</div>
            <div className="service-icon">{getIcon(service.icon)}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
