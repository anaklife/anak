"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PHOTOS } from "@/lib/media";
import { WHATSAPP_URL } from "@/lib/constants";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Manifesto() {
  const reduce = useReducedMotion();

  return (
    <section id="manifesto" className="relative overflow-hidden bg-hueso">
      <div className="relative lg:min-h-[22rem]">
        <motion.div
          className="w-[min(100%,38rem)] sm:w-[min(100%,44rem)] lg:w-[56%]"
          initial={reduce ? { x: "-5%" } : { x: "-40%", opacity: 0 }}
          whileInView={{ x: "-5%", opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease }}
        >
          <Image
            src={PHOTOS.manifesto}
            alt="Chasen y tazón de matcha"
            width={1280}
            height={720}
            quality={90}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="h-auto w-full object-contain object-left"
          />
        </motion.div>

        <div className="relative z-10 px-5 py-8 text-center lg:absolute lg:inset-y-0 lg:right-0 lg:left-[34%] lg:flex lg:items-center lg:justify-center lg:px-8 lg:py-0">
          <div className="max-w-2xl">
            <motion.h2
              className="text-4xl leading-[0.92] font-black tracking-tight text-negro uppercase sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease }}
            >
              Es más que una clase
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-lg text-base text-negro/75 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              Es un compromiso con tu cuerpo.
            </motion.p>
            <motion.div
              className="mt-7 flex justify-center"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.14, ease }}
            >
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2.5 rounded-full bg-vino px-5 py-3 text-xs font-bold tracking-[0.16em] text-hueso uppercase hover:bg-negro"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
