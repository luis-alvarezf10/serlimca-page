export default function Contacto() {
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
          Contáctanos
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#ccc'
        }}>
          Estamos aquí para ayudarte
        </p>
      </section>

      {/* Contenido */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {/* Formulario */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '2.5rem',
            borderRadius: '10px',
            border: '2px solid #FFD700'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#FFD700',
              marginBottom: '1.5rem'
            }}>
              Envíanos un mensaje
            </h2>
            <form style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  Nombre
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    backgroundColor: '#000',
                    border: '1px solid #FFD700',
                    borderRadius: '5px',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    backgroundColor: '#000',
                    border: '1px solid #FFD700',
                    borderRadius: '5px',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    backgroundColor: '#000',
                    border: '1px solid #FFD700',
                    borderRadius: '5px',
                    color: '#fff',
                    fontSize: '1rem'
                  }}
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  Mensaje
                </label>
                <textarea
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    backgroundColor: '#000',
                    border: '1px solid #FFD700',
                    borderRadius: '5px',
                    color: '#fff',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#FFD700',
                  color: '#000',
                  padding: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div>
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '2.5rem',
              borderRadius: '10px',
              border: '2px solid #FFD700',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                color: '#FFD700',
                marginBottom: '1.5rem'
              }}>
                Información de Contacto
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>📞</div>
                  <h3 style={{ color: '#FFD700', marginBottom: '0.3rem' }}>Teléfono</h3>
                  <p style={{ color: '#ccc' }}>+58 XXX-XXXXXXX</p>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>📧</div>
                  <h3 style={{ color: '#FFD700', marginBottom: '0.3rem' }}>Email</h3>
                  <p style={{ color: '#ccc' }}>info@serlimca.com</p>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>📍</div>
                  <h3 style={{ color: '#FFD700', marginBottom: '0.3rem' }}>Dirección</h3>
                  <p style={{ color: '#ccc' }}>Venezuela</p>
                </div>

                <div>
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>🕐</div>
                  <h3 style={{ color: '#FFD700', marginBottom: '0.3rem' }}>Horario</h3>
                  <p style={{ color: '#ccc' }}>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p style={{ color: '#ccc' }}>Sábados: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
