import React from 'react';
import { Terminal } from 'lucide-react';
import './Inscripcion.css';

const Inscripcion: React.FC = () => {
  return (
    <section id="inscripcion" className="inscripcion">
      <div className="inscripcion__content">
        <h2 className="inscripcion__title">
          <Terminal size={32} />
          Inscripción
        </h2>
        <div className="inscripcion__box">
          <p className="inscripcion__text">
            La inscripción para el próximo evento se habilitará próximamente. 
            Mantente atento a nuestras actualizaciones.
          </p>
          <div className="inscripcion__placeholder">
            <div className="inscripcion__placeholder-icon">📋</div>
            <p className="inscripcion__placeholder-text">
              El formulario de inscripción de Google Forms aparecerá aquí cuando esté disponible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inscripcion;