"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrandFlor } from "@/components/site/BrandFlor";
import { BrandLogo } from "@/components/site/BrandLogo";
import { VideoReel } from "@/components/site/VideoReel";
import { SITE_NAME, SITE_ROLE, SITE_TAGLINE } from "@/lib/constants";
import { PHOTOS } from "@/lib/media";
import {
  TREE_LINKS,
  TREE_PHOTO,
  TREE_PHOTO_PORTRAIT,
  TREE_SOCIALS,
} from "@/lib/tree";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function InstagramLogo() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <defs>
        <radialGradient id={`ig-${uid}`} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#ig-${uid})`} />
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="3.2"
        fill="none"
        stroke="white"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="2.5" fill="none" stroke="white" strokeWidth="1.7" />
      <circle cx="16.2" cy="7.8" r="0.9" fill="white" />
    </svg>
  );
}

function YoutubeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.5a3.06 3.06 0 0 0-2.16-2.16C19.5 4 12 4 12 4s-7.5 0-9.34.34A3.06 3.06 0 0 0 .5 6.5 32.4 32.4 0 0 0 0 12a32.4 32.4 0 0 0 .5 5.5 3.06 3.06 0 0 0 2.16 2.16C4.5 20 12 20 12 20s7.5 0 9.34-.34A3.06 3.06 0 0 0 23.5 17.5 32.4 32.4 0 0 0 24 12a32.4 32.4 0 0 0-.5-5.5z"
      />
      <path fill="#fff" d="M9.75 15.5v-7L16 12l-6.25 3.5z" />
    </svg>
  );
}

function TiktokLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden="true">
      <path
        fill="#25F4EE"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.28 0 .56.04.81.13v-3.4a6.37 6.37 0 0 0-6.35 6.34A6.35 6.35 0 0 0 12.59 22a6.35 6.35 0 0 0 6.35-6.34V8.31a8.17 8.17 0 0 0 4.77 1.52V6.31a4.84 4.84 0 0 1-4.12.38z"
        transform="translate(0.55 0.55)"
      />
      <path
        fill="#FE2C55"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.28 0 .56.04.81.13v-3.4a6.37 6.37 0 0 0-6.35 6.34A6.35 6.35 0 0 0 12.59 22a6.35 6.35 0 0 0 6.35-6.34V8.31a8.17 8.17 0 0 0 4.77 1.52V6.31a4.84 4.84 0 0 1-4.12.38z"
        transform="translate(-0.55 -0.55)"
      />
      <path fill="#111" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.28 0 .56.04.81.13v-3.4a6.37 6.37 0 0 0-6.35 6.34A6.35 6.35 0 0 0 12.59 22a6.35 6.35 0 0 0 6.35-6.34V8.31a8.17 8.17 0 0 0 4.77 1.52V6.31a4.84 4.84 0 0 1-4.12.38z" />
    </svg>
  );
}

function WhatsappLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "h-6 w-6 fill-current"} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL_ICON = {
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  tiktok: TiktokLogo,
} as const;

function TreeButton({
  link,
  i,
  reduce,
  compact,
}: {
  link: (typeof TREE_LINKS)[number];
  i: number;
  reduce: boolean | null;
  compact?: boolean;
}) {
  const isWhatsapp = link.variant === "whatsapp";

  return (
    <motion.a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group flex min-w-0 items-center justify-center gap-2 rounded-full bg-hueso text-cacao shadow-[0_8px_22px_rgba(81,59,46,0.10)] ring-1 ring-arena/35 hover:bg-cacao hover:text-hueso ${
        compact
          ? "min-h-[3.35rem] w-full px-3 py-2"
          : "min-h-[3.4rem] w-full px-4 py-2 lg:min-h-[3.75rem]"
      }`}
      initial={reduce ? false : { y: 18 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : 0.12 + i * 0.06, ease }}
      aria-label={`${link.label}. ${link.note}`}
    >
      {isWhatsapp ? (
        <WhatsappLogo
          className={`shrink-0 fill-current ${compact ? "h-5 w-5" : "h-5 w-5"}`}
        />
      ) : null}
      <span
        className={`font-semibold tracking-tight ${
          compact ? "text-[14px]" : "truncate text-[15px] lg:text-base"
        }`}
      >
        {link.label}
      </span>
    </motion.a>
  );
}

function SocialRow({
  reduce,
  align = "end",
}: {
  reduce: boolean | null;
  align?: "end" | "start" | "center";
}) {
  const justify =
    align === "start"
      ? "justify-start"
      : align === "center"
        ? "justify-center"
        : "justify-end";

  return (
    <ul className={`flex items-center gap-5 ${justify}`}>
      {TREE_SOCIALS.map((social, i) => {
        const Icon = SOCIAL_ICON[social.id];
        return (
          <li key={social.id}>
            <motion.a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-12 w-12 place-items-center hover:scale-110"
              initial={reduce ? false : { y: 14 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.45, delay: reduce ? 0 : 0.28 + i * 0.05, ease }}
            >
              <Icon />
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}

function DesktopTreeCard({
  title,
  body,
  href,
  cta,
  image,
  external,
  i,
  reduce,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
  external?: boolean;
  i: number;
  reduce: boolean | null;
}) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="relative flex min-h-[10.75rem] overflow-hidden rounded-[1.6rem] ring-1 ring-arena/25"
      initial={reduce ? false : { y: 18 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: reduce ? 0 : 0.12 + i * 0.06, ease }}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="42vw"
        quality={80}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-negro/50" />
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 py-6">
        <h2 className="text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[0.95] font-black tracking-tight text-blanco uppercase">
          {title}
        </h2>
        <p className="mt-2 max-w-[32ch] text-sm leading-snug text-blanco/90">
          {body}
        </p>
        <span className="mt-4 inline-flex w-fit rounded-full bg-hueso px-5 py-2 text-[13px] font-semibold tracking-tight text-cacao">
          {cta}
        </span>
      </div>
    </motion.a>
  );
}

export function TreeStage() {
  const reduce = useReducedMotion();
  const sitio = TREE_LINKS.find((l) => l.id === "sitio")!;
  const experiencia = TREE_LINKS.find((l) => l.id === "experiencia")!;
  const whatsapp = TREE_LINKS.find((l) => l.id === "whatsapp")!;
  const posturas = TREE_LINKS.find((l) => l.id === "posturas")!;

  return (
    <div className="w-full bg-[#faf8f9] text-negro">
      <div className="relative h-svh w-full overflow-hidden lg:hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={TREE_PHOTO_PORTRAIT.src}
          alt="ANAK — coach de barré"
          fill
          sizes="100vw"
          quality={90}
          loading="eager"
          fetchPriority="high"
          className="object-cover object-right origin-right scale-[1.28]"
        />
      </div>

      <Link
        href="/"
        aria-label={`${SITE_NAME} — ir al sitio`}
        className="absolute top-3 left-1/2 z-20 -translate-x-1/2"
      >
        <BrandLogo preload className="h-11 w-auto sm:h-14" />
      </Link>

      <div className="pointer-events-none absolute inset-x-0 top-16 z-10 px-5 text-center">
        <p className="text-[10px] font-bold tracking-[0.22em] text-malva uppercase">
          {SITE_ROLE}
        </p>
        <p className="mt-1 max-w-[16ch] font-black tracking-tight text-negro uppercase max-lg:mx-auto text-[clamp(2rem,10.5vw,3.6rem)] leading-[0.92]">
          {SITE_TAGLINE}
        </p>
      </div>

      <div className="absolute top-[58%] right-4 left-[32%] z-20 flex flex-col gap-2.5">
        <TreeButton link={posturas} i={0} reduce={reduce} compact />
        <TreeButton link={experiencia} i={1} reduce={reduce} compact />
        <TreeButton link={sitio} i={2} reduce={reduce} compact />
        <TreeButton link={whatsapp} i={3} reduce={reduce} compact />
        <SocialRow reduce={reduce} align="center" />
      </div>
      </div>

      <div className="relative hidden min-h-svh w-full overflow-hidden lg:block">
        <BrandFlor
          tone="arena"
          size={180}
          className="hero-flor animate-flor-spin pointer-events-none absolute top-16 left-8 w-24 opacity-35"
        />
        <BrandFlor
          tone="cacao"
          size={160}
          className="hero-flor animate-flor-spin-rev pointer-events-none absolute top-24 right-10 w-20 opacity-30"
        />
        <BrandFlor
          tone="arena"
          size={140}
          className="hero-flor animate-flor-drift pointer-events-none absolute bottom-16 left-[28%] w-16 opacity-25"
        />
        <BrandFlor
          tone="cacao"
          size={140}
          className="hero-flor animate-flor-spin pointer-events-none absolute right-[22%] bottom-10 w-20 opacity-30"
        />

        <Link
          href="/"
          aria-label={`${SITE_NAME} — ir al sitio`}
          className="absolute top-5 left-1/2 z-20 -translate-x-1/2"
        >
          <BrandLogo preload className="h-14 w-auto" />
        </Link>

        <div className="mx-auto flex min-h-svh max-w-6xl items-center gap-14 px-10 pt-24 pb-12">
          <div className="w-[21rem] shrink-0">
            <div className="bg-blanco p-3 shadow-[0_18px_40px_rgba(81,59,46,0.12)] ring-1 ring-arena/25">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={TREE_PHOTO.src}
                  alt="ANAK — coach de barré"
                  fill
                  sizes="21rem"
                  quality={90}
                  className="origin-center scale-[1.85] object-cover object-center"
                />
              </div>
            </div>
            <p className="mt-6 text-center text-[11px] font-bold tracking-[0.22em] text-malva uppercase">
              {SITE_ROLE}
            </p>
            <p className="mt-2 text-center font-black tracking-tight text-negro uppercase text-[clamp(1.7rem,2.6vw,2.45rem)] leading-[0.92]">
              {SITE_TAGLINE}
            </p>
            <div className="mt-5">
              <SocialRow reduce={reduce} align="center" />
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${whatsapp.label}. ${whatsapp.note}`}
                className="grid h-12 w-12 place-items-center text-cacao hover:text-vino"
              >
                <WhatsappLogo className="h-7 w-7 fill-current" />
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <DesktopTreeCard
              title={experiencia.label}
              body="Lo que se siente estar aquí: presencia, guía, encuentro y ritual."
              href={experiencia.href}
              cta="Ver experiencias"
              image={PHOTOS.presencia}
              i={0}
              reduce={reduce}
            />
            <DesktopTreeCard
              title={posturas.label}
              body="Una práctica para empezar el día, con fuerza y sin prisa."
              href={posturas.href}
              cta="Ver posturas"
              image={PHOTOS.mat}
              i={1}
              reduce={reduce}
            />
            <DesktopTreeCard
              title={sitio.label}
              body="Clases, matcha, retos y Balance Club. El universo ANAK."
              href={sitio.href}
              cta="Ir al sitio"
              image={PHOTOS.clases}
              i={2}
              reduce={reduce}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-px">
        <VideoReel instant />
      </div>
    </div>
  );
}
