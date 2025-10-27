import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './Eventos.css';

interface Evento {
  fecha: string;
  lugar: string;
  estado: 'proximo' | 'programado';
}

const Eventos: React.FC = () => {
  const eventos: Evento[] = [
    { fecha: '21-Nov-2024', lugar: 'Por determinar', estado: 'proximo' },
    { fecha: '19-Dic-2024', lugar: 'Pecera del Edificio E', estado: 'programado' },
    { fecha: '23-Ene-2025', lugar: 'Pecera del Edificio E', estado: 'programado' },
    { fecha: '20-Feb-2025', lugar: 'Pecera del Edificio E', estado: 'programado' },
    { fecha: '20-Mar-2025', lugar: 'Pecera del Edificio E', estado: 'programado' },
    { fecha: '24-Abr-2025', lugar: 'Pecera del Edificio E', estado: 'programado' }
  ];

  return (
    <section id="eventos" className="eventos">
      <div className="eventos__content">
        <h2 className="eventos__title">
          <Calendar size={32} />
          Próximos Eventos
        </h2>
        <div className="eventos__grid">
          {eventos.map((evento, idx) => (
            <div 
              key={idx} 
              className={`eventos__card ${evento.estado === 'proximo' ? 'eventos__card--proximo' : ''}`}
            >
              {evento.estado === 'proximo' && (
                <div className="eventos__badge">PRÓXIMO</div>
              )}
              <div className="eventos__date">{evento.fecha}</div>
              <div className="eventos__details">
                <div className="eventos__detail">
                  <MapPin size={18} />
                  <span>UFV - {evento.lugar}</span>
                </div>
                <div className="eventos__detail">
                  <Clock size={18} />
                  <span>19:00 - 21:30</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="eventos__info">
          <div className="eventos__info-icon">
            <MapPin size={24} color="#3498db" />
          </div>
          <div>
            <h3 className="eventos__info-title">Ubicación</h3>
            <p className="eventos__info-text">
              Universidad Francisco de Vitoria - Pecera del Edificio E (excepto el evento del 21-Nov, lugar por confirmar)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventos;