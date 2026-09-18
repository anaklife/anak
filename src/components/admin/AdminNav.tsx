"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ADMIN_NAV } from "@/lib/admin/nav";

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2 border-b border-arena/50 pb-3">
      {ADMIN_NAV.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-1.5 text-sm ${
              active
                ? "bg-vino text-hueso"
                : "border border-arena/50 text-cacao hover:bg-blanco"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
