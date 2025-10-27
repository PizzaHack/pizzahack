import React, { useState, useEffect } from 'react';
import { Pizza, Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'historial', label: 'Historial' },
    { id: 'inscripcion', label: 'Inscripción' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__content">
        <div className="navbar__logo">
          <img src={logo} alt="Pizza Hack Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Pizza Hack</span>
        </div>
        
        <div className="navbar__desktop-menu">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              className={`navbar__link ${activeSection === section.id ? 'navbar__link--active' : ''}`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <button 
          className="navbar__mobile-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              className="navbar__mobile-item"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;