import Image from "next/image";
import { LOGOS } from "@/lib/media";

const TONE = {
  cacao: LOGOS.florCacao,
  arena: LOGOS.florArena,
  hueso: LOGOS.florHueso,
} as const;

export function BrandFlor({
  tone = "arena",
  className = "",
  size = 140,
}: {
  tone?: keyof typeof TONE;
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={TONE[tone]}
      alt=""
      width={size}
      height={size}
      unoptimized
      className={`pointer-events-none select-none bg-transparent ${className}`}
      aria-hidden
    />
  );
}
