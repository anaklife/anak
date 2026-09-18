"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE_TAGLINE } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const WORDS = SITE_TAGLINE.split(" ");

export function HeroTitle({ replayKey }: { replayKey: string }) {
  const reduce = useReducedMotion();

  return (
    <h1 className="max-w-[9ch] text-[clamp(2.4rem,6.2vw,5.4rem)] leading-[0.86] font-black tracking-tight text-vino uppercase">
      {WORDS.map((word, wi) => (
        <span
          key={`${replayKey}-${word}`}
          className="block overflow-hidden pb-[0.06em]"
        >
          {Array.from(word).map((letter, li) => (
            <motion.span
              key={`${word}-${li}`}
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.58,
                delay: reduce ? 0 : wi * 0.16 + li * 0.032,
                ease,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}
