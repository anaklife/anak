import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";

export const metadata: Metadata = {
  title: "Admin · Inscritos",
};

export default function AdminInscritosPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Inscritos"
        description="Registro de asistentes. Export CSV y sync son TODO."
      />
      <PlaceholderCard title="Tabla">
        <p>Sin inscritos. El flujo de registro se construye en la fase de eventos.</p>
      </PlaceholderCard>
    </div>
  );
}
