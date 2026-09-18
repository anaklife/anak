# ANAK

Sistema digital de **ANAK**, marca de Pilates / movimiento / bienestar (Bogotá, Colombia).

Este repositorio es el **scaffold técnico**: arquitectura, rutas y placeholders.  
**Paleta de marca ya está cargada.** El producto ANAK **no es una copia de GAL'S** (solo el nivel técnico). Logo, tipografías, fotos y copy final llegan después.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Deploy previsto en **Vercel**
- Integraciones futuras (stubs): Mercado Pago, Resend, Supabase

## Cómo correr

```bash
npm i
npm run dev
```

Otras scripts: `npm run build` · `npm run start` · `npm run lint`

Copiar variables de entorno:

```bash
cp .env.example .env.local
```

No hace falta completarlas para levantar el scaffold.

## Mapa de rutas

| Ruta | Qué es |
| --- | --- |
| `/` | Homepage (clases, eventos, matcha, retos, Balance Club) |
| `/tree` | Link-in-bio ANAK |
| `/eventos` | Eventos especiales |
| `/admin` | Resumen del panel |
| `/admin/eventos` | Listado interno de eventos |
| `/admin/eventos/nuevo` | Crear / editar (stub) |
| `/admin/inscritos` | Inscritos (stub) |
| `/admin/correos` | Emails (stub Resend) |
| `/admin/comunidad` | Balance Club |
| `/api/eventos` | Stub eventos |
| `/api/admin` | Stub admin |
| `/api/comunidad` | Stub comunidad |
| `/api/pagos` | Stub Mercado Pago |
| `/api/email` | Stub Resend |

## Qué está implementado vs pendiente

**Implementado (esta fase)**
- App compilable con App Router + TS + Tailwind
- Arquitectura de carpetas
- Páginas placeholder home / tree / eventos / admin
- Constantes públicas de contacto
- Stubs de pagos, email, Supabase y APIs
- Paleta oficial ANAK (`src/lib/brand.ts`)
- Secciones de producto ANAK (no GAL'S)
- SEO / Open Graph placeholders (indexación apagada hasta el dominio)

**Pendiente**
- Logo, tipografías de marca, fotos y copy
- Homepage y tree diseñados
- Eventos especiales reales, registro y checkout
- Auth admin, CSV, sync
- Balance Club / CRM

## Paleta

Tokens: `hueso` `#E9DCD3` · `vino` `#3E0F19` · `cacao` `#513B2E` · `negro` `#000000` · `blanco` `#FFFFFF` · `malva` `#B59797` · `arena` `#B49D8B`.

Referencia visual en `public/brand/`.

## Secciones de producto ANAK

1. Clases con Anak
2. Eventos especiales
3. Talleres de matcha
4. Retos Anak
5. Balance Club

## WhatsApp

1. **Contacto** → `WHATSAPP_URL` en `src/lib/constants.ts`.
2. **Balance Club / grupos pagos** → invites solo servidor, si aplican. Nunca en el cliente. Ver `src/lib/comunidad/invites.ts`.

## Assets

- `public/brand/` — paleta cargada; logo pendiente
- `public/media/` — fotos, polaroids, video

## Documentación

- `docs/architecture.md` — sistema y carpetas
- `docs/roadmap.md` — fases
- `AGENTS.md` — reglas para futuros agents
