import React from 'react';
import { Code, Users } from 'lucide-react';
import './Historial.css';

interface EventoAnterior {
  fecha: string;
  titulo: string;
  descripcion: string;
  asistentes: number;
}

const Historial: React.FC = () => {
  const eventosAnteriores: EventoAnterior[] = [
    {
      fecha: 'Octubre 2024',
      titulo: 'Kick-off: Forensics en minecraft + Explorando Zero Days en macOS CVE-2025-24277',
      descripcion: 'Primera edición cerrada con los fundadores para cerrar programacion y tocar temas como forense en el famoso videojuego "minecraft" y el creciente mundo de los Zero Days en macOS usando como referencia CVE-2025-24277 y sus intentos de replicacion',
      asistentes: 7
    }
  ];

  return (
    <section id="historial" className="historial">
      <div className="historial__content">
        <h2 className="historial__title">
          <Code size={32} />
          Eventos Anteriores
        </h2>
        <div className="historial__grid">
          {eventosAnteriores.map((evento, idx) => (
            <div key={idx} className="historial__card">
              <div className="historial__fecha">{evento.fecha}</div>
              <h3 className="historial__titulo">{evento.titulo}</h3>
              <p className="historial__descripcion">{evento.descripcion}</p>
              <div className="historial__footer">
                <div className="historial__asistentes">
                  <Users size={18} />
                  <span>{evento.asistentes} asistentes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Historial;