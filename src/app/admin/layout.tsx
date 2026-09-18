import type { ReactNode } from "react";
import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { Container } from "@/components/ui/Container";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 py-10">
      <Container>
        <div className="space-y-6">
          <p className="text-xs text-cacao">
            <Link href="/" className="hover:text-vino">
              ← Sitio público
            </Link>
          </p>
          <PlaceholderNote>
            Panel admin sin auth real. TODO: proteger /admin y /api/admin (ver
            src/lib/admin/auth.ts).
          </PlaceholderNote>
          <AdminNav />
          {children}
        </div>
      </Container>
    </main>
  );
}
