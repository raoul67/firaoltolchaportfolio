export const Section = ({ id, label, title, description, children, className = '' }) => {
  return (
    <section id={id} className={className}>
      <div className="container">
        {(label || title || description) && (
          <div className="section-header">
            {label && <p className="section-label">{label}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="section-description">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
