import React from 'react';
import { Pizza } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <img src={logo} alt="Pizza Hack Logo" className="footer__logo" />
          <span className="footer__brand-text">Pizza Hack</span>
        </div>
        <p className="footer__text">
          Creado por antiguos alumnos de la UFV para la comunidad de ciberseguridad, totalmente abierto.
        </p>
        <p className="footer__copy">
          © 2026 Pizza Hack. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;