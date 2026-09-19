"use client";

import { useEffect } from "react";

/**
 * iOS Safari: `position: fixed` y `100vh` se anclan al layout viewport,
 * que es más alto que lo visible cuando está la barra de URL / herramientas.
 * `env(safe-area-inset-*)` no cubre esas barras. Medimos visualViewport.
 */
export function ViewportSafe() {
  useEffect(() => {
    const root = document.documentElement;

    const sync = () => {
      const vv = window.visualViewport;
      const chrome = vv
        ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop)
        : 0;
      root.style.setProperty("--safari-chrome-bottom", `${chrome}px`);
    };

    sync();
    window.visualViewport?.addEventListener("resize", sync);
    window.visualViewport?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);
    window.addEventListener("orientationchange", sync);

    return () => {
      window.visualViewport?.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("orientationchange", sync);
      root.style.removeProperty("--safari-chrome-bottom");
    };
  }, []);

  return null;
}
