import { BrandFlor } from "@/components/site/BrandFlor";
import { EXPECTATIVAS } from "@/lib/site";
import { FadeUp } from "@/components/ui/FadeUp";

export function Expectativas() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16">
      <BrandFlor
        tone="cacao"
        size={100}
        className="animate-flor-spin-rev absolute -top-2 right-4 w-14 opacity-35 md:right-0"
      />
      <FadeUp className="mb-10 text-center">
        <h2 className="text-3xl font-black text-vino uppercase md:text-5xl">
          Qué habitas aquí
        </h2>
      </FadeUp>
      <div className="grid gap-5 sm:grid-cols-2">
        {EXPECTATIVAS.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.05}>
            <article className="rounded-[1.4rem] bg-blanco p-6 transition hover:-translate-y-1">
              <p className="text-[11px] font-bold tracking-[0.22em] text-malva uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-2 text-2xl font-black text-vino uppercase">{item.title}</h3>
              <p className="font-serif mt-2 text-base leading-7 text-negro/75">{item.body}</p>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
