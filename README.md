# 🎓 Portafolio Laura - Sistema de Gestión Educativa

Un sistema completo de gestión educativa desarrollado por **Laura María Chaves Timarán**, que combina un portafolio profesional con una plataforma de enseñanza de inglés interactiva.

## ✨ Características Principales

### 🎯 **Vistas Especializadas**
- **Vista de Estudiante**: Dashboard interactivo con seguimiento de progreso, lecciones, y objetivos
- **Vista de Profesor**: Panel de gestión de cursos, estudiantes y clases
- **Portafolio Personal**: Showcase de proyectos y habilidades técnicas

### 📊 **Funcionalidades del Estudiante**
- **Progreso en Tiempo Real**: Seguimiento de lecciones completadas, objetivos cumplidos y tiempo de estudio
- **Clases Interactivas**: Acceso a materiales, notas personales y contenido de clases
- **Sistema de Objetivos**: 7 objetivos profesionales con seguimiento de progreso
- **Calendario de Clases**: Próximas clases y historial de clases pasadas
- **Modales Detallados**: Información completa sobre progreso, lecciones y objetivos

### 👨‍🏫 **Funcionalidades del Profesor**
- **Gestión de Estudiantes**: Vista completa del progreso de cada estudiante
- **Control de Clases**: Programación y seguimiento de clases virtuales y presenciales
- **Estadísticas Avanzadas**: Métricas de rendimiento y asistencia
- **Recursos Educativos**: Gestión de materiales y contenido del curso

### 🎨 **Diseño y UX**
- **Modo Oscuro Completo**: Interfaz elegante con tema oscuro por defecto
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Iconografía Intuitiva**: Emojis y iconos para mejor experiencia de usuario

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **React.js 18+** - Framework principal
- **React Router DOM** - Navegación entre vistas
- **CSS3** - Estilos avanzados con variables y gradientes
- **JavaScript ES6+** - Lógica de la aplicación

### **Arquitectura**
- **Component-Based Architecture** - Componentes reutilizables
- **Context API** - Gestión de estado global
- **Custom Hooks** - Lógica reutilizable
- **Local Storage** - Persistencia de datos

### **Estilos**
- **CSS Variables** - Sistema de temas dinámico
- **Flexbox & Grid** - Layouts modernos
- **Media Queries** - Diseño responsivo
- **Glassmorphism** - Efectos visuales modernos

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js 16+ 
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/GustavoUNAL/Laura.git

# Navegar al directorio
cd Laura

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

### **Scripts Disponibles**
```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm test           # Ejecutar tests
npm run eject      # Eject (no recomendado)
```

## 📱 Vistas del Sistema

### **🏠 Página Principal**
- Presentación personal y profesional
- Navegación a diferentes secciones
- Enlaces a redes sociales y contacto

### **👨‍🎓 Vista de Estudiante**
- **Header del Curso**: Información del curso de inglés
- **Progreso General**: 4 tarjetas clickeables con métricas
- **Próxima Clase**: Detalles de la siguiente clase
- **Clases Pasadas**: Historial con información detallada
- **Modales Interactivos**: Información detallada de progreso

### **👨‍🏫 Vista de Profesor**
- **Dashboard de Gestión**: Vista general del curso
- **Gestión de Estudiantes**: Progreso individual de cada estudiante
- **Control de Clases**: Programación y seguimiento
- **Estadísticas**: Métricas de rendimiento del curso

## 🎯 Objetivos del Curso de Inglés

1. **Comunicación Básica** - Fundamentos del idioma
2. **Vocabulario Profesional** - Términos empresariales
3. **Fluidez Conversacional** - Práctica de conversación
4. **Entrevistas de Trabajo** - Preparación profesional
5. **Presentaciones Ejecutivas** - Habilidades de presentación
6. **Comprensión Avanzada** - Escucha y lectura
7. **Escritura Corporativa** - Redacción profesional

## 📊 Datos del Sistema

### **Curso de Inglés**
- **Duración**: 5 semanas (21 Agosto - 24 Septiembre, 2025)
- **Total de Lecciones**: 12 lecciones
- **Modalidad**: Virtual y Presencial
- **Estudiantes**: 3 estudiantes activos

### **Progreso Actual**
- **Lecciones Completadas**: 4/12 (33%)
- **Objetivos Cumplidos**: 1/7
- **Tiempo de Estudio**: 6 horas
- **Promedio General**: 87.5%

## 🔧 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── StudentView/     # Vista del estudiante
│   ├── ProfessorView/   # Vista del profesor
│   ├── Header/          # Navegación
│   └── Footer/          # Pie de página
├── data/               # Datos simulados
│   ├── englishCourseData.js
│   └── professorData.js
├── hooks/              # Custom hooks
│   └── useEnglishCourse.js
├── contexts/           # Context API
│   ├── UserContext.js
│   └── DarkModeContext.js
└── styles/            # Estilos globales
    └── theme.css
```

## 🎨 Personalización

### **Temas**
El sistema utiliza CSS variables para fácil personalización:
```css
:root {
  --primary-color: #00BFFF;
  --secondary-color: #FF00FF;
  --background: #0a0a0a;
  --text: #ffffff;
}
```

### **Datos**
Los datos se pueden modificar en:
- `src/data/englishCourseData.js` - Datos del curso
- `src/data/professorData.js` - Datos del profesor

## 🚀 Despliegue

### **GitHub Pages**
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

### **Netlify/Vercel**
El proyecto está configurado para despliegue automático con GitHub Actions.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👩‍💻 Autor

**Laura María Chaves Timarán**
- Desarrolladora Full Stack
- Profesora de Inglés
- Especialista en React.js y Node.js

## 📞 Contacto

- **Email**: laurachavez@email.com
- **LinkedIn**: [Laura Chaves Timarán](https://www.linkedin.com/in/laura-chaves-timaran/)

---

⭐ **¡Dale una estrella al proyecto si te gusta!** ⭐