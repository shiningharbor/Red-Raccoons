# Red Raccoons — Sitio rediseñado

Sitio web en Next.js App Router (15) y React 19, con identidad visual en negro, rojo y tonos neutros. Se conservó el logo original de `public/red.png` y las imágenes/contenido existentes.

## Iniciar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para validar la versión de producción:

```bash
npm run build
npm run start
```

## Páginas y URLs

- `/` — portada editorial
- `/integrantes` — fotografías de los cuatro integrantes; selecciona una fotografía o nombre para desplegar su descripción y enlace a Instagram
- `/musica` — sección musical (próximamente)
- `/momentos` — galería de videos con reproductor
- `/fechas` — póster de próximas fechas (sin inventar fechas)
- `/contrataciones` — contacto vía Instagram

**Importante:** ahora cada sección es una ruta real, no un cambio de estado dentro de `/`. Abrir una URL directamente, actualizarla o compartirla funciona como se espera en Next.js. Los enlaces del menú usan `next/link`.

## Actualizar contenido

- **Integrantes**: `app/lib/content.ts` (`members`), con fotografías, presentaciones personales y redes de cada uno. Las descripciones se abren al seleccionar el perfil.
- **Galería inicial**: `app/lib/content.ts` (`originalMoments`), con tres videos originales. Abre cada tarjeta para reproducirla.
- **Galería automática opcional**: llena `.env.local` basándote en `.env.example` y agrega videos o imágenes a la carpeta `Red-Raccoons/Momentos/` de Cloudinary. El endpoint `/api/cloudinary` trae recursos adicionales (sin duplicados por URL). Si no se configuran credenciales, los videos originales siguen disponibles.
- **Fechas**: se mantiene “Por anunciar” porque no se proporcionaron eventos confirmados. Cuando existan, actualiza `app/fechas/page.tsx`.
- **Contacto**: se conserva el perfil Instagram original; no se inventa teléfono ni correo.

## Ajuste de textos (versión actual)

Se mantuvo el diseño de la primera versión y se cambió únicamente la redacción y la presentación de las fichas. La portada usa la presentación y el párrafo facilitados por Red Raccoons. Se eliminaron las frases promocionales que no reflejaban la voz de la banda, por ejemplo "Venimos a hacer ruido" y "The Gang".

- **Portada**: `app/page.tsx`.
- **Bios, instrumentos e Instagram**: `app/lib/content.ts`.
- **Música, Momentos, Fechas, Contacto**: `app/musica/page.tsx`, `app/momentos/page.tsx`, `app/fechas/page.tsx`, `app/contrataciones/page.tsx`.
- **Pie y menú**: `app/components/site-footer.tsx`, `app/components/site-header.tsx`.
- **Nombres de videos**: `app/lib/content.ts` (nombres neutrales: Video 01, 02, 03).

Los textos descriptivos y la estructura del sitio pueden editarse sin cambiar las imágenes, colores o rutas. Las fechas siguen sin añadirse hasta que se confirmen.

## Identidad y diseño

El branding negro / rojo original se mantiene. Cada página tiene su propio lenguaje visual: portada tipográfica, fichas de integrantes, vinilo musical, galería de momentos, póster de concierto y contacto de alto impacto. El CSS está organizado por secciones en `app/globals.css`. Incluye diseño adaptable, navegación móvil, estados `:focus-visible`, animaciones moderadas y compatibilidad con `prefers-reduced-motion`.

## Publicación en red-raccoons.com

Sube este proyecto al hosting que hoy sirve el dominio (por ejemplo Vercel), ejecuta el build y despliega. **El cambio de URLs no requiere cambiar el dominio**: tu dominio seguirá siendo `red-raccoons.com` y Next.js atenderá las rutas `/momentos`, `/fechas`, etc. Verifica en tu hosting que todas las rutas se deleguen a Next.js (no a un HTML estático antiguo).
