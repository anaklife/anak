import type { ReactNode } from "react";
import { ContactFloater } from "@/components/site/ContactFloater";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { SiteBackdrop } from "@/components/site/SiteBackdrop";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteBackdrop />
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactFloater />
      </div>
    </>
  );
}
