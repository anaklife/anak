/**
 * Stub de miembros / membresías de comunidad.
 * CRM, sync y planes Plus/VIP se definen en fases posteriores.
 */

export type Miembro = {
  id: string;
  plan: "free" | "plus" | "vip";
};

export async function listarMiembros(): Promise<Miembro[]> {
  return [];
}
