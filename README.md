<div class="container">
        <h1>SERLIMCA — Plataforma Corporativa</h1>
        <p>Sistema web oficial de <strong>Servicios D'Lima C.A. (Serlimca)</strong>, empresa especializada en el transporte de maquinaria pesada e izamiento de cargas críticas para el sector petrolero en el país. Esta plataforma web está diseñada para ofrecer una experiencia de usuario fluida, visualmente técnica y optimizada para la conversión de clientes industriales.</p>
        <h2>Tecnologías Utilizadas</h2>
        <p>La aplicación se construyó utilizando herramientas de última generación para garantizar rendimiento y escalabilidad:</p>
        <ul>
            <li><strong>Core:</strong> React.js + Vite</li>
            <li><strong>Estilos:</strong> Tailwind CSS</li>
            <li><strong>Animaciones:</strong> Framer Motion</li>
            <li><strong>Enrutamiento:</strong> React Router DOM</li>
            <li><strong>Manejador:</strong> pnpm</li>
        </ul>
        <h2>Instalación y Desarrollo</h2>
        </hr>
        <pre><code># Clonar el repositorio
git clone https://github.com/luis-alvarezf10/serlimca-page
// instalar dependencias
pnpm install
// correr servidor
pnpm dev</code></pre>
        <h2>Dependencias Relevantes</h2>
        <table>
            <thead>
                <tr>
                    <th>Paquete</th>
                    <th>Propósito</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>framer-motion</code></td>
                    <td>Orquestación de animaciones y gestos.</td>
                </tr>
                <tr>
                    <td><code>flag-icons</code></td>
                    <td>Biblioteca de iconos para la selección de idiomas.</td>
                </tr>
                <tr>
                    <td><code>react-icons</code></td>
                    <td>Set de iconos vectoriales para la interfaz.</td>
                </tr>
            </tbody>
        </table>
        <h2>Arquitectura de Carpetas</h2>
<pre><code>src/
├── assets/         # Recursos estáticos
├── components/     # Componentes de UI (buttons, inputs, etc ...)
├── context/        # Contexto
        ├── LanguageContext.jsx  # Traducción de contenido       
        └── ThemeContext.jsx # Para adapatación futura de dark mode
└── pages/          # Vistas principales</code></pre>

  </div>
  <italic>Desarrollado por:</italic> <strong>Luis Álvarez</strong>
