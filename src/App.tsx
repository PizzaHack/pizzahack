import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Eventos from './components/Eventos/Eventos';
import Historial from './components/Historial/Historial';
import Inscripcion from './components/Inscripcion/Inscripcion';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <Hero />
      <Eventos />
      <Historial />
      <Inscripcion />
      <Footer />
    </div>
  );
};

export default App;