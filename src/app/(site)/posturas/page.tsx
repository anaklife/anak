import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandFlor } from "@/components/site/BrandFlor";
import { PosturasBackdrop } from "@/components/site/PosturasBackdrop";
import { PosturasVideoFrame } from "@/components/site/PosturasVideoFrame";
import { POSTURAS } from "@/lib/posturas";

export const metadata: Metadata = {
  title: "7 posturas para empezar el día",
  description:
    "Una práctica ANAK: siete posturas, cinco respiraciones en cada una. Un video para abrir el día.",
};

function WhatsappMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-hueso" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function PosturasPage() {
  return (
    <div className="relative overflow-x-hidden px-5 py-10 md:py-14">
      <PosturasBackdrop />
      <BrandFlor
        tone="cacao"
        size={220}
        className="hero-flor animate-flor-spin pointer-events-none absolute top-24 -left-8 hidden w-28 opacity-45 lg:block"
      />
      <BrandFlor
        tone="arena"
        size={200}
        className="hero-flor animate-flor-spin-rev pointer-events-none absolute top-40 -right-6 hidden w-28 opacity-40 lg:block"
      />
      <BrandFlor
        tone="cacao"
        size={180}
        className="hero-flor animate-flor-spin pointer-events-none absolute right-4 bottom-32 hidden w-24 opacity-35 lg:block"
      />
      <BrandFlor
        tone="arena"
        size={160}
        className="hero-flor animate-flor-spin-rev pointer-events-none absolute bottom-24 left-6 hidden w-20 opacity-35 lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex min-w-0 flex-col gap-4">
          <aside className="rounded-[1.6rem] bg-blanco shadow-[0_12px_32px_rgba(62,15,25,0.08)]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-[1.6rem] bg-hueso">
              <Image
                src={POSTURAS.hero}
                alt="7 posturas para empezar el día — ANAK"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-contain object-center p-2 md:p-3"
                priority
              />
            </div>

            <div className="space-y-4 p-5">
              <ul className="flex flex-wrap gap-2">
                {POSTURAS.pills.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full bg-hueso px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-cacao uppercase"
                  >
                    {pill}
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-malva uppercase">
                  {POSTURAS.startLine}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-negro">
                  {POSTURAS.tags.join(" · ")}
                </p>
              </div>

              <div className="border-t border-arena/25 pt-4">
                <p className="text-[10px] font-bold tracking-[0.18em] text-malva uppercase">
                  Detalles
                </p>
                <p className="mt-2 text-sm leading-6 text-negro/75">
                  {POSTURAS.details}
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-[1.6rem] bg-malva px-5 py-6 text-cacao">
            <p className="text-xl font-black tracking-tight uppercase">
              {POSTURAS.ctaTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-cacao/80">
              {POSTURAS.ctaBody}
            </p>
            <Link
              href={POSTURAS.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cacao px-4 py-3 text-[11px] font-bold tracking-[0.14em] text-hueso uppercase hover:bg-negro"
            >
              <WhatsappMark />
              {POSTURAS.whatsapp.label}
            </Link>
          </div>
        </div>

        <section className="mx-auto flex w-full max-w-[33rem] min-w-0 flex-col overflow-visible rounded-[1.8rem] bg-blanco/70 shadow-[0_12px_32px_rgba(62,15,25,0.06)] ring-1 ring-arena/20 lg:mx-0">
          <header className="px-5 pt-5 pb-2 md:px-6 md:pt-6">
            <p className="text-[11px] font-bold tracking-[0.22em] text-malva uppercase">
              {POSTURAS.kicker}
            </p>
            <h1 className="mt-1.5 text-[1.65rem] leading-[1.15] font-black tracking-tight text-negro uppercase md:text-[1.75rem]">
              {POSTURAS.title}
            </h1>
            <p className="font-serif mt-1 text-base text-vino italic">
              {POSTURAS.eyebrow}
            </p>
          </header>

          <div className="px-5 pt-3 pb-6 md:px-6 md:pb-7">
            <PosturasVideoFrame />
          </div>
        </section>
      </div>
    </div>
  );
}
