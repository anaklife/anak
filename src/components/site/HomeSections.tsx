"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BrandFlor } from "@/components/site/BrandFlor";
import { HOME_SECTIONS } from "@/lib/site";
import { FadeUp } from "@/components/ui/FadeUp";
import { VideoLoop } from "@/components/ui/VideoLoop";

export function HomeSections() {
  return (
    <section id="oferta" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <BrandFlor
        tone="arena"
        size={110}
        className="animate-flor-spin mx-auto mb-2 block w-14 opacity-50"
      />
      <FadeUp className="mb-10 text-center">
        <p className="text-[11px] font-bold tracking-[0.28em] text-malva uppercase">
          Oferta ANAK
        </p>
        <h2 className="mt-3 text-3xl font-black text-vino uppercase md:text-5xl">
          Cuatro formas de habitar
        </h2>
      </FadeUp>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOME_SECTIONS.map((section, i) => (
          <FadeUp key={section.id} delay={i * 0.06}>
            <motion.article
              id={section.id}
              className="scroll-mt-24 overflow-hidden rounded-[1.6rem] bg-blanco"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-vino">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <VideoLoop
                    src={section.video}
                    poster={section.image}
                    preload={i < 2 ? "metadata" : "none"}
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vino/80 via-vino/10 to-transparent" />
                <p className="absolute bottom-4 left-4 text-[11px] font-bold tracking-[0.22em] text-hueso uppercase">
                  {section.kicker}
                </p>
                {"logo" in section ? (
                  <div className="absolute top-3 right-3 h-10 w-24 overflow-hidden rounded-xl bg-hueso/90">
                    <Image
                      src={section.logo}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-black text-vino uppercase">{section.title}</h3>
                <p className="font-serif text-base leading-7 text-negro/75">{section.body}</p>
                <Link
                  href={section.ctaHref}
                  className="inline-block text-xs font-bold tracking-[0.16em] text-vino uppercase underline decoration-arena underline-offset-4 hover:decoration-vino"
                >
                  {section.cta}
                </Link>
              </div>
            </motion.article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
