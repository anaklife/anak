import { About } from "@/components/site/About";
import { CtaBand } from "@/components/site/CtaBand";
import { Experiencia } from "@/components/site/Experiencia";
import { Expectativas } from "@/components/site/Expectativas";
import { Hero } from "@/components/site/Hero";
import { HomeSections } from "@/components/site/HomeSections";
import { Manifesto } from "@/components/site/Manifesto";
import { Marquee } from "@/components/site/Marquee";
import { VideoReel } from "@/components/site/VideoReel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Marquee reverse />
      <VideoReel />
      <HomeSections />
      <Experiencia />
      <Manifesto />
      <Expectativas />
      <About />
      <CtaBand />
    </>
  );
}
