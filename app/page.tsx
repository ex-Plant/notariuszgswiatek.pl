import { KANCELARIA } from "@/lib/kancelaria";
import { MapEmbed } from "@/app/_components/map-embed";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F4EFE6] text-[#0F1B2D] selection:bg-[#0F1B2D] selection:text-[#F4EFE6] flex-1">
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-40 pb-20 md:pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.18em] leading-[1.05]">
          Gabriela Świątek
        </h1>
        <p className="mt-6 font-mono text-[11px] md:text-xs uppercase tracking-[0.4em] text-[#0F1B2D]/60">
          {KANCELARIA.role}
        </p>
        <div className="mt-32 md:mt-56 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          <p className="md:col-span-7 text-lg md:text-xl leading-relaxed text-[#0F1B2D]/80 max-w-[58ch]">
            Kancelaria notarialna w&nbsp;centrum Krakowa, przy ulicy
            Urzędniczej. Akty notarialne, depozyty, czynności urzędowe.
          </p>
          <div className="md:col-span-4 md:col-start-9 md:border-l md:border-[#0F1B2D]/12 md:pl-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0F1B2D]/55">
              Wizyty
            </p>
            <p className="mt-3 text-base leading-relaxed">
              {KANCELARIA.hours.weekdays}{" "}
              <span className="font-mono tabular-nums">
                {KANCELARIA.hours.time}
              </span>
            </p>
            <p className="mt-2 text-sm text-[#0F1B2D]/60 leading-relaxed">
              Spotkania w&nbsp;dni wolne &mdash; po wcześniejszym ustaleniu
              telefonicznym.
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0F1B2D]/55">
              Lokalizacja
            </p>
            <p className="mt-3 text-2xl md:text-3xl tracking-tight leading-snug">
              {KANCELARIA.address.street}
              <span className="text-[#0F1B2D]/50">
                {" "}
                · ({KANCELARIA.address.floor})
              </span>
            </p>
            <p className="mt-1 font-mono tabular-nums text-2xl md:text-3xl">
              {KANCELARIA.address.postal} {KANCELARIA.address.city}
            </p>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-[#0F1B2D]/40 hover:border-[#0F1B2D] transition-colors pb-0.5"
          >
            Otwórz w Google Maps →
          </a>
        </div>
        <MapEmbed
          theme="paper"
          className="w-full h-[320px] md:h-[400px]"
          caption="Kliknij mapę, aby przybliżać kółkiem myszy."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 border-t border-[#0F1B2D]/12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0F1B2D]/55">
            Telefon
          </p>
          <a
            href={`tel:${KANCELARIA.phone.tel}`}
            className="mt-4 block text-2xl md:text-3xl tracking-tight tabular-nums hover:text-[#0F1B2D]/60 transition-colors"
          >
            {KANCELARIA.phone.display}
          </a>
        </div>
        <div className="md:border-l md:border-[#0F1B2D]/12 md:pl-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0F1B2D]/55">
            Korespondencja
          </p>
          <ul className="mt-4 space-y-2">
            {KANCELARIA.emails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="block text-base md:text-lg break-all hover:text-[#0F1B2D]/60 transition-colors"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-[#0F1B2D]/12">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#0F1B2D]/55">
            Rachunki bankowe
          </p>
          <p className="mt-4 text-sm text-[#0F1B2D]/65 leading-relaxed max-w-[36ch]">
            Numery dla wpłat związanych z&nbsp;czynnościami notarialnymi oraz
            dla depozytów notarialnych.
          </p>
        </div>
        <div className="md:col-span-8 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#0F1B2D]/55">
              Rachunek operacyjny
            </p>
            <p className="mt-3 font-mono text-xl md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.operating}
            </p>
          </div>
          <div className="border-t border-[#0F1B2D]/12 pt-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[#0F1B2D]/55">
              Rachunek depozytowy
            </p>
            <p className="mt-3 font-mono text-xl md:text-2xl tabular-nums tracking-tight break-all">
              {KANCELARIA.bank.deposit}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0F1B2D]/12 py-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap gap-x-10 gap-y-3 justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-[#0F1B2D]/55">
        <span>{KANCELARIA.name}</span>
        <span>
          {KANCELARIA.address.street}, {KANCELARIA.address.postal}{" "}
          {KANCELARIA.address.city}
        </span>
      </footer>
    </main>
  );
}
