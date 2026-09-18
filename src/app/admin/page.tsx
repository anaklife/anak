import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminResumenPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Resumen"
        description="Vista conceptual. Métricas, sync y export CSV llegan después."
      />
      <PlaceholderCard title="Estado del sistema">
        <ul className="list-disc space-y-1 pl-4">
          <li>Sitio / tree / eventos: scaffold</li>
          <li>Pagos y emails: stubs</li>
          <li>Auth admin: pendiente</li>
        </ul>
      </PlaceholderCard>
    </div>
  );
}
