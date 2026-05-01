"use client";

import { motion } from "motion/react";

export function RotatingSeal() {
  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto select-none">
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        <defs>
          <path
            id="seal-outer"
            d="M 200,200 m -168,0 a 168,168 0 1,1 336,0 a 168,168 0 1,1 -336,0"
          />
          <path
            id="seal-inner"
            d="M 200,200 m -132,0 a 132,132 0 1,0 264,0 a 132,132 0 1,0 -264,0"
          />
        </defs>

        <circle
          cx="200"
          cy="200"
          r="184"
          fill="none"
          stroke="#8C6B3D"
          strokeOpacity="0.5"
          strokeWidth="0.75"
        />
        <circle
          cx="200"
          cy="200"
          r="172"
          fill="none"
          stroke="#8C6B3D"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="#8C6B3D"
          strokeOpacity="0.55"
          strokeWidth="0.75"
        />

        <text
          fill="#8C6B3D"
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: 14,
            letterSpacing: "0.42em",
            textTransform: "uppercase",
          }}
        >
          <textPath href="#seal-outer" startOffset="0%">
            Kancelaria Notarialna · Pach &amp; Świątek · Notariusze · Kraków ·{" "}
          </textPath>
        </text>

        <text
          fill="#8C6B3D"
          fillOpacity="0.7"
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: 9,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          <textPath href="#seal-inner" startOffset="0%">
            ul. Urzędnicza 20/4 · 30-051 · spółka cywilna ·{" "}
          </textPath>
        </text>
      </motion.svg>

      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="text-center">
          <p
            className="text-[#8C6B3D]"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            Notariusz
          </p>
          <p
            className="mt-3 text-[#1F1A12]"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 56,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            P&amp;Ś
          </p>
          <p
            className="mt-3 text-[#1F1A12]/60"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 9,
              letterSpacing: "0.36em",
              textTransform: "uppercase",
            }}
          >
            Anno · MMXXVI
          </p>
        </div>
      </div>
    </div>
  );
}
