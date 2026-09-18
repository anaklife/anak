import { MARQUEE_ITEMS } from "@/lib/site";

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={`overflow-hidden py-3.5 ${reverse ? "bg-vino" : "bg-blanco"}`}>
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`text-sm font-black tracking-[0.22em] uppercase ${
              reverse ? "text-hueso" : "text-vino"
            }`}
          >
            {item}
            <span className="ml-10 text-malva">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
