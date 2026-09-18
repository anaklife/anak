import Link from "next/link";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { BrandFlor } from "@/components/site/BrandFlor";
import { BrandLogo } from "@/components/site/BrandLogo";
import { NAV_ITEMS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-negro text-hueso">
      <BrandFlor
        tone="hueso"
        size={160}
        className="animate-flor-spin absolute -right-6 -bottom-8 w-28 opacity-15 md:w-36"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div className="flex flex-col items-center space-y-3 md:items-start">
          <BrandLogo variant="claro" className="h-12 w-auto sm:h-14" />
          <p className="text-xs font-medium tracking-wide text-hueso/70">
            Coach de barré
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-[11px] font-bold tracking-[0.14em] uppercase md:justify-end">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-malva">
              {item.label}
            </Link>
          ))}
          <Link href="/tree" className="hover:text-malva">
            Tree
          </Link>
          <a href={INSTAGRAM_URL} className="hover:text-malva">
            {INSTAGRAM_HANDLE}
          </a>
        </nav>
      </div>
    </footer>
  );
}
