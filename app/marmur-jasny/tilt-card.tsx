"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Phone, DeviceMobile, EnvelopeSimple } from "@phosphor-icons/react";
import { KANCELARIA } from "@/lib/kancelaria";

export function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 220,
    damping: 22,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 220,
    damping: 22,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="md:col-span-6 relative bg-[#EAE0CC] border border-[#1F1A12]/15 rounded-3xl p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_24px_60px_-30px_rgba(31,26,18,0.25)]"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6B3D]">
        Kontakt
      </p>
      <ul className="mt-8 space-y-6">
        <li className="flex items-start gap-4">
          <Phone size={20} weight="thin" className="mt-1 text-[#8C6B3D]" />
          <div>
            <p className="text-xs text-[#1F1A12]/55">Telefon kancelarii</p>
            <a
              href={`tel:${KANCELARIA.phone.tel}`}
              className="text-2xl tabular-nums hover:text-[#8C6B3D] transition-colors"
            >
              {KANCELARIA.phone.display}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <DeviceMobile
            size={20}
            weight="thin"
            className="mt-1 text-[#8C6B3D]"
          />
          <div>
            <p className="text-xs text-[#1F1A12]/55">Komórka</p>
            <a
              href={`tel:${KANCELARIA.mobile.tel}`}
              className="text-2xl tabular-nums hover:text-[#8C6B3D] transition-colors"
            >
              {KANCELARIA.mobile.display}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <EnvelopeSimple
            size={20}
            weight="thin"
            className="mt-1 text-[#8C6B3D]"
          />
          <div>
            <p className="text-xs text-[#1F1A12]/55">E-mail</p>
            <a
              href={`mailto:${KANCELARIA.email}`}
              className="text-base hover:text-[#8C6B3D] transition-colors break-all"
            >
              {KANCELARIA.email}
            </a>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}
