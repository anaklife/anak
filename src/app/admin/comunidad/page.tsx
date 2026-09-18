import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export const metadata: Metadata = {
  title: "Admin · Comunidad",
};

export default function AdminComunidadPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Balance Club"
        description="Comunidad ANAK. No clonar membresías Plus/VIP de otro estudio."
      />
      <PlaceholderNote>
        Invites de grupos pagos, si aplican, viven en env server-only. El
        producto de comunidad de ANAK es Balance Club (detalle TBD).
      </PlaceholderNote>
      <PlaceholderCard title="Canales">
        <ul className="list-disc space-y-1 pl-4">
          <li>WhatsApp de contacto — público</li>
          <li>Balance Club — comunidad / club ANAK</li>
          <li>Invites pagos — solo servidor, si existen</li>
        </ul>
      </PlaceholderCard>
    </div>
  );
}
