import Image from "next/image";
import { LOGOS } from "@/lib/media";

const VARIANT = {
  lockup: { src: LOGOS.oficial, width: 1487, height: 611 },
  claro: { src: LOGOS.oficialClaro, width: 1487, height: 611 },
} as const;

export function BrandLogo({
  variant = "lockup",
  className = "h-11 w-auto",
  preload = false,
}: {
  variant?: keyof typeof VARIANT;
  className?: string;
  preload?: boolean;
}) {
  const logo = VARIANT[variant];

  return (
    <Image
      src={logo.src}
      alt="ANAK"
      width={logo.width}
      height={logo.height}
      preload={preload}
      unoptimized
      className={`object-contain ${className}`}
    />
  );
}
