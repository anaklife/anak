"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { NAV_ITEMS } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-arena/40 bg-hueso/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <BrandLogo preload className="h-11 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-4 text-xs font-semibold tracking-[0.1em] text-negro uppercase md:flex lg:gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-vino">
              {item.label}
            </Link>
          ))}
          <Link
            href={WHATSAPP_URL}
            className="rounded-full bg-vino px-4 py-2 text-hueso hover:bg-negro"
          >
            Escribir
          </Link>
        </nav>

        <button
          type="button"
          className="text-xs font-bold tracking-[0.16em] text-vino uppercase md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <nav className="grid gap-3 border-t border-arena/40 px-5 py-4 text-xs font-semibold tracking-[0.14em] text-negro uppercase md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="py-1" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href={WHATSAPP_URL} className="text-vino" onClick={() => setOpen(false)}>
            WhatsApp
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
