/**
 * Stub de autenticación admin.
 *
 * TODO: proteger /admin y /api/admin.
 * Opciones posibles: password env (`ADMIN_PASSWORD`), sesión, o Auth de Supabase.
 * No implementar login real en esta fase.
 */

export function isAdminAuthConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function assertAdminNotImplemented(): never {
  throw new Error("Auth admin no implementada todavía.");
}
