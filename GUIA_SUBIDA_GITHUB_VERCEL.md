# Guía de Publicación: GitHub & Vercel

Como no pude detectar `git` instalado en tu terminal actual, he preparado esta guía rápida para que puedas subir tu portafolio manualmente.

## Paso 1: Preparar el Repositorio (En tu terminal con Git)
Abre una terminal donde tengas Git (por ejemplo "Git Bash") en la carpeta del proyecto y ejecuta estos comandos uno por uno:

```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Guardar los cambios (Commit)
git commit -m "Initial commit: Portfolio V1 with Strategic Updates"

# 4. Cambiar a la rama principal
git branch -M main
```

## Paso 2: Crear Repositorio en GitHub
1. Ve a [GitHub.com/new](https://github.com/new).
2. Nombre del repositorio: `portfolio-diego-dengo` (o el que gustes).
3. Déjalo en **Público**.
4. No añadas README ni .gitignore (ya los tenemos).
5. Click en **"Create repository"**.

## Paso 3: Conectar y Subir
Copia los comandos que GitHub te muestra en la sección **"…or push an existing repository from the command line"**:

```bash
git remote add origin https://github.com/TU_USUARIO/portfolio-diego-dengo.git
git push -u origin main
```
*(Reemplaza `TU_USUARIO` con tu usuario de GitHub)*.

## Paso 4: Desplegar en Vercel
1. Ve a [Vercel.com](https://vercel.com) e inicia sesión.
2. Click en **"Add New..."** -> **"Project"**.
3. Selecciona el repositorio `portfolio-diego-dengo` y dale **Import**.
4. En la configuración, deja todo por defecto (Framework Preset: Vite).
5. Click en **Deploy**.

¡En unos segundos tendrás tu link público tipo `portfolio-diego.vercel.app`!

---

## Análisis con Gemini
Una vez tengas el link, pásaselo a Gemini (o úsalo aquí mismo) con el siguiente prompt para el análisis que pediste:

> "Actúa como un reclutador senior de tecnología y experto en marca personal. Analiza mi portafolio [TU_LINK_AQUI]. Evalúa la claridad de mi propuesta de valor (Ingeniero + Datos), la experiencia de usuario (UX) y dame 3 mejoras críticas para aumentar mi empleabilidad."
