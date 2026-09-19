/** Rutas de creativos en /public. Nombres tal cual se subieron. */

export const PHOTOS = {
  stretch: "/media/IMG_0588.JPG.jpeg",
  poseSide: "/media/IMG_0589.JPG.jpeg",
  arabesque: "/media/IMG_0591.JPG.jpeg",
  tower: "/media/IMG_0592.JPG.jpeg",
  balletBarre: "/media/IMG_0593.JPG.jpeg",
  split: "/media/IMG_0594.JPG.jpeg",
  sideKick: "/media/IMG_0595.JPG.jpeg",
  mat: "/media/IMG_0596.JPG.jpeg",
  barreBar: "/media/IMG_0597.JPG.jpeg",
  ball: "/media/IMG_0598.JPG.jpeg",
  weights: "/media/IMG_0599.JPG.jpeg",
  paper: "/media/IMG_0600.JPG.jpeg",
  clases: "/media/clases.jpg",
  clasesGrupo: "/media/clases-grupo.jpg",
  matcha: "/media/matcha.jpg",
  eventoFiesta: "/media/evento-fiesta.jpg",
  eventoPrensa: "/media/evento-prensa.jpg",
  retos: "/media/retos.jpg",
  club: "/media/club.jpg",
  presencia: "/media/presencia.jpg",
  encuentro: "/media/encuentro.jpg",
  manifesto: "/media/anak-manifesto-matcha.jpg",
  treeStage: "/media/tree-stage.jpg",
  posturasFlyer: "/media/posturas-flyer.png",
} as const;

export const LOGOS = {
  vino: "/brand/logo-vino.png",
  vinoFlorArriba: "/brand/logo-vino-flor-arriba.png",
  oficial: "/brand/logo-wordmark.png",
  oficialClaro: "/brand/logo-wordmark-claro.png",
  oficialFlorArriba: "/brand/logo-oficial-flor-arriba.png",
  flor: "/brand/flor.png",
  florCacao: "/brand/F4.png",
  florArena: "/brand/F5.png",
  florHueso: "/brand/F6.png",
  anakBalance: "/brand/anak-balance.png",
  balanceByAnak: "/brand/balance-by-anak.png",
  barre: "/brand/anak-barre.png",
  barreFlor: "/brand/anak-barre-flor.png",
} as const;

export type HeroAside = {
  index: string;
  label: string;
  words: readonly string[];
  size: "md" | "lg";
};

export type HeroSlide = {
  src: string;
  width: number;
  height: number;
  srcMobile?: string;
  widthMobile?: number;
  heightMobile?: number;
  titlePos: string;
  asidePos?: string;
  kicker?: string;
  line?: string;
  cta?: { href: string; label: string };
  aside: HeroAside;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    src: PHOTOS.weights,
    width: 4000,
    height: 6000,
    titlePos:
      "bottom-24 left-6 sm:left-10 lg:bottom-auto lg:top-[26%] lg:left-[max(2rem,calc(50%-36rem))]",
    asidePos:
      "top-[24%] left-[calc(50%+16.5rem)] hidden w-[17rem] text-left lg:block",
    kicker: "Clases con Anak",
    line: "Fuerza, alineación y ritmo.",
    cta: { href: "/#clases", label: "Quiero una clase" },
    aside: {
      index: "01",
      label: "Barre",
      words: ["Fuerza", "Presencia", "Ritmo"],
      size: "lg",
    },
  },
  {
    src: PHOTOS.arabesque,
    width: 6000,
    height: 4000,
    srcMobile: PHOTOS.balletBarre,
    widthMobile: 4000,
    heightMobile: 6000,
    titlePos:
      "bottom-24 left-6 sm:left-10 lg:bottom-auto lg:top-[20%] lg:left-16 xl:left-24",
    asidePos:
      "top-[38%] left-[calc(50%+14.5rem)] hidden w-[16rem] text-left lg:block",
    kicker: "Universo ANAK",
    line: "Cuatro formas de habitar el cuerpo.",
    cta: { href: "/#oferta", label: "Ver secciones" },
    aside: {
      index: "02",
      label: "Oferta",
      words: ["Clases", "Matcha", "Club"],
      size: "lg",
    },
  },
];

export const VIDEOS = {
  clases: "/videos/web/clases.mp4",
  clasesGrupo: "/videos/web/evento-01.mp4",
  eventos: "/videos/web/evento-02.mp4",
  matcha: "/videos/web/matcha.mp4",
  retos: "/videos/web/clip-05.mp4",
  club: "/videos/web/aspiracional-02.mp4",
  presencia: "/videos/web/aspiracional-01.mp4",
  encuentro: "/videos/web/clip-04.mp4",
} as const;

export const EVENTO_VIDEOS = [
  { src: VIDEOS.eventos, poster: PHOTOS.eventoFiesta },
] as const;
