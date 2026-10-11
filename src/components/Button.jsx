import { ArrowRight, ExternalLink } from 'lucide-react';

export const Button = ({ variant = 'primary', children, href, onClick, icon, ...props }) => {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'btn-text'
  };

  const Icon = icon === 'arrow' ? ArrowRight : icon === 'external' ? ExternalLink : null;

  const content = (
    <>
      {children}
      {Icon && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
