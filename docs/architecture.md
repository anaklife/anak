# Arquitectura — ANAK

Producto digital de ANAK: sitio, `/tree`, eventos especiales, Balance Club y (después) registro/pagos/admin.

El **nivel técnico** se inspira en un sistema previo (GAL'S). El **producto no**: ANAK tiene clases con Anak, eventos especiales, talleres de matcha, retos Anak y Balance Club. Paleta en `src/lib/brand.ts`.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion. Deploy en Vercel.

Stubs (sin SDK real): Mercado Pago, Resend, Supabase.

## Mapa de rutas

- **Sitio:** `/` (anclas `#clases` `#matcha` `#retos` `#balance-club`, bloque `#oferta`)
- **Tree:** `/tree`
- **Eventos especiales:** `/eventos`
- **Admin:** `/admin`, `/admin/eventos`, `/admin/eventos/nuevo`, `/admin/inscritos`, `/admin/correos`, `/admin/comunidad`
- **API stubs:** `/api/eventos`, `/api/admin`, `/api/comunidad`, `/api/pagos`, `/api/email`

SEO: `metadata` + Open Graph placeholders. `robots.ts` deja `disallow: /` hasta definir dominio canónico (`NEXT_PUBLIC_SITE_URL`).

## Carpetas

```
anak/
  README.md
  AGENTS.md
  .env.example
  public/
    media/          # fotos / video futuros
    brand/          # logo futuro
  src/
    app/
      (site)/       # homepage, /tree, /eventos (navbar + footer)
      admin/        # panel (sin chrome de marketing)
      api/          # stubs 501
    components/
      site/         # Navbar, Hero, Footer, CTAs
      tree/
      eventos/
      admin/
      ui/           # primitives neutros
    lib/
      constants.ts  # contactos públicos
      site.ts
      tree.ts
      eventos.ts
      admin/        # nav + auth stub
      payments/     # stub MP
      email/        # stub Resend
      comunidad/    # miembros + invites server-only
      supabase/     # client/admin stubs
      api/          # helper 501
  supabase/         # SQL futuro
  docs/
```

## Producto ANAK ≠ GAL'S

| Sección | Ruta |
| --- | --- |
| Clases con Anak | `/#clases` |
| Eventos especiales | `/eventos` |
| Talleres de matcha | `/#matcha` |
| Retos Anak | `/#retos` |
| Balance Club | `/#balance-club` |

## WhatsApp

| Canal | Dónde vive | Uso |
| --- | --- | --- |
| Contacto | `constants.ts` (`WHATSAPP_URL`) | Chat del negocio |
| Balance Club / pagos | env server-only (`src/lib/comunidad/invites.ts`) | Invites, si aplican; nunca en cliente |

## Qué está hecho vs pendiente

Hecho: scaffold compilable, rutas, componentes placeholder, constantes, stubs, docs.

Pendiente: identidad, UI branded, checkout, emails reales, auth admin, DB, CRM.

## Cómo correr

`npm i` y `npm run dev`. Variables en `.env.example` (copiar a `.env.local`). Secretos nunca en el repo.
