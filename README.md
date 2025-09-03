# Portafolio Personal - Gustavo Arteaga

Portafolio profesional desarrollado en React con una arquitectura modular y componentes reutilizables.

## 🏗️ Estructura del Proyecto

### **Componentes Principales**

#### **Header & Navegación**
- `src/components/Header/` - Barra de navegación principal
  - `Navbar.js` - Componente principal del header
  - `NavLinks.js` - Enlaces de navegación
  - `MobileNavigation.js` - Navegación móvil
  - `NormalNavigation.js` - Navegación desktop

#### **Página Principal (Home)**
- `src/components/HomeAbout/` - Sección "Acerca de" de la página principal
  - `HomeAbout.js` - Componente de presentación
  - `HomeAbout.css` - Estilos específicos
- `src/components/FeaturedProjects/` - Proyectos destacados
  - `FeaturedProjects.js` - Grid de proyectos principales
  - `FeaturedProjects.css` - Estilos de las tarjetas
- `src/components/Background/` - Sección de experiencia
  - `Background.js` - Métricas y estadísticas
  - `Background.css` - Estilos de la experiencia

#### **Layout & Estructura**
- `src/components/MainLayout/` - Layout principal
  - `MainLayout.js` - Contenedor principal
  - `MainLayout.css` - Estilos del layout

#### **Página de Proyectos**
- `src/components/ProjectsHeader/` - Header de la página de proyectos
  - `ProjectsHeader.js` - Título y descripción
  - `ProjectsHeader.css` - Estilos del header
- `src/components/ProjectCategory/` - Categorías de proyectos
  - `ProjectCategory.js` - Grid de proyectos por categoría
  - `ProjectCategory.css` - Estilos de las categorías
- `src/components/ProjectDialog/` - Popup de detalles del proyecto
  - `ProjectDialog.js` - Modal con información completa
  - `ProjectDialog.css` - Estilos del popup

#### **Páginas Completas**
- `src/containers/HomePage/` - Página principal
  - `ContentApp.js` - Orquestador de componentes
- `src/containers/AboutPage/` - Página "Acerca de"
  - `About.js` - Información personal completa
  - `About.css` - Estilos de la página
- `src/containers/ProjectsPage/` - Página de proyectos
  - `Projects.js` - Lista completa de proyectos
  - `Projects.css` - Estilos generales de la página
- `src/containers/CommunityPage/` - Comunidad (Login)
  - `Community.js` - Vista de inicio de sesión
  - `Community.css` - Estilos del login

#### **Componentes de UI**
- `src/components/Footer/` - Pie de página
  - `Footer.js` - Información de contacto
  - `Footer.css` - Estilos del footer
- `src/components/ErrorPage/` - Página de error 404
  - `ErrorPage.js` - Manejo de rutas no encontradas
  - `ErrorPage.css` - Estilos de la página de error

## 🎨 Sistema de Estilos

### **Colores Principales**
- **Header/Footer**: `#121212` (negro oscuro)
- **Página Principal**: `#1E1E1E` (negro medio)
- **Páginas Secundarias**: `#808080` (gris)
- **Acentos**: `#4ecdc4` (turquesa), `#ff6b6b` (coral)

### **Tipografías**
- **Títulos**: Helvetica Neue (300, 400)
- **Texto**: Montserrat, Roboto
- **Responsive**: Tamaños adaptativos para móvil, tablet y desktop

## 📱 Características Responsive

### **Breakpoints**
- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Móvil**: ≤ 500px

### **Adaptaciones**
- Navegación hamburguesa en móviles
- Grids adaptativos para proyectos
- Imágenes y textos escalables
- Espaciado optimizado por dispositivo

## 🚀 Funcionalidades

### **Navegación**
- Header fijo con navegación suave
- Menú responsive para móviles
- Enlaces a todas las secciones

### **Proyectos**
- Categorización automática
- Popups con información detallada
- Botones de contacto WhatsApp
- Grid responsive de tarjetas
- Imágenes únicas generadas por tarjeta (SVG temáticos, colores en armonía con el tema)

### **Comunidad**
- Página `/community` con formulario de login (usuario/contraseña)
- Avatar genérico SVG y tarjeta compacta, centrada y coherente con la paleta

### **Experiencia**
- Métricas destacadas
- Iconos animados
- Botón de contacto directo

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18
- **Routing**: React Router DOM
- **UI Components**: Material-UI (MUI)
- **Estilos**: CSS3 con variables y media queries
- **Iconos**: Material Icons
- **Build**: Create React App

## 📁 Organización de Archivos

```
src/
├── components/           # Componentes reutilizables
│   ├── Header/          # Navegación
│   ├── HomeAbout/       # Sección principal
│   ├── FeaturedProjects/ # Proyectos destacados
│   ├── Background/      # Experiencia
│   ├── ProjectsHeader/  # Header de proyectos
│   ├── ProjectCategory/ # Categorías
│   ├── ProjectDialog/   # Popups
│   ├── MainLayout/      # Layout principal
│   ├── Footer/          # Pie de página
│   └── ErrorPage/       # Página de error
├── containers/           # Páginas completas
│   ├── HomePage/        # Página principal
│   ├── AboutPage/       # Acerca de
│   └── ProjectsPage/    # Proyectos
├── img/                 # Imágenes estáticas
└── index.js             # Punto de entrada
```

## 🔧 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Despliegue**
   - Realiza commit de cambios finales y push a `main`.
   - Sirve la carpeta `build/` en tu hosting (Netlify/Vercel/GH Pages o servidor propio).

## 📝 Notas de Implementación Reciente

- Generador SVG por proyecto: ahora cada tarjeta tiene una imagen distinta basada en su contenido (paleta y iconografía temáticas), mejor integrada al esquema de color general.
- Comunidad: nueva vista de login en `/community`, con tarjeta reducida al 50% de ancho (responsive), avatar genérico SVG y estilos consistentes con el tema.

## ✨ Ventajas de la Nueva Estructura

### **Modularidad**
- Cada componente tiene su propio archivo CSS
- Fácil mantenimiento y actualización
- Componentes reutilizables

### **Organización**
- Estructura de carpetas clara y lógica
- Separación de responsabilidades
- Fácil navegación del código

### **Escalabilidad**
- Fácil agregar nuevos componentes
- Estructura preparada para crecimiento
- Patrones consistentes

### **Mantenimiento**
- Código más limpio y legible
- Fácil debugging
- Actualizaciones localizadas

## 🎯 Próximos Pasos

- [ ] Agregar tests unitarios
- [ ] Implementar lazy loading
- [ ] Optimizar imágenes
- [ ] Agregar PWA capabilities
- [ ] Implementar CMS para proyectos

---

**Desarrollado por Gustavo Arteaga**  
*Ingeniero en Sistemas Energéticos y Desarrollo de Software*
