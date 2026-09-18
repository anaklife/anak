import type { Metadata } from "next";
import { EventosList } from "@/components/eventos/EventosList";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export const metadata: Metadata = {
  title: "Admin · Eventos",
};

export default function AdminEventosPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Eventos"
        description="Listado interno. Crear / editar se implementa en una fase posterior."
      />
      <PlaceholderNote>
        Auth stub comentada en src/lib/admin/auth.ts. Esta ruta aún es pública.
      </PlaceholderNote>
      <EventosList />
    </div>
  );
}
