import Image from "next/image";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, SITE_ROLE } from "@/lib/constants";
import { BrandFlor } from "@/components/site/BrandFlor";
import { LOGOS, PHOTOS } from "@/lib/media";
import { FadeUp } from "@/components/ui/FadeUp";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2"
    >
      <BrandFlor
        tone="arena"
        size={120}
        className="hero-flor animate-flor-drift pointer-events-none absolute -top-4 left-2 w-16 opacity-50 md:-left-4"
      />

      <FadeUp>
        <p className="text-[11px] font-bold tracking-[0.28em] text-malva uppercase">
          {SITE_ROLE}
        </p>
        <h2 className="mt-3 text-3xl font-black text-vino uppercase md:text-5xl">
          Un poco sobre mí
        </h2>
        <a
          href={INSTAGRAM_URL}
          className="mt-5 inline-flex rounded-full bg-malva px-4 py-2 text-xs font-bold tracking-[0.14em] text-vino uppercase"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <div className="font-serif mt-6 space-y-4 text-lg leading-8 text-negro/80">
          <p>
            Soy Anak, coach de barré. ANAK nace de la práctica de presencia:
            fuerza, alineación y ritmo — un compromiso con el cuerpo, no una
            pose.
          </p>
          <p>
            Alrededor de las clases creció un universo propio: eventos
            especiales, talleres de matcha, retos Anak y Balance Club. Un
            espacio para volver a ti, una y otra vez.
          </p>
        </div>
        <div className="relative mt-8 h-20 w-48 overflow-hidden rounded-2xl">
          <Image
            src={LOGOS.balanceByAnak}
            alt="Balance by ANAK"
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>
      </FadeUp>

      <FadeUp delay={0.08} className="flex justify-center md:justify-end">
        <figure className="w-full max-w-[22rem] rotate-[2deg] bg-blanco p-3 pb-14 shadow-[0_18px_40px_color-mix(in_srgb,var(--vino)_16%,transparent)] sm:max-w-[26rem]">
          <div className="relative aspect-[4/5] overflow-hidden bg-hueso">
            <Image
              src={PHOTOS.paper}
              alt="ANAK — coach de barré"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </figure>
      </FadeUp>
    </section>
  );
}
