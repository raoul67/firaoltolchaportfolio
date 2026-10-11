import { Button } from '../components/Button';
import { profile } from '../data/profile';
import { Code, Terminal, Layout, Zap } from 'lucide-react';

export const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-intro">{profile.intro}</p>
            <h1 className="hero-title">
              Turning Ideas Into <span className="text-accent">Digital Experiences</span>.
            </h1>
            <p className="hero-description">{profile.description}</p>
            <div className="hero-actions">
              <Button variant="primary" onClick={handleScrollToProjects} icon="arrow">
                Explore Selected Work
              </Button>
              <Button variant="secondary" onClick={handleScrollToContact}>
                Let's Connect
              </Button>
            </div>
            {profile.showAvailability && (
              <div className="hero-availability">
                <span className="availability-dot"></span>
                <span className="availability-text">{profile.availability}</span>
              </div>
            )}
          </div>

          <div className="hero-visual">
            <div className="hero-profile">
              <img src="/profile.jpg" alt="Firaol Tolcha" className="profile-image" />
            </div>
            <div className="hero-workspace">
              <div className="workspace-header">
                <div className="window-controls">
                  <span className="window-dot window-dot--red"></span>
                  <span className="window-dot window-dot--yellow"></span>
                  <span className="window-dot window-dot--green"></span>
                </div>
                <div className="window-title">portfolio.js</div>
              </div>
              <div className="workspace-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> =</span>
                  <span className="code-brace">{' {'}</span>
                </div>
                <div className="code-line code-line--indented">
                  <span className="code-property">name</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> 'Firaol Tolcha'</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-line--indented">
                  <span className="code-property">role</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> 'Web Developer'</span>
                  <span className="code-punctuation">,</span>
                </div>
                <div className="code-line code-line--indented">
                  <span className="code-property">passion</span>
                  <span className="code-operator">:</span>
                  <span className="code-string"> 'Building useful things'</span>
                </div>
                <div className="code-line">
                  <span className="code-brace">{' }'}</span>
                </div>
                <div className="workspace-tech">
                  <div className="tech-item">
                    <Code size={16} />
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <Terminal size={16} />
                    <span>Node.js</span>
                  </div>
                  <div className="tech-item">
                    <Layout size={16} />
                    <span>CSS</span>
                  </div>
                  <div className="tech-item">
                    <Zap size={16} />
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-decoration">
              <div className="decoration-circle decoration-circle--1"></div>
              <div className="decoration-circle decoration-circle--2"></div>
              <div className="decoration-grid"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
