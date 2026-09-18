import { BrandFlor } from "@/components/site/BrandFlor";
import { POSTURAS } from "@/lib/posturas";

function CornerTick({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-8 w-8 border-hueso/80 ${className}`}
    />
  );
}

export function PosturasVideoFrame() {
  return (
    <div className="relative w-full min-w-0">
      <div
        aria-hidden
        className="absolute top-6 left-7 -right-2.5 -bottom-2.5 rounded-[1.95rem] bg-cacao"
      />

      <figure className="relative z-10 overflow-visible rounded-[1.75rem] bg-malva p-[9px] pb-0 shadow-[0_22px_44px_rgba(81,59,46,0.18)] ring-1 ring-arena/50">
        <BrandFlor
          tone="cacao"
          size={96}
          className="absolute -top-3 -left-3 z-20 w-16 rotate-[-18deg]"
        />
        <BrandFlor
          tone="cacao"
          size={88}
          className="absolute -top-3 -right-3 z-20 w-14 rotate-[16deg]"
        />
        <BrandFlor
          tone="cacao"
          size={88}
          className="absolute -right-3 -bottom-2 z-20 w-14 rotate-[-10deg]"
        />
        <BrandFlor
          tone="cacao"
          size={80}
          className="absolute -bottom-3 -left-3 z-20 w-12 rotate-[14deg]"
        />

        <div className="rounded-[1.25rem] bg-hueso p-[6px]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.05rem] bg-negro">
            <video
              src={POSTURAS.video}
              poster={POSTURAS.poster}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-contain"
            >
              Tu navegador no reproduce este video.
            </video>
            <CornerTick className="top-3 left-3 rounded-tl-md border-t-2 border-l-2" />
            <CornerTick className="top-3 right-3 rounded-tr-md border-t-2 border-r-2" />
            <CornerTick className="bottom-12 left-3 rounded-bl-md border-b-2 border-l-2" />
            <CornerTick className="right-3 bottom-12 rounded-br-md border-r-2 border-b-2" />
          </div>
        </div>
        <figcaption className="px-3 pt-3 pb-4 text-center">
          <p className="text-[10px] font-bold tracking-[0.2em] text-cacao uppercase">
            {POSTURAS.pills.join(" · ")}
          </p>
          <p className="font-serif mt-0.5 text-sm text-cacao/80 italic">
            {POSTURAS.eyebrow}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
