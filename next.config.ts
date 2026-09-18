import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Deploy previsto en Vercel. Dominio / canónico se define después.
  turbopack: {
    root: projectRoot,
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
