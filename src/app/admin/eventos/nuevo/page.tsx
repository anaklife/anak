import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";

export const metadata: Metadata = {
  title: "Admin · Crear evento",
};

export default function AdminNuevoEventoPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Crear / editar evento"
        description="Formulario pendiente. Aquí vivirá título, fecha, cupo, precio y publicación."
      />
      <PlaceholderCard title="Formulario">
        <p>Campos no implementados. Stub de arquitectura.</p>
      </PlaceholderCard>
    </div>
  );
}
