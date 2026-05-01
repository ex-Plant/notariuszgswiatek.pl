import Link from "next/link";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { KineticMarquee } from "./kinetic-marquee";
import { TiltCard } from "./tilt-card";
import { MapEmbed } from "@/app/_components/map-embed";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F2EBDD] text-[#1F1A12] selection:bg-[#8C6B3D] selection:text-[#F2EBDD] relative overflow-x-hidden flex-1">
      <div
        aria-hidden
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />

      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#1F1A12]/55 hover:text-[#8C6B3D] transition-colors"
        >
          <ArrowLeft size={14} weight="bold" /> Galeria
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#1F1A12]/40">
          Wariant · Marmur jasny
        </span>
      </nav>

      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-12 md:pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8C6B3D]">
          Notariusz · Kraków
        </p>
        <h1 className="mt-8 text-5xl md:text-8xl tracking-tighter leading-[0.92]">
          Gabriela Świątek
          <br />
          <span className="text-[#1F1A12]/35 italic">notariusz</span>
        </h1>
      </header>

      <KineticMarquee />

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
        <TiltCard />
        <div className="md:col-span-6 space-y-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6B3D]">
              Adres
            </p>
            <p className="mt-4 text-2xl md:text-3xl leading-snug">
              {KANCELARIA.address.street}
              <br />
              <span className="text-[#1F1A12]/55">
                ({KANCELARIA.address.floor}) · {KANCELARIA.address.postal}{" "}
                {KANCELARIA.address.city}
              </span>
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm border-b border-[#8C6B3D] text-[#8C6B3D] hover:opacity-70 transition-opacity"
            >
              <MapPin size={14} weight="bold" /> Otwórz mapę
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6B3D]">
              Godziny
            </p>
            <p className="mt-4 text-2xl md:text-3xl tracking-tight">
              <span className="text-[#1F1A12]/55">
                {KANCELARIA.hours.weekdays}
              </span>{" "}
              <span className="font-mono tabular-nums">
                {KANCELARIA.hours.time}
              </span>
            </p>
            <p className="mt-4 text-sm text-[#1F1A12]/65 leading-relaxed max-w-[58ch]">
              {KANCELARIA.hoursNote}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6B3D] mb-3">
              Lokalizacja
            </p>
            <MapEmbed theme="champagne" className="h-[280px]" />
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-[#1F1A12]/12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8C6B3D] mb-10">
          Rachunki bankowe
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-sm text-[#1F1A12]/55">Operacyjny</p>
            <p className="mt-2 font-mono text-xl md:text-2xl tracking-tight tabular-nums break-all">
              {KANCELARIA.bank.operating}
            </p>
          </div>
          <div>
            <p className="text-sm text-[#1F1A12]/55">Depozytowy</p>
            <p className="mt-2 font-mono text-xl md:text-2xl tracking-tight tabular-nums break-all">
              {KANCELARIA.bank.deposit}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1F1A12]/12 py-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap gap-x-8 gap-y-2 justify-between text-[10px] font-mono text-[#1F1A12]/45 uppercase tracking-[0.22em]">
        <span>Pach & Świątek · spółka cywilna</span>
        <span>{KANCELARIA.address.city}</span>
      </footer>
    </main>
  );
}
