import "server-only";

/**
 * Stub admin Supabase (service role).
 * Solo servidor. No usar en componentes cliente.
 */

export function getSupabaseAdminClient(): null {
  return null;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
