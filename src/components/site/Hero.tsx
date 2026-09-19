"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrandFlor } from "@/components/site/BrandFlor";
import { HeroTitle } from "@/components/site/HeroTitle";
import { HERO_SLIDES, type HeroAside, type HeroSlide } from "@/lib/media";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const INTERVAL_MS = 10000;
const FIRST_SLIDE: HeroSlide = HERO_SLIDES[0];

function HeroAsidePanel({
  aside,
  src,
  asidePos,
}: {
  aside: HeroAside;
  src: string;
  asidePos?: string;
}) {
  const large = aside.size === "lg";

  return (
    <motion.aside
      key={`${src}-aside`}
      className={`absolute ${asidePos ?? "top-[28%] right-8 hidden w-[12rem] text-right lg:block"}`}
      initial={{ y: 14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease, delay: 0.08 }}
    >
      <p
        className={`font-black leading-[0.8] text-vino/25 ${
          large
            ? "text-[clamp(6.5rem,11vw,10rem)]"
            : "text-[clamp(2.8rem,4.4vw,4rem)]"
        }`}
      >
        {aside.index}
      </p>
      <p
        className={`mt-3 font-bold tracking-[0.22em] text-malva uppercase ${
          large ? "text-lg" : "text-[11px]"
        }`}
      >
        {aside.label}
      </p>
      <ul className={`mt-6 space-y-1.5 ${large ? "mt-8 space-y-2" : ""}`}>
        {aside.words.map((word) => (
          <li
            key={word}
            className={`font-medium tracking-[0.16em] text-cacao uppercase ${
              large ? "text-lg" : "text-[12px]"
            }`}
          >
            {word}
          </li>
        ))}
      </ul>
      <BrandFlor
        tone="cacao"
        size={110}
        className="hero-flor mt-7 w-16 opacity-80 md:w-20"
      />
    </motion.aside>
  );
}

export function Hero() {
  const [index, setIndex] = useState(1);
  const slide = HERO_SLIDES[index] ?? FIRST_SLIDE;

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setIndex(0);
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero-studio relative isolate overflow-hidden md:min-h-[92dvh]">
      {/* Móvil: recorte por aspect-ratio, no por vh. No usar -mb ni translate para pegar marquees. */}
      <div
        className={
          slide.srcMobile
            ? "relative aspect-[3/4] overflow-hidden md:absolute md:inset-0 md:h-auto md:aspect-auto md:overflow-visible"
            : "relative aspect-[2/3] overflow-hidden md:absolute md:inset-0 md:h-auto md:aspect-auto md:overflow-visible"
        }
        role="region"
        aria-roledescription="carrusel"
        aria-label="Fotos ANAK"
      >
        <div className="absolute inset-0">
        {HERO_SLIDES.map((item, i) => (
          <div
            key={item.src}
            className={`absolute inset-0 z-0 flex items-start justify-center md:items-center transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.srcMobile ? (
              <>
                <Image
                  src={item.srcMobile}
                  alt={i === index ? "ANAK — coach de barré" : ""}
                  width={item.widthMobile ?? item.width}
                  height={item.heightMobile ?? item.height}
                  preload={i === 0}
                  quality={90}
                  sizes="100vw"
                  className="hero-photo hero-photo-barre md:hidden"
                />
                <Image
                  src={item.src}
                  alt={i === index ? "ANAK — coach de barré" : ""}
                  width={item.width}
                  height={item.height}
                  quality={90}
                  sizes="100vw"
                  className="hero-photo hero-photo-blend hidden md:block"
                />
              </>
            ) : (
              <Image
                src={item.src}
                alt={i === index ? "ANAK — coach de barré" : ""}
                width={item.width}
                height={item.height}
                preload={i === 0}
                quality={90}
                sizes="100vw"
                className="hero-photo hero-photo-blend"
              />
            )}
          </div>
        ))}

        <div
          className={`pointer-events-none absolute inset-x-0 z-20 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] md:hidden ${
            slide.srcMobile ? "top-[12%]" : "top-[8%]"
          }`}
        >
          <div key={`${slide.src}-top`}>
            {slide.srcMobile && slide.kicker ? (
              <motion.p
                className="mb-0.5 text-[11px] font-bold tracking-[0.22em] text-malva uppercase"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                {slide.kicker}
              </motion.p>
            ) : null}
            {slide.srcMobile ? (
              <HeroTitle
                replayKey={`${slide.src}-m`}
                variant="centro"
                className="max-w-none text-[clamp(2.05rem,9.4vw,3rem)] leading-[0.84] font-black tracking-tight text-vino uppercase"
              />
            ) : (
              <h1 className="whitespace-nowrap text-[clamp(1.55rem,7.2vw,2.35rem)] leading-none font-black tracking-tight text-vino uppercase">
                Entrena tu templo
              </h1>
            )}
          </div>
        </div>

        {slide.srcMobile ? (
          <>
            <div className="pointer-events-none absolute top-[65%] left-[max(1.25rem,env(safe-area-inset-left))] z-20 md:hidden">
              <div key={`${slide.src}-knee`}>
                {slide.line ? (
                  <motion.p
                    className="max-w-[16ch] text-[0.95rem] font-medium tracking-[0.06em] text-cacao"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.55, ease }}
                  >
                    {slide.line}
                  </motion.p>
                ) : null}
                {slide.cta ? (
                  <motion.a
                    href={slide.cta.href}
                    className="pointer-events-auto mt-3 inline-block rounded-full bg-vino px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-hueso uppercase hover:bg-negro"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.7, ease }}
                  >
                    {slide.cta.label}
                  </motion.a>
                ) : null}
              </div>
            </div>
            <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2 md:hidden">
              {HERO_SLIDES.map((item, i) => (
                <button
                  key={`m-${item.src}`}
                  type="button"
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === index ? true : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-vino" : "w-2 bg-vino/30 hover:bg-vino/70"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <BrandFlor
              tone="arena"
              size={180}
              className="hero-flor animate-flor-spin pointer-events-none absolute top-[54%] left-1 z-10 w-[5.5rem] opacity-80 md:hidden"
            />
            <BrandFlor
              tone="cacao"
              size={150}
              className="hero-flor animate-flor-spin-rev pointer-events-none absolute top-[66%] left-8 z-10 w-[4.25rem] opacity-70 md:hidden"
            />
            <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-20 flex justify-center gap-2 md:hidden">
              {HERO_SLIDES.map((item, i) => (
                <button
                  key={`m1-${item.src}`}
                  type="button"
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === index ? true : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-vino" : "w-2 bg-vino/30 hover:bg-vino/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-x-0 bottom-6 z-20 hidden justify-center gap-2 md:flex">
          {HERO_SLIDES.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === index ? true : undefined}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-vino" : "w-2 bg-vino/30 hover:bg-vino/70"
              }`}
            />
          ))}
        </div>
        </div>
      </div>

      <BrandFlor
        tone="cacao"
        size={220}
        className="hero-flor animate-flor-spin pointer-events-none absolute top-4 left-1 z-10 hidden w-24 opacity-80 sm:top-6 sm:left-3 sm:w-36 md:block md:w-44"
      />
      <BrandFlor
        tone="arena"
        size={200}
        className="hero-flor animate-flor-spin-rev pointer-events-none absolute top-8 right-1 z-10 w-20 opacity-75 sm:top-10 sm:right-4 sm:w-32 md:w-40"
      />
      <BrandFlor
        tone="arena"
        size={160}
        className="hero-flor animate-flor-drift pointer-events-none absolute bottom-20 left-2 z-10 hidden w-16 opacity-70 sm:left-8 sm:w-24 md:block md:w-28"
      />
      <BrandFlor
        tone="cacao"
        size={170}
        className="hero-flor animate-flor-spin pointer-events-none absolute right-3 bottom-24 z-10 hidden w-24 opacity-70 sm:block md:right-8 md:w-32"
      />

      <div className="pointer-events-none relative z-10 hidden min-h-[92dvh] md:block">
        <div key={slide.src} className={`absolute ${slide.titlePos}`}>
          {slide.kicker ? (
            <motion.p
              className="mb-3 text-[11px] font-bold tracking-[0.22em] text-malva uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              {slide.kicker}
            </motion.p>
          ) : null}
          <HeroTitle replayKey={slide.src} />
          {slide.line ? (
            <motion.p
              className="mt-4 max-w-[18ch] text-[0.95rem] font-medium tracking-[0.06em] text-cacao"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease }}
            >
              {slide.line}
            </motion.p>
          ) : null}
          {slide.cta ? (
            <motion.a
              href={slide.cta.href}
              className="pointer-events-auto mt-5 inline-block rounded-full bg-vino px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-hueso uppercase hover:bg-negro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7, ease }}
            >
              {slide.cta.label}
            </motion.a>
          ) : null}
        </div>

        <HeroAsidePanel
          aside={slide.aside}
          src={slide.src}
          asidePos={slide.asidePos}
        />
      </div>
    </section>
  );
}
