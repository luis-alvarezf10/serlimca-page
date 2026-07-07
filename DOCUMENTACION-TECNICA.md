# Documentación Técnica — Plataforma Web SERLIMCA

**Cliente:** Servicios D'Lima C.A. (Serlimca)
**Proyecto:** Sistema web corporativo — transporte de maquinaria pesada e izamiento de cargas críticas para el sector petrolero.
**Desarrollado por:** Luis Álvarez

---

## 1. Resumen ejecutivo

La plataforma web de Serlimca es una **aplicación de una sola página (SPA)** moderna, construida con tecnologías de última generación orientadas al rendimiento, la escalabilidad y una experiencia de usuario profesional.

En términos prácticos, esto significa para su empresa:

- **Carga rápida y fluida.** La navegación entre secciones es instantánea, sin recargar la página completa, lo que proyecta una imagen sólida y profesional ante clientes industriales.
- **Soporte multi-idioma.** El contenido está preparado para mostrarse en varios idiomas mediante un sistema centralizado, ampliando el alcance a clientes internacionales.
- **Diseño adaptable.** La interfaz se ajusta correctamente a computadoras, tabletas y teléfonos móviles.
- **Escalable y mantenible.** La estructura del código permite agregar nuevas secciones o funcionalidades a futuro con bajo costo de mantenimiento.
- **Base para modo oscuro.** La arquitectura ya contempla la futura incorporación de un tema oscuro (dark mode).

---

## 2. Tecnologías utilizadas

| Tecnología | Versión | Propósito | Beneficio para el negocio |
|---|---|---|---|
| **React** | 18.3 | Librería principal para construir la interfaz | Interfaz moderna, reutilizable y estable |
| **Vite** | 7.2 | Herramienta de compilación y servidor de desarrollo | Cargas y compilaciones muy rápidas |
| **Tailwind CSS** | 3.4 | Sistema de estilos | Diseño consistente y adaptable a cualquier pantalla |
| **Framer Motion / Motion** | 12.34 | Animaciones y transiciones | Experiencia visual pulida y profesional |
| **React Router DOM** | 7.13 | Navegación entre páginas | Navegación instantánea sin recargar |
| **React Context** | — | Manejo de idioma y tema | Contenido multi-idioma y base para dark mode |
| **React Icons / Flag Icons** | 5.5 / 7.5 | Iconografía y banderas de idioma | Interfaz clara e intuitiva |
| **ESLint** | 9 | Control de calidad de código | Código robusto y menos errores |
| **pnpm** | — | Gestor de dependencias | Instalaciones rápidas y eficientes |

---

## 3. Detalle técnico

### 3.1 Arquitectura de carpetas

```
src/
├── assets/         # Recursos estáticos (imágenes, íconos, media)
├── components/     # Componentes reutilizables de UI
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── buttons.jsx
│   └── inputs/
├── context/        # Estado global de la aplicación
│   ├── LanguageContext.jsx   # Sistema de traducción multi-idioma
│   └── ThemeContext.jsx      # Base para el futuro modo oscuro
├── pages/          # Vistas principales del sitio
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx         # Definición de rutas
└── main.jsx        # Punto de entrada de la aplicación
```

### 3.2 Flujo de renderizado

El punto de entrada es `src/main.jsx`, que envuelve la aplicación en los proveedores globales:

```
main.jsx
 └─ BrowserRouter        (enrutamiento)
     └─ ThemeProvider    (tema / dark mode)
         └─ LanguageProvider  (idioma)
             └─ App      (rutas y vistas)
```

La aplicación se ejecuta en modo estricto de React (`StrictMode`), lo que ayuda a detectar problemas potenciales durante el desarrollo.

### 3.3 Gestión de estado

El estado global se maneja con **React Context**, evitando dependencias externas innecesarias:

- **`LanguageContext`** — centraliza los textos y permite cambiar el idioma del sitio en tiempo real.
- **`ThemeContext`** — preparado para alternar entre tema claro y oscuro.

### 3.4 Scripts disponibles

| Comando | Acción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo local |
| `pnpm build` | Genera la versión optimizada para producción |
| `pnpm preview` | Previsualiza la versión de producción localmente |
| `pnpm lint` | Analiza el código en busca de errores |

---

## 4. Instalación y desarrollo

Requisitos previos: [Node.js](https://nodejs.org/) y [pnpm](https://pnpm.io/) instalados.

```bash
# 1. Clonar el repositorio
git clone https://github.com/luis-alvarezf10/serlimca-page

# 2. Entrar al proyecto
cd serlimca-page

# 3. Instalar dependencias
pnpm install

# 4. Iniciar el servidor de desarrollo
pnpm dev
```

Para generar la versión de producción lista para desplegar:

```bash
pnpm build
```

Los archivos finales se generan en la carpeta `dist/`, lista para publicarse en cualquier servicio de hosting web.

---

## 5. Créditos

Plataforma diseñada y desarrollada por **Luis Álvarez** para **Servicios D'Lima C.A. (Serlimca)**.
