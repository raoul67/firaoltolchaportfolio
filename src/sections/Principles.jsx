import { principles } from '../data/principles';

export const Principles = () => {
  return (
    <section className="principles-section">
      <div className="container">
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div key={index} className="principle-item">
              <div className="principle-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
