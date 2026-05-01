import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { MapEmbed } from "@/app/_components/map-embed";

const cormorant = Cormorant_Garamond({
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-cormorant",
});

export default function Page() {
  return (
    <main
      className={`${cormorant.variable} min-h-dvh bg-[#F2EDE0] text-[#15140E] selection:bg-[#1F3A2B] selection:text-[#F2EDE0] flex-1`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
        <Link
          href="/warianty"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#15140E]/55 hover:text-[#1F3A2B] transition-colors"
        >
          <ArrowLeft size={12} weight="bold" /> Galeria
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#15140E]/40">
          Wariant · Klasyczna
        </span>
      </nav>

      <header className="max-w-[1280px] mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-16 md:pb-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#1F3A2B]">
          Notariusz · Kraków · od 2026
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="mt-10 text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-[-0.02em] font-light"
        >
          Gabriela
          <br />
          <span className="italic font-medium text-[#1F3A2B]">Świątek</span>
        </h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="md:col-span-7 md:col-start-1 text-2xl md:text-3xl leading-snug max-w-[36ch] text-[#15140E]/85 font-light"
          >
            Kancelaria Notarialna Pach&nbsp;&&nbsp;Świątek &mdash;{" "}
            <span className="italic">notariusze spółka cywilna</span>.
            Akty&nbsp;notarialne, depozyty, czynności urzędowe sporządzane
            w&nbsp;centrum&nbsp;Krakowa.
          </p>
        </div>
      </header>

      <Divider />

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1F3A2B]">
            I &middot; Wizyty
          </p>
        </div>
        <div className="md:col-span-9 space-y-6">
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-4xl md:text-6xl tracking-tight leading-none font-light"
          >
            <span className="italic text-[#15140E]/55">
              {KANCELARIA.hours.weekdays}
            </span>
            &nbsp;&nbsp;
            <span className="font-mono text-3xl md:text-5xl tabular-nums">
              {KANCELARIA.hours.time}
            </span>
          </p>
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-lg md:text-xl leading-relaxed text-[#15140E]/75 max-w-[58ch]"
          >
            {KANCELARIA.hoursNote}
          </p>
        </div>
      </section>

      <Divider />

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1F3A2B]">
            II &middot; Adres
          </p>
        </div>
        <div className="md:col-span-9">
          <p
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            className="text-3xl md:text-5xl leading-tight font-light"
          >
            {KANCELARIA.address.street}
            <br />
            <span className="italic text-[#15140E]/55">
              ({KANCELARIA.address.floor}) &middot; {KANCELARIA.address.postal}{" "}
              {KANCELARIA.address.city}
            </span>
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm border-b border-[#1F3A2B] text-[#1F3A2B] hover:opacity-70 transition-opacity pb-0.5"
          >
            <MapPin size={14} weight="bold" /> Otwórz mapę Google
          </a>
          <div className="mt-10">
            <MapEmbed theme="forest" className="h-[320px] md:h-[420px]" />
          </div>
        </div>
      </section>

      <Divider />

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1F3A2B]">
            III &middot; Kontakt
          </p>
        </div>
        <ul className="md:col-span-9 space-y-8">
          <li>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15140E]/50">
              Telefon kancelarii
            </p>
            <a
              href={`tel:${KANCELARIA.phone.tel}`}
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              className="mt-2 block text-3xl md:text-5xl tabular-nums font-light hover:text-[#1F3A2B] transition-colors"
            >
              {KANCELARIA.phone.display}
            </a>
          </li>
          <li>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15140E]/50">
              Telefon komórkowy
            </p>
            <a
              href={`tel:${KANCELARIA.mobile.tel}`}
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              className="mt-2 block text-3xl md:text-5xl tabular-nums font-light hover:text-[#1F3A2B] transition-colors"
            >
              {KANCELARIA.mobile.display}
            </a>
          </li>
          <li>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15140E]/50">
              Korespondencja
            </p>
            <a
              href={`mailto:${KANCELARIA.email}`}
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              className="mt-2 block text-2xl md:text-3xl italic font-light break-all hover:text-[#1F3A2B] transition-colors"
            >
              {KANCELARIA.email}
            </a>
          </li>
        </ul>
      </section>

      <Divider />

      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12">
        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1F3A2B]">
            IV &middot; Rachunki
          </p>
        </div>
        <div className="md:col-span-9 space-y-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15140E]/50">
              Operacyjny
            </p>
            <p className="mt-3 font-mono text-xl md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.operating}
            </p>
          </div>
          <div className="border-t border-[#1F3A2B]/15 pt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15140E]/50">
              Depozytowy
            </p>
            <p className="mt-3 font-mono text-xl md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.deposit}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1F3A2B]/20 py-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-wrap gap-x-10 gap-y-3 justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-[#15140E]/55">
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

function Divider() {
  return (
    <div
      aria-hidden
      className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center gap-4 text-[#1F3A2B]/40"
    >
      <span className="h-px flex-1 bg-[#1F3A2B]/20" />
      <span className="text-xs">&middot;</span>
      <span className="h-px flex-1 bg-[#1F3A2B]/20" />
    </div>
  );
}
