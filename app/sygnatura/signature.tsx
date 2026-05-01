"use client";

import { motion } from "motion/react";

export function Signature() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 900 240"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto max-w-[820px]"
    >
      <motion.g
        fill="none"
        stroke="#0F1B2D"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2.6, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.path
          d="M 30 150
             C 60 70, 110 60, 130 110
             C 145 150, 110 175, 90 165
             C 75 158, 75 130, 100 120
             C 130 108, 165 130, 175 100
             C 185 75, 215 80, 215 120
             C 215 160, 200 170, 215 165
             C 235 158, 240 120, 260 110
             C 285 100, 285 145, 270 160
             C 258 172, 290 168, 305 140
             C 320 110, 340 105, 345 130
             C 350 155, 335 175, 350 170
             C 380 162, 390 100, 415 100
             C 440 100, 425 165, 450 160
             C 478 152, 488 110, 510 105
             C 535 100, 535 155, 555 158
             C 580 161, 600 130, 625 120
             C 660 108, 685 145, 700 130
             C 720 110, 735 95, 765 110
             C 800 130, 815 125, 840 100"
        />
        <motion.path d="M 200 200 L 720 195" strokeWidth="1.4" opacity="0.5" />
        <motion.path
          d="M 460 80 C 465 70, 472 70, 478 78"
          strokeWidth="2"
          opacity="0.85"
        />
      </motion.g>
    </svg>
  );
}
