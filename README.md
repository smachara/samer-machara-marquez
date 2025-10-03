# Run and deploy 

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19gR20djd669G9sX2E4yp5J8ZDN7P9Gsi

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
---


    Prerrequisitos: Asegúrate de tener Node.js (que incluye npm) instalado en tu computadora.

    Crea un Repositorio: Ve a GitHub y crea un nuevo repositorio. Por ejemplo, llámalo cv-samer-machara.

    ¡Paso Crítico! Actualiza la Configuración:

        Abre el nuevo archivo vite.config.ts.

        Busca la línea base: '/YOUR_REPO_NAME/',.

        Reemplaza YOUR_REPO_NAME con el nombre exacto de tu repositorio de GitHub. Siguiendo el ejemplo, quedaría: base: '/cv-samer-machara/',.

    Instala las Dependencias:

        Abre una terminal o línea de comandos en la carpeta de tu proyecto.

        Ejecuta el comando: npm install. Esto descargará todas las librerías necesarias (React, Vite, etc.).

    Compila tu Proyecto:

        En la misma terminal, ejecuta el comando: npm run build.

        Este comando creará una nueva carpeta llamada dist que contiene la versión final y optimizada de tu CV.

    Sube tu Código a GitHub:

        Sube todos los archivos de tu proyecto (incluyendo la nueva carpeta dist) a tu repositorio de GitHub.

    Configura GitHub Pages:

        En la página de tu repositorio en GitHub, ve a Settings > Pages.

        En la sección "Build and deployment", bajo "Source", selecciona Deploy from a branch.

        En "Branch", asegúrate de que esté seleccionada tu rama principal (main o master) y, justo al lado, selecciona la carpeta /dist.

        Haz clic en Save.

    ¡Listo!

        Espera unos minutos a que GitHub Pages despliegue tu sitio.

        Podrás acceder a tu CV en la URL que te indicará en esa misma página de configuración. Será algo como: https://smachara.github.io/cv-samer-machara/.
