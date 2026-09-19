# ANAK — reglas para agents

Marca de **Pilates / movimiento / bienestar** (Bogotá, Colombia, contexto latino).

## Qué hacer
- Construir y mantener el sistema digital: sitio, `/tree`, eventos, admin, comunidad.
- Preferir componentes pequeños y rutas claras.
- Documentar y responder en **español**.

## Qué no hacer
- No inventar logo, tipografías de marca ni fotos.
- Usar la paleta oficial de `src/lib/brand.ts` (no inventar hex).
- No copiar copy, branding ni **secciones de producto** de GAL'S. ANAK no es el mismo negocio: clases con Anak, eventos especiales, talleres de matcha, retos Anak y Balance Club.
- No hardcodear secrets ni invites de WhatsApp Plus/VIP en el cliente.
- No implementar Mercado Pago, Resend ni Supabase reales hasta la fase correspondiente (stubs sí).

## Producto ANAK (secciones)
1. Clases con Anak
2. Eventos especiales
3. Talleres de matcha
4. Retos Anak
5. Balance Club (comunidad / club propio; no planes Plus/VIP de otro estudio)

## WhatsApp
1. **Contacto** — número de negocio (`WHATSAPP_URL`).
2. **Balance Club / grupos** — invites solo server-side si aplican (`src/lib/comunidad/invites.ts`). Nunca en el cliente.

## Identidad
Paleta oficial en `src/lib/brand.ts`. Logo, tipografías y fotos siguen pendientes.

## Viewport / iOS (obligatorio)
Safari de iPhone usa un `vh` más alto que la pantalla visible. Eso ya rompió el hero en producción.

- Nunca `100vh` / `68vh` / `92vh` para recortar fotos o pantallas. Usar `svh`/`dvh` o `aspect-*`.
- Nunca `-mb-*` ni `translate-Y` para “pegar” marquees o secciones encima de una foto.
- Recortes de foto: `aspect-ratio` + `object-fit` + `object-position`. El overlay se ancla a la foto (`top-[12%]`), no al viewport.
- `position: fixed` (WhatsApp) y fondos a pantalla completa: `env(safe-area-inset-*)` **y** `var(--safari-chrome-bottom)` (lo setea `ViewportSafe`). El safe-area no cubre la barra de Safari.
- Un screenshot de Cursor / Chrome desktop no vale como prueba de iPhone.
- Home, `/tree` y `/posturas` tienen que sobrevivir iPhone SE, iPhone con Dynamic Island y Safari con barras visibles.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
