"use client";

import { motion } from "motion/react";

const TEXT = "Pach & Świątek · Notariusze ·";

export function KineticMarquee() {
  return (
    <div
      aria-hidden
      className="border-y border-[#EFEAE0]/10 py-6 md:py-10 overflow-hidden relative"
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-5xl md:text-8xl tracking-tighter px-8 text-[#EFEAE0]/80"
          >
            {TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
