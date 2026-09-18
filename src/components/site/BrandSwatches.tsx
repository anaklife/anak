import { BRAND } from "@/lib/brand";

const SWATCHES = [
  { id: "hueso", label: "Hueso", hex: BRAND.hueso, className: "bg-hueso" },
  { id: "vino", label: "Vino", hex: BRAND.vino, className: "bg-vino" },
  { id: "cacao", label: "Cacao", hex: BRAND.cacao, className: "bg-cacao" },
  { id: "negro", label: "Negro", hex: BRAND.negro, className: "bg-negro" },
  { id: "blanco", label: "Blanco", hex: BRAND.blanco, className: "bg-blanco" },
  { id: "malva", label: "Malva", hex: BRAND.malva, className: "bg-malva" },
  { id: "arena", label: "Arena", hex: BRAND.arena, className: "bg-arena" },
] as const;

export function BrandSwatches() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-7">
      {SWATCHES.map((swatch) => (
        <li key={swatch.id} className="space-y-1">
          <span
            className={`block h-14 rounded-md border border-arena/40 ${swatch.className}`}
            title={`${swatch.label} ${swatch.hex}`}
          />
          <span className="block text-[10px] uppercase tracking-wide text-cacao">
            {swatch.label}
          </span>
          <span className="block font-mono text-[10px] text-cacao/80">{swatch.hex}</span>
        </li>
      ))}
    </ul>
  );
}
