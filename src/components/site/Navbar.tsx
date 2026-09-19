"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { NAV_ITEMS } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-arena/40 bg-hueso/55 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-2.5 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))]">
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
          className="flex h-10 w-10 items-center justify-center text-vino md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 h-[1.5px] w-full bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="grid justify-items-center gap-3 border-t border-arena/40 py-4 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] text-center text-xs font-semibold tracking-[0.14em] text-negro uppercase md:hidden">
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
