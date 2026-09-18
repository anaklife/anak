import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderCard } from "@/components/ui/PlaceholderCard";

export const metadata: Metadata = {
  title: "Admin · Correos",
};

export default function AdminCorreosPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        kicker="Admin"
        title="Correos"
        description="Plantillas transaccionales y marketing vía Resend (stub)."
      />
      <PlaceholderCard title="Resend">
        <p>No se envían emails todavía. Ver src/lib/email/resend.ts y /api/email.</p>
      </PlaceholderCard>
    </div>
  );
}
