export default function Servicios() {
  const servicios = [
    {
      titulo: 'Transporte de Carga',
      descripcion: 'Transporte seguro y eficiente de mercancías a nivel nacional.',
      detalles: [
        'Flota moderna y bien mantenida',
        'Seguimiento en tiempo real',
        'Seguro de carga incluido',
        'Entregas puntuales'
      ]
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Programas de mantenimiento para evitar fallas y prolongar la vida útil.',
      detalles: [
        'Inspecciones periódicas',
        'Cambio de aceite y filtros',
        'Revisión de sistemas',
        'Reportes detallados'
      ]
    },
    {
      titulo: 'Reparación Especializada',
      descripcion: 'Reparaciones de todo tipo con personal altamente capacitado.',
      detalles: [
        'Diagnóstico preciso',
        'Repuestos originales',
        'Garantía en reparaciones',
        'Servicio de emergencia'
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#FFD700',
          marginBottom: '1rem'
        }}>
          Nuestros Servicios
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#ccc',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Ofrecemos soluciones integrales en transporte, mantenimiento y reparación
        </p>
      </section>

      {/* Servicios Detallados */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {servicios.map((servicio, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            padding: '2.5rem',
            borderRadius: '10px',
            border: '2px solid #FFD700',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: '#FFD700',
              marginBottom: '1rem'
            }}>
              {servicio.titulo}
            </h2>
            <p style={{
              color: '#fff',
              fontSize: '1.1rem',
              marginBottom: '1.5rem'
            }}>
              {servicio.descripcion}
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {servicio.detalles.map((detalle, i) => (
                <li key={i} style={{
                  color: '#ccc',
                  padding: '0.5rem 0',
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#FFD700'
                  }}>✓</span>
                  {detalle}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#FFD700',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: '#000',
          marginBottom: '1rem'
        }}>
          ¿Necesitas alguno de nuestros servicios?
        </h2>
        <a href="/contacto" style={{
          display: 'inline-block',
          backgroundColor: '#000',
          color: '#FFD700',
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Solicita una Cotización
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000',
        borderTop: '2px solid #FFD700',
        padding: '2rem',
        textAlign: 'center',
        color: '#ccc'
      }}>
        <p>&copy; 2024 SERLIMCA - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
