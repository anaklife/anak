import { LOGOS, PHOTOS, VIDEOS } from "@/lib/media";
import { WHATSAPP_URL } from "@/lib/constants";

/** Secciones públicas de ANAK. Nav, marquee, homepage y reel salen de aquí. */
export const HOME_SECTIONS = [
  {
    id: "clases",
    title: "Clases con Anak",
    nav: "Clases",
    kicker: "Barre",
    body: "Sesiones de barre para habitar el cuerpo con presencia: fuerza, alineación y ritmo. El calendario se confirma por WhatsApp.",
    href: "/#clases",
    cta: "Quiero una clase",
    ctaHref: WHATSAPP_URL,
    image: PHOTOS.clases,
    video: VIDEOS.clases,
  },
  {
    id: "matcha",
    title: "Talleres de matcha",
    nav: "Matcha",
    kicker: "Ritual",
    body: "Un taller propio de ANAK: pausa, ceremonia y conversación alrededor del matcha.",
    href: "/#matcha",
    cta: "Quiero el ritual",
    ctaHref: WHATSAPP_URL,
    image: PHOTOS.matcha,
    video: VIDEOS.matcha,
  },
  {
    id: "retos",
    title: "Retos Anak",
    nav: "Retos",
    kicker: "Práctica",
    body: "Desafíos de movimiento para sostener la constancia. Fechas y mecánica se anuncian en cada edición.",
    href: "/posturas",
    cta: "Practicar",
    ctaHref: "/posturas",
    image: PHOTOS.retos,
    video: VIDEOS.retos,
  },
  {
    id: "balance-club",
    title: "Balance Club",
    nav: "Balance Club",
    kicker: "Comunidad",
    body: "El club de ANAK: comunidad, ritmo compartido y un lugar para volver. Balance by Anak.",
    href: "/#balance-club",
    cta: "Conocer el club",
    ctaHref: WHATSAPP_URL,
    image: PHOTOS.club,
    video: VIDEOS.club,
    logo: LOGOS.balanceByAnak,
  },
] as const;

export const NAV_ITEMS = HOME_SECTIONS.map((section) => ({
  href: section.href,
  label: section.nav,
}));

export const MARQUEE_ITEMS = HOME_SECTIONS.map((section) => section.title);

export const EXPERIENCIA = [
  {
    kicker: "01",
    title: "Presencia",
    body: "En clase no se trata de hacerlo perfecto. Se trata de habitar cada repetición, con fuerza y sin prisa.",
    src: VIDEOS.presencia,
    poster: PHOTOS.presencia,
  },
  {
    kicker: "02",
    title: "Guía",
    body: "Anak sostiene el ritmo: la barra, el mat y el grupo. Una práctica para volver al cuerpo.",
    src: VIDEOS.clasesGrupo,
    poster: PHOTOS.clasesGrupo,
  },
  {
    kicker: "03",
    title: "Encuentro",
    body: "Lo que pasa después también es práctica. Salir juntas, compartir el momento y quedarte en comunidad.",
    src: VIDEOS.encuentro,
    poster: PHOTOS.encuentro,
  },
  {
    kicker: "04",
    title: "Ritual",
    body: "El matcha como pausa: ceremonia, conversación y un ritmo que no es moda.",
    src: VIDEOS.matcha,
    poster: PHOTOS.matcha,
  },
] as const;

export const EXPECTATIVAS = [
  {
    title: "Presencia",
    body: "No se trata de hacer más. Se trata de habitar cada repetición.",
  },
  {
    title: "Cuerpo",
    body: "Barre para fortalecer, alinear y despertar sin desconectarte de ti.",
  },
  {
    title: "Ritual",
    body: "Clases, matcha y encuentros que sostienen un ritmo, no una moda.",
  },
  {
    title: "Comunidad",
    body: "Balance Club: un círculo para practicar juntas, no en soledad.",
  },
] as const;
