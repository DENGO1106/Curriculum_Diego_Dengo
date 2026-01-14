# Guía de Despliegue (GitHub + Vercel)

Esta guía te permitirá publicar tu portafolio en internet GRATIS y de forma profesional.

## Requisitos Previos
1.  Tener una cuenta en [GitHub](https://github.com/).
2.  Tener una cuenta en [Vercel](https://vercel.com/) (puedes entrar con tu cuenta de GitHub).
3.  Tener **Git** instalado en tu computadora (Antigravity ya inicializó el repositorio local por ti).

---

## Paso 1: Subir código a GitHub

1.  Ve a [GitHub.com](https://github.com/) y crea un **Nuevo Repositorio** (botón "New").
    - Nombre: `portafolio-personal` (o lo que gustes).
    - Público.
    - **NO** marques "Add README" ni .gitignore (ya los tenemos).
    - Dale a "Create repository".

2.  Copia los comandos que GitHub te muestra bajo el título **"...or push an existing repository from the command line"**. Serán algo así:
    ```bash
    git remote add origin https://github.com/TU_USUARIO/portafolio-personal.git
    git branch -M main
    git add .
    git commit -m "Primer commit: Portafolio listo"
    git push -u origin main
    ```
    *(Ejecuta estos comandos en tu terminal dentro de la carpeta del proyecto)*.

---

## Paso 2: Conectar con Vercel

1.  Ve a [Vercel.com](https://vercel.com/dashboard) y haz clic en **"Add New..."** -> **"Project"**.
2.  Verás una lista de tus repositorios de GitHub. Importa `portafolio-personal` (botón "Import").
3.  En la pantalla de configuración ("Configure Project"):
    - **Framework Preset**: Debería detectar "Vite" automáticamente. Si no, selecciónalo.
    - **Root Directory**: `./` (Déjalo así).
    - **Build Command**: `npm run build` (Déjalo así).
    - **Output Directory**: `dist` (Déjalo así).
4.  Haz clic en **"Deploy"**.

---

## ¡Listo!
Vercel construirá tu sitio en unos segundos. Cuando termine, te dará una URL (ej. `portafolio-diego.vercel.app`) que ya puedes compartir en LinkedIn, WhatsApp y tu CV.

### Actualizaciones Futuras
Cada vez que hagas un cambio en tu computadora:
1.  Guarda los archivos.
2.  Ejecuta en terminal:
    ```bash
    git add .
    git commit -m "Actualización de contenido"
    git push
    ```
3.  Vercel detectará el cambio y actualizará la web automáticamente en segundos.
