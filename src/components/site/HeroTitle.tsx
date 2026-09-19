"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE_TAGLINE } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const TAGLINE_LINES = SITE_TAGLINE.split(" ").map((word) => [word]);
const CENTRO_LINES = [
  ["Encuentra", "tu"],
  ["centro"],
] as const;

export function HeroTitle({
  replayKey,
  className = "max-w-[9ch] text-[clamp(2.4rem,6.2vw,5.4rem)] leading-[0.86] font-black tracking-tight text-vino uppercase",
  variant = "tagline",
}: {
  replayKey: string;
  className?: string;
  variant?: "tagline" | "centro";
}) {
  const reduce = useReducedMotion();
  const lines = variant === "centro" ? CENTRO_LINES : TAGLINE_LINES;
  let wordIndex = 0;

  return (
    <h1 className={className}>
      {lines.map((line) => (
        <span
          key={`${replayKey}-${line.join("-")}`}
          className={`block overflow-hidden pb-[0.06em]${line.length > 1 ? " whitespace-nowrap" : ""}`}
        >
          {line.map((word) => {
            const wi = wordIndex;
            wordIndex += 1;
            return (
              <span key={`${replayKey}-${word}`}>
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
                {word !== line[line.length - 1] ? " " : null}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
