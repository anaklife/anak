"use client";

import { useEffect, useRef, useState } from "react";
import { BrandFlor } from "@/components/site/BrandFlor";
import { EXPERIENCIA } from "@/lib/site";
import { FadeUp } from "@/components/ui/FadeUp";
import { VideoLoop } from "@/components/ui/VideoLoop";

export function Experiencia() {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const track = scroller.current;
    const node = track?.querySelector<HTMLElement>(`[data-moment="${i}"]`);
    if (!track || !node) return;
    track.scrollTo({ left: node.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % EXPERIENCIA.length;
        const track = scroller.current;
        const node = track?.querySelector<HTMLElement>(`[data-moment="${next}"]`);
        if (track && node) {
          track.scrollTo({ left: node.offsetLeft - track.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 5500);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="experiencia" className="relative overflow-hidden px-5 py-20">
      <BrandFlor
        tone="cacao"
        size={140}
        className="hero-flor animate-flor-spin pointer-events-none absolute top-8 left-2 w-20 opacity-60 md:w-28"
      />

      <FadeUp className="relative mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-black text-vino uppercase md:text-6xl">
          Experiencia ANAK
        </h2>
        <p className="font-serif mx-auto mt-4 max-w-lg text-lg leading-8 text-negro/75">
          Lo que se siente estar aquí: presencia, guía, encuentro y ritual.
        </p>
      </FadeUp>

      <div
        ref={scroller}
        className="hide-scrollbar relative mx-auto flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
      >
        {EXPERIENCIA.map((moment, i) => (
          <article
            key={moment.title}
            data-moment={i}
            className="w-[min(85vw,22rem)] shrink-0 snap-center overflow-hidden rounded-[1.6rem] bg-blanco ring-1 ring-arena/35"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-vino">
              <VideoLoop
                src={moment.src}
                poster={moment.poster}
                preload={i === active ? "metadata" : "none"}
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
            <div className="space-y-3 p-5">
              <p className="text-[11px] font-bold tracking-[0.22em] text-malva uppercase">
                {moment.kicker} · {moment.title}
              </p>
              <p className="font-serif text-base leading-7 text-negro/80">{moment.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {EXPERIENCIA.map((moment, i) => (
          <button
            key={moment.title}
            type="button"
            aria-label={`Ver ${moment.title}`}
            aria-current={i === active ? true : undefined}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-vino" : "w-2 bg-arena hover:bg-vino/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
