import "server-only";

/**
 * Invites de grupos pagos (Plus / VIP).
 * Solo importar desde Server Components o Route Handlers.
 * Nunca exponer estas URLs en el bundle del cliente.
 */

export function getPaidWhatsAppInvites() {
  return {
    plus: process.env.WHATSAPP_PLUS_INVITE_URL ?? null,
    vip: process.env.WHATSAPP_VIP_INVITE_URL ?? null,
  };
}
