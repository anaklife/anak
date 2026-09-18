import { WHATSAPP_URL } from "@/lib/constants";
import { PHOTOS, VIDEOS } from "@/lib/media";

export const POSTURAS = {
  kicker: "Práctica ANAK",
  title: "7 posturas para empezar el día",
  eyebrow: "Cinco respiraciones en cada una",
  startLine: "Empieza cuando quieras",
  details:
    "Un video. Siete posturas. Cinco respiraciones en cada una. Sin racha ni calendario: hoy, a tu ritmo.",
  video: VIDEOS.retos,
  poster: PHOTOS.retos,
  hero: PHOTOS.posturasFlyer,
  pills: ["7 posturas", "1 video"],
  tags: ["Barre", "Presencia", "Respiración"],
  ctaTitle: "¿Seguimos en clase?",
  ctaBody:
    "Esta práctica abre el día. El siguiente paso es moverte con Anak.",
  whatsapp: {
    label: "Hablemos por WhatsApp",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent(
      "Hola Anak, vengo de las 7 posturas para empezar el día.",
    )}`,
  },
} as const;
