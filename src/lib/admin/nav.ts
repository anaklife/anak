/**
 * Navegación conceptual del admin.
 * Auth, sync y CSV son TODO — no hay lógica completa todavía.
 */

export const ADMIN_NAV = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/eventos", label: "Eventos" },
  { href: "/admin/inscritos", label: "Inscritos" },
  { href: "/admin/correos", label: "Correos" },
  { href: "/admin/comunidad", label: "Balance Club" },
  { href: "/admin/eventos/nuevo", label: "Crear evento" },
] as const;
