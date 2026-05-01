import Link from "next/link";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { MapEmbed } from "@/app/_components/map-embed";
import { RotatingSeal } from "./rotating-seal";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F2EBDD] text-[#1F1A12] selection:bg-[#8C6B3D] selection:text-[#F2EBDD] flex-1">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
        <Link
          href="/warianty"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#1F1A12]/55 hover:text-[#8C6B3D] transition-colors"
        >
          <ArrowLeft size={12} weight="bold" /> Galeria
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#1F1A12]/40">
          Wariant · Pieczęć
        </span>
      </nav>

      <header className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-16 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-center">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8C6B3D]">
            Notariusz · Kraków
          </p>
          <h1 className="mt-8 text-5xl md:text-7xl tracking-tighter leading-[0.95] font-medium">
            Gabriela Świątek
          </h1>
          <p
            className="mt-3 text-3xl md:text-5xl tracking-tight font-light text-[#1F1A12]/55"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            notariusz
          </p>
          <p className="mt-10 text-base md:text-lg leading-relaxed text-[#1F1A12]/80 max-w-[52ch]">
            Kancelaria Notarialna Pach&nbsp;&&nbsp;Świątek &mdash; spółka
            cywilna prowadzona w&nbsp;centrum Krakowa. Akty notarialne,
            depozyty, czynności urzędowe.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#1F1A12]/55">
            <span>{KANCELARIA.hours.weekdays}</span>
            <span className="font-mono tabular-nums text-[#1F1A12] text-base normal-case tracking-normal">
              {KANCELARIA.hours.time}
            </span>
            <span className="hidden md:inline">&middot;</span>
            <span>Krk · ul. Urzędnicza 20/4</span>
          </div>
        </div>
        <div className="md:col-span-5">
          <RotatingSeal />
        </div>
      </header>

      <section className="border-y border-[#8C6B3D]/25 bg-[#EAE0CC]/40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B3D]">
              Telefon kancelarii
            </p>
            <a
              href={`tel:${KANCELARIA.phone.tel}`}
              className="mt-3 block text-2xl md:text-3xl tracking-tight tabular-nums hover:text-[#8C6B3D] transition-colors"
            >
              {KANCELARIA.phone.display}
            </a>
          </div>
          <div className="md:border-l md:border-[#8C6B3D]/25 md:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B3D]">
              Telefon komórkowy
            </p>
            <a
              href={`tel:${KANCELARIA.mobile.tel}`}
              className="mt-3 block text-2xl md:text-3xl tracking-tight tabular-nums hover:text-[#8C6B3D] transition-colors"
            >
              {KANCELARIA.mobile.display}
            </a>
          </div>
          <div className="md:border-l md:border-[#8C6B3D]/25 md:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B3D]">
              Korespondencja
            </p>
            <a
              href={`mailto:${KANCELARIA.email}`}
              className="mt-3 block text-base md:text-lg break-all hover:text-[#8C6B3D] transition-colors"
            >
              {KANCELARIA.email}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B3D]">
            Adres
          </p>
          <p className="mt-6 text-3xl md:text-4xl tracking-tight leading-snug">
            {KANCELARIA.address.street}
            <br />
            <span className="text-[#1F1A12]/55">
              ({KANCELARIA.address.floor})
            </span>
            <br />
            <span className="font-mono tabular-nums text-2xl md:text-3xl">
              {KANCELARIA.address.postal} {KANCELARIA.address.city}
            </span>
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm border-b border-[#8C6B3D] text-[#8C6B3D] hover:opacity-70 transition-opacity pb-0.5"
          >
            <MapPin size={14} weight="bold" /> Otwórz mapę Google
          </a>
          <p className="mt-10 text-sm text-[#1F1A12]/65 leading-relaxed max-w-[44ch]">
            {KANCELARIA.hoursNote}
          </p>
        </div>
        <div className="md:col-span-7">
          <MapEmbed
            theme="champagne"
            className="w-full h-[340px] md:h-[460px]"
            caption="Kliknij mapę, aby przybliżać kółkiem myszy."
          />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#8C6B3D]/25 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6B3D]">
            Rachunki bankowe
          </p>
        </div>
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#1F1A12]/55">
              Operacyjny
            </p>
            <p className="mt-3 font-mono text-lg md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.operating}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#1F1A12]/55">
              Depozytowy
            </p>
            <p className="mt-3 font-mono text-lg md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.deposit}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8C6B3D]/25 py-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-wrap gap-x-10 gap-y-3 justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-[#1F1A12]/55">
        <span>
          {KANCELARIA.name} &middot; {KANCELARIA.legalForm}
        </span>
        <span>
          {KANCELARIA.address.street}, {KANCELARIA.address.postal}{" "}
          {KANCELARIA.address.city}
        </span>
      </footer>
    </main>
  );
}
