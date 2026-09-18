import type { Metadata } from "next";
import { TreeStage } from "@/components/tree/TreeStage";

export const metadata: Metadata = {
  title: "Tree",
  description:
    "Links ANAK: sitio, Experiencias, posturas para empezar el día, WhatsApp, YouTube, TikTok e Instagram.",
};

export default function TreePage() {
  return <TreeStage />;
}
