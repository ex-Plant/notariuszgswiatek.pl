import {
  ArrowUpRightIcon,
  BankIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import { MapEmbed } from "@/app/_components/map-embed";
import { Eyebrow } from "@/app/_components/eyebrow";
import { GridSection } from "@/app/_components/grid-section";

export default function Page() {
  return (
    <main className="min-h-dvh bg-paper text-ink selection:bg-ink selection:text-paper flex-1">
      <div className="max-w-shell mx-auto">
        <div className=" py-6 px-6 md:px-12 flex flex-wrap gap-x-10 gap-y-3 justify-end text-fine font-mono uppercase tracking-label text-ink/55">
          <a
            href="tel:+48790550548"
            className="inline-flex items-center gap-2 hover:text-ink transition-colors tabular-nums"
          >
            <PhoneIcon size={12} weight="regular" className="text-ink/55" />
            +48 790 550 548
          </a>
        </div>

        <header className="px-6 md:px-12 pt-12 md:pt-24 pb-6 md:pb-32  text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-display leading-[1.05]">
            Gabriela Świątek
          </h1>
          <p className="mt-1 font-mono text-xl uppercase tracking-eyebrow text-ink/60">
            Notariusz
          </p>
        </header>

        <GridSection
          borderTop={false}
          rail={
            <>
              <Eyebrow>Wizyty</Eyebrow>
              <p className="text-base leading-relaxed">Poniedziałek – Piątek</p>
              <p className="text-base leading-relaxed">
                <span className="tabular-nums">09:00 – 17:00</span>
              </p>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                Istnieje możliwość dostosowania godzin funkcjonowania kancelarii
                do indywidualnych potrzeb, również w dni wolne od pracy, po
                wcześniejszym ustaleniu telefonicznym.
              </p>
            </>
          }
        >
          <>
            <Eyebrow>Usługi</Eyebrow>
            <p className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-[58ch]">
              Kancelaria notarialna w&nbsp;centrum Krakowa przy ulicy
              Urzędniczej. Akty notarialne, depozyty, czynności urzędowe.
            </p>
          </>
        </GridSection>

        <section className="px-6 md:px-12">
          <div className="border-t border-ink/12 py-10 md:py-16">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-6 pr-10 md:pr-0">
              <div>
                <Eyebrow>Lokalizacja</Eyebrow>
                <p className="text-data leading-snug">
                  ul. Urzędnicza 20 lok. 4
                  <span className="text-ink/50"> (parter)</span>
                </p>
                <p className="mt-1 text-data font-mono tabular-nums">
                  30-051 Kraków
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Urz%C4%99dnicza%2020%2C%20Krak%C3%B3w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink/55 hover:text-ink transition-colors pb-0.5"
              >
                Otwórz w Google Maps
                <ArrowUpRightIcon
                  size={14}
                  weight="regular"
                  className="text-ink/55"
                />
              </a>
            </div>
            <MapEmbed
              theme="paper"
              className="w-full h-[320px] md:h-[400px]"
              caption="Kliknij mapę, aby przybliżać kółkiem myszy."
            />
          </div>
        </section>

        <GridSection
          rail={
            <>
              <Eyebrow>Korespondencja</Eyebrow>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:gabriela.swiatek@kin.pl"
                    className="inline-flex items-center gap-3 text-data break-all hover:text-ink/60 transition-colors"
                  >
                    <EnvelopeSimpleIcon
                      size={20}
                      weight="regular"
                      className="shrink-0 text-ink/55"
                    />
                    gabriela.swiatek@kin.pl
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kancelaria@notariuszkrk.pl"
                    className="inline-flex items-center gap-3 text-data break-all hover:text-ink/60 transition-colors"
                  >
                    <EnvelopeSimpleIcon
                      size={20}
                      weight="regular"
                      className="shrink-0 text-ink/55"
                    />
                    kancelaria@notariuszkrk.pl
                  </a>
                </li>
              </ul>
            </>
          }
        >
          <Eyebrow>Telefon</Eyebrow>
          <a
            href="tel:+48790550548"
            className="inline-flex items-center gap-3 text-data tabular-nums hover:text-ink/60 transition-colors"
          >
            <PhoneIcon size={20} weight="regular" className="text-ink/55" />
            +48 790 550 548
          </a>
        </GridSection>

        <GridSection
          railSide="left"
          rail={
            <>
              <Eyebrow>Rachunki bankowe</Eyebrow>
              <p className="text-sm text-ink/65 leading-relaxed">
                Numery dla wpłat związanych z&nbsp;czynnościami notarialnymi
                oraz dla depozytów notarialnych.
              </p>
            </>
          }
        >
          <div className="space-y-10">
            <div>
              <Eyebrow>Rachunek operacyjny</Eyebrow>
              <p className="inline-flex items-center gap-3 text-data tabular-nums break-all">
                <BankIcon
                  size={20}
                  weight="regular"
                  className="shrink-0 text-ink/55"
                />
                90 1140 2004 0000 3502 8537 6087
              </p>
            </div>
            <div className="border-t border-ink/12 pt-10">
              <Eyebrow>Rachunek depozytowy</Eyebrow>
              <p className="inline-flex items-center gap-3 text-data tabular-nums break-all">
                <BankIcon
                  size={20}
                  weight="regular"
                  className="shrink-0 text-ink/55"
                />
                86 1140 2004 0000 3802 8565 9155
              </p>
            </div>
          </div>
        </GridSection>

        <footer className="px-6 md:px-12">
          <div className="border-t border-ink/12 py-6 flex justify-between text-fine font-mono uppercase tracking-label text-ink/55">
            <p> Gabriela Świątek Notariusz </p>
            <p>2026</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
