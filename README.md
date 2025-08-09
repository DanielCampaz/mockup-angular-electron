

Npm Run Package
  Objetivo → Genera la carpeta con la aplicación lista para ejecutar, pero sin instalador.
  Se usa cuando quieres probar cómo queda la app ya empacada antes de crear un instalador.
  El resultado es una carpeta con el ejecutable (.exe, .app, etc.) que puedes abrir directamente.

Npm Run Make
  Objetivo → Genera el instalador para la plataforma actual (o para las que configures).
  Produce archivos como .exe (Windows), .dmg o .pkg (macOS), .deb o .AppImage (Linux).
  Es el comando que más se usa cuando quieres entregar tu app a un usuario final.

Npm Run Publisher
  Objetivo → Sube la build generada por make a un servidor o repositorio (GitHub Releases, Amazon S3, etc.).
  Solo se usa si tienes configurado publishers en tu forge.config.ts.
  Útil para auto-actualizaciones y distribución

Los Iconos para la aplicacion debe de ser 

Windows
256×256 .co

MacOs
512×512 .icns (1024×1024 para Pantallas Retina)

Linux
512×512 .png

Para subir una Realese se debe de crear un tag despues del commit y subir el tag a github

... git add, commit , push a la rama normal y se hace el tag cuando se quiera
git tag v1.0.0
git push origin v1.0.0

Hacer github actioin que resuma esto
