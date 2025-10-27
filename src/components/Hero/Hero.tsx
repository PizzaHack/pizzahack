import React from 'react';
import { Shield, Clock, Pizza, Terminal } from 'lucide-react';
import './Hero.css';
import logo from '../../assets/images/logo.png';

const Hero: React.FC = () => {
  return (
     <section id="inicio" className="hero">
      <div className="hero__content">
        <div className="hero__icon">
          <img src={logo} alt="Pizza Hack Logo" className="hero__logo" />
        </div>
        <h1 className="hero__title">
          Pizza <span className="hero__title--accent">Hack</span>
        </h1>
        <p className="hero__subtitle">
          Hacking Ético • Comunidad • Pizza Gratis
        </p>
        <p className="hero__description">
          Un espacio creado para reunirnos mensualmente 
          y explorar las últimas tendencias en ciberseguridad ofensiva, mientras compartimos 
          pizza y conocimiento.
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <Shield size={32} color="#3498db" />
            <div>
              <div className="hero__stat-number">6</div>
              <div className="hero__stat-label">Eventos programados</div>
            </div>
          </div>
          <div className="hero__stat">
            <Clock size={32} color="#e74c3c" />
            <div>
              <div className="hero__stat-number">2.5h</div>
              <div className="hero__stat-label">De duración</div>
            </div>
          </div>
          <div className="hero__stat">
            <Pizza size={32} color="#f39c12" />
            <div>
              <div className="hero__stat-number">100%</div>
              <div className="hero__stat-label">Gratis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;