import Link from "next/link";
import { BrandFlor } from "@/components/site/BrandFlor";
import { WHATSAPP_URL } from "@/lib/constants";
import { FadeUp } from "@/components/ui/FadeUp";

export function CtaBand() {
  return (
    <section className="px-5 pb-20">
      <FadeUp>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-vino px-6 py-14 text-center text-hueso">
          <BrandFlor
            tone="hueso"
            size={160}
            className="animate-flor-spin absolute -top-8 -left-6 w-24 opacity-20 md:w-36"
          />
          <BrandFlor
            tone="hueso"
            size={130}
            className="animate-flor-spin-rev absolute -right-8 -bottom-8 w-20 opacity-15 md:w-28"
          />
          <div className="relative z-10">
            <p className="text-[11px] font-bold tracking-[0.28em] text-malva uppercase">
              Próximo paso
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              ¿Empezamos por una clase?
            </h2>
            <p className="font-serif mx-auto mt-4 max-w-md text-lg leading-8 text-hueso/85">
              Clases, matcha, retos o Balance Club. Escríbeme para
              cupos y fechas. El club no se publica como invite abierto.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={WHATSAPP_URL}
                className="rounded-full bg-hueso px-6 py-3 text-xs font-bold tracking-[0.16em] text-vino uppercase hover:bg-blanco"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
