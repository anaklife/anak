import type { Metadata } from "next";
import Link from "next/link";
import { BrandFlor } from "@/components/site/BrandFlor";
import { EventosList } from "@/components/eventos/EventosList";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { EVENTO_VIDEOS } from "@/lib/media";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Eventos especiales",
  description: "Eventos especiales de ANAK. Agenda distinta a las clases regulares.",
};

export default function EventosPage() {
  const featured = EVENTO_VIDEOS[0];

  return (
    <div className="relative mx-auto max-w-5xl px-5 py-16">
      <BrandFlor
        tone="arena"
        size={140}
        className="animate-flor-spin absolute top-8 right-2 w-16 opacity-40 md:w-24"
      />
      <p className="text-[11px] font-bold tracking-[0.28em] text-malva uppercase">Agenda</p>
      <h1 className="mt-3 text-4xl font-black text-vino uppercase md:text-5xl">
        Eventos especiales
      </h1>
      <p className="font-serif mt-4 max-w-xl text-lg leading-8 text-negro/75">
        Encuentros con fecha propia: fuera del calendario de clases. Cuando
        haya una edición abierta, vive aquí.
      </p>

      <div className="mx-auto mt-10 max-w-sm">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-blanco ring-1 ring-arena/35">
          <VideoLoop
            src={featured.src}
            poster={featured.poster}
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vino/70 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 text-[11px] font-bold tracking-[0.2em] text-hueso uppercase">
            Edición especial
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <EventosList />
        <Link
          href={WHATSAPP_URL}
          className="mt-8 inline-block rounded-full bg-vino px-6 py-3 text-xs font-bold tracking-[0.16em] text-hueso uppercase hover:bg-negro"
        >
          Preguntar por el próximo evento
        </Link>
      </div>
    </div>
  );
}
