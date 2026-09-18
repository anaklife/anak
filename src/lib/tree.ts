import {
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
  YOUTUBE_URL,
} from "@/lib/constants";
import { PHOTOS } from "@/lib/media";

export const TREE_PHOTO = {
  src: PHOTOS.treeStage,
  width: 3840,
  height: 2160,
} as const;

export const TREE_PHOTO_PORTRAIT = {
  src: PHOTOS.sideKick,
  width: 4000,
  height: 6000,
} as const;

export const TREE_LINKS = [
  {
    id: "sitio",
    label: "Conoce más",
    note: "El sitio",
    href: "/",
    variant: "sitio" as const,
    external: false,
    slot: "sitio" as const,
  },
  {
    id: "experiencia",
    label: "Experiencias ANAK",
    note: "Historias",
    href: "/#experiencia",
    variant: "experiencia" as const,
    external: false,
    slot: "experiencia" as const,
  },
  {
    id: "whatsapp",
    label: "Hablemos",
    note: "WhatsApp",
    href: WHATSAPP_URL,
    variant: "whatsapp" as const,
    external: true,
    slot: "whatsapp" as const,
  },
  {
    id: "posturas",
    label: "Posturas",
    note: "Retos Anak",
    href: "/posturas",
    variant: "posturas" as const,
    external: false,
    slot: "posturas" as const,
  },
] as const;

export const TREE_SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    href: INSTAGRAM_URL,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: YOUTUBE_URL,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: TIKTOK_URL,
  },
] as const;
