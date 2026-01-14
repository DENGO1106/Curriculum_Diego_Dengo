# Guía de Edición del Portafolio

Esta guía te ayudará a modificar el contenido de tu sitio web sin necesidad de saber programar.

## Estructura de Archivos Clave
Los archivos que necesitarás editar están dentro de la carpeta `src`. Aquí tienes un mapa:

- **Información Personal y Header**: `src/pages/Dashboard.jsx`
- **Habilidades (Power Stack)**: `src/pages/Dashboard.jsx`
- **Trayectoria (Estudios/Trabajo)**: `src/pages/Trajectory.jsx`
- **Certificaciones e Idiomas**: `src/pages/Certifications.jsx`
- **Visión y Habilidades Blandas**: `src/pages/Vision.jsx`
- **Menú de Navegación**: `src/components/Navigation.jsx`
- **Footer (Links)**: `src/components/Footer.jsx`

---

## Cómo Cambiar Textos

### 1. Cambiar Información Personal (Nombre, Título)
1.  Abre `src/pages/Dashboard.jsx`.
2.  Busca tu nombre "Diego Alberto Dengo Soto". Verás que está rodeado de etiquetas `<h1>`.
3.  Simplemente borra el texto blanco y escribe el nuevo.
    ```jsx
    {/* Antes */}
    <h1>Diego Alberto Dengo Soto</h1>
    
    {/* Después */}
    <h1>Diego Dengo</h1>
    ```

### 2. Actualizar Habilidades (Power Stack)
1.  Abre `src/pages/Dashboard.jsx`.
2.  Al principio del archivo verás una lista llamada `skills`:
    ```javascript
    const skills = [
      { name: 'Python', useCase: 'Automatización...' },
      // ...
    ]
    ```
3.  Puedes editar el `name` y el `useCase`. Para agregar una nueva, simplemente copia una línea completa y pégala abajo.

### 3. Actualizar Trayectoria
1.  Abre `src/pages/Trajectory.jsx`.
2.  Busca las secciones de texto. Por ejemplo, "Universidad de Costa Rica".
3.  Para agregar un nuevo trabajo, copia todo el bloque `<div className="timeline-item">...</div>` y pégalo arriba del anterior para que quede cronológico.

---

## Cómo Cambiar Imágenes

### 1. Foto de Perfil
1.  Guarda tu foto nueva en la carpeta `public` del proyecto.
2.  Ponle el nombre `profile-photo.jpg` (si ya existe, sobrescríbela).
3.  La web la mostrará automáticamente.

### 2. Imágenes de Certificados
1.  Guarda las imágenes en la carpeta `public` (ej. `certificado-scrum.jpg`).
2.  Abre `src/pages/Certifications.jsx`.
3.  Busca la tarjeta del certificado y cambia el contenido del `div` de la imagen por una etiqueta `img`:
    ```jsx
    {/* Antes (Placeholder) */}
    <div style={{...}}><span...>Imagen...</span></div>
    
    {/* Después */}
    <img src="/certificado-scrum.jpg" alt="Scrum" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
    ```

---

## ¡Listo!
Ahora tienes el control total de tu contenido. Si tienes dudas, revisa esta guía de nuevo.
