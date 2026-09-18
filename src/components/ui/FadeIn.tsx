"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Animación mínima neutra. No es identidad de marca. */
export function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
