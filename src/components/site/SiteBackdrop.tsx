import { LOGOS } from "@/lib/media";

const FLORES = [
  { src: LOGOS.florArena, className: "landing-flor landing-flor-1" },
  { src: LOGOS.florCacao, className: "landing-flor landing-flor-2" },
  { src: LOGOS.florArena, className: "landing-flor landing-flor-3" },
  { src: LOGOS.florCacao, className: "landing-flor landing-flor-4" },
  { src: LOGOS.florArena, className: "landing-flor landing-flor-5" },
  { src: LOGOS.florCacao, className: "landing-flor landing-flor-6" },
] as const;

export function SiteBackdrop() {
  return (
    <div className="landing-backdrop" aria-hidden="true">
      <div className="landing-orb landing-orb-a" />
      <div className="landing-orb landing-orb-b" />
      <div className="landing-orb landing-orb-c" />
      <div className="landing-orb landing-orb-d" />
      <div className="landing-veil" />
      {FLORES.map((flor, i) => (
        <img key={`${flor.src}-${i}`} src={flor.src} alt="" className={flor.className} />
      ))}
      <div className="landing-grain" />
    </div>
  );
}
