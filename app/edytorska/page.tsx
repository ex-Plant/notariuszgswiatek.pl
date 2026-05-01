import Link from "next/link";
import { ArrowLeft, MapPin } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { MapEmbed } from "@/app/_components/map-embed";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F8F6F1] text-zinc-950 selection:bg-[#9F2B3A] selection:text-[#F8F6F1] flex-1">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-950 transition-colors"
        >
          <ArrowLeft size={14} weight="bold" /> Galeria
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          Wariant · Edytorska
        </span>
      </nav>

      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-20 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
        <div className="md:col-span-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#9F2B3A]">
            Notariusz · Kraków
          </p>
          <h1 className="mt-8 text-5xl md:text-8xl tracking-tighter leading-[0.92]">
            Gabriela
            <br />
            Świątek
          </h1>
          <p className="mt-10 text-lg md:text-xl leading-snug max-w-[42ch] text-zinc-700">
            Kancelaria Notarialna Pach&nbsp;&&nbsp;Świątek, notariusze spółka
            cywilna. Dokumenty z mocą prawną sporządzane w&nbsp;centrum Krakowa.
          </p>
        </div>
        <aside className="md:col-span-4 md:sticky md:top-24 md:self-start space-y-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Adres
            </p>
            <p className="mt-3 leading-relaxed">
              {KANCELARIA.address.street}{" "}
              <span className="text-zinc-500">
                ({KANCELARIA.address.floor})
              </span>
              <br />
              {KANCELARIA.address.postal} {KANCELARIA.address.city}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm border-b border-[#9F2B3A] text-[#9F2B3A] hover:opacity-70 transition-opacity"
            >
              <MapPin size={14} weight="bold" /> Otwórz mapę
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Kontakt
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`tel:${KANCELARIA.phone.tel}`}
                  className="hover:text-[#9F2B3A] transition-colors tabular-nums"
                >
                  {KANCELARIA.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${KANCELARIA.mobile.tel}`}
                  className="hover:text-[#9F2B3A] transition-colors tabular-nums"
                >
                  {KANCELARIA.mobile.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${KANCELARIA.email}`}
                  className="hover:text-[#9F2B3A] transition-colors break-all"
                >
                  {KANCELARIA.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3">
              Lokalizacja
            </p>
            <MapEmbed theme="bone" className="h-[240px]" />
          </div>
        </aside>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-200">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Godziny
          </p>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-3xl md:text-5xl tracking-tight">
            <span className="text-zinc-500">{KANCELARIA.hours.weekdays}</span>
            &nbsp;&nbsp;
            <span className="font-mono tabular-nums">
              {KANCELARIA.hours.time}
            </span>
          </p>
          <p className="text-base text-zinc-600 max-w-[58ch] leading-relaxed">
            {KANCELARIA.hoursNote}
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-200">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            Rachunki
          </p>
        </div>
        <div className="md:col-span-8 space-y-10">
          <div>
            <p className="text-sm text-zinc-500">Rachunek operacyjny</p>
            <p className="mt-2 font-mono text-lg md:text-2xl tracking-tight tabular-nums break-all">
              {KANCELARIA.bank.operating}
            </p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Rachunek depozytowy</p>
            <p className="mt-2 font-mono text-lg md:text-2xl tracking-tight tabular-nums break-all">
              {KANCELARIA.bank.deposit}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap gap-x-8 gap-y-2 justify-between text-xs font-mono text-zinc-500 uppercase tracking-[0.18em]">
        <span>Kancelaria Notarialna Pach & Świątek s.c.</span>
        <span>{KANCELARIA.address.street}</span>
      </footer>
    </main>
  );
}
