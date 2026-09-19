import Link from "next/link";
import { BrandFlor } from "@/components/site/BrandFlor";
import { HOME_SECTIONS } from "@/lib/site";
import { VideoLoop } from "@/components/ui/VideoLoop";
import { FadeUp } from "@/components/ui/FadeUp";

function ReelHeading() {
  return (
    <>
      <p className="text-[11px] font-bold tracking-[0.28em] text-hueso uppercase">
        En movimiento
      </p>
      <h2 className="mt-3 text-2xl font-black text-hueso uppercase md:text-4xl">
        Cuatro ritmos, un universo
      </h2>
    </>
  );
}

function ReelCard({
  section,
  index,
}: {
  section: (typeof HOME_SECTIONS)[number];
  index: number;
}) {
  return (
    <Link
      href={section.href}
      className="group relative block h-[22rem] w-52 overflow-hidden rounded-[1.7rem] bg-vino sm:h-[26rem] sm:w-56"
    >
      <VideoLoop
        src={section.video}
        poster={section.image}
        preload={index === 0 ? "metadata" : "none"}
        className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/10 to-transparent" />
      <p className="absolute top-3 left-3 text-[11px] font-black tracking-[0.14em] text-hueso/80">
        0{index + 1}
      </p>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[10px] font-bold tracking-[0.22em] text-malva uppercase">
          {section.kicker}
        </p>
        <p className="mt-1 text-sm font-black tracking-wide text-hueso uppercase">
          {section.nav}
        </p>
      </div>
    </Link>
  );
}

export function VideoReel({ instant = false }: { instant?: boolean } = {}) {
  return (
    <section className="relative overflow-hidden bg-malva py-12">
      <BrandFlor
        tone="hueso"
        size={120}
        className="animate-flor-spin pointer-events-none absolute top-2 left-4 w-14 opacity-30"
      />
      {instant ? (
        <div className="relative mb-8 px-[max(1.25rem,env(safe-area-inset-left))] text-center pr-[max(1.25rem,env(safe-area-inset-right))]">
          <ReelHeading />
        </div>
      ) : (
        <FadeUp className="relative mb-8 px-[max(1.25rem,env(safe-area-inset-left))] text-center pr-[max(1.25rem,env(safe-area-inset-right))]">
          <ReelHeading />
        </FadeUp>
      )}
      <div className="overflow-x-auto pb-2 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))]">
        <div className="mx-auto flex w-max justify-center gap-4">
          {HOME_SECTIONS.map((section, i) =>
            instant ? (
              <ReelCard key={section.id} section={section} index={i} />
            ) : (
              <FadeUp key={section.id} delay={i * 0.05}>
                <ReelCard section={section} index={i} />
              </FadeUp>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
