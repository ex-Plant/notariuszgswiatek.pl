import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { MapEmbed } from "@/app/_components/map-embed";

const ACCENT = "#7A1F1F";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F4EEDF] text-[#15130E] selection:bg-[#7A1F1F] selection:text-[#F4EEDF] flex-1 relative">
      <div
        aria-hidden
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.045] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
        }}
      />

      <nav className="border-b border-[#15130E]/15">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
          <Link
            href="/warianty"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#15130E]/55 hover:text-[#7A1F1F] transition-colors"
          >
            <ArrowLeft size={12} weight="bold" /> Galeria
          </Link>
          <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#15130E]/65 hidden md:block">
            Repertorium &middot; Pach & Świątek &middot; {KANCELARIA.address.city}
          </p>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#15130E]/40">
            Wariant &middot; Paragraf
          </span>
        </div>
      </nav>

      <article className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 pt-20 md:pt-32 pb-24">
        <header className="md:col-span-12 md:col-start-1 mb-16 md:mb-24">
          <p
            className="font-mono text-[11px] uppercase tracking-[0.28em]"
            style={{ color: ACCENT }}
          >
            Akt &middot; Repertorium A &middot; {KANCELARIA.address.city}
          </p>
          <h1 className="mt-8 text-4xl md:text-6xl tracking-tight leading-[1.04] max-w-[18ch] font-medium">
            Kancelaria Notarialna{" "}
            <span className="text-[#15130E]/55">Pach & Świątek</span>
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#15130E]/55">
            Notariusz Gabriela Świątek &middot; {KANCELARIA.legalForm}
          </p>
        </header>

        <Section
          mark="§ 1"
          title="Wstęp"
          marginalia={
            <Marginalia
              label="Lokalizacja"
              lines={[
                KANCELARIA.address.street,
                `(${KANCELARIA.address.floor})`,
                `${KANCELARIA.address.postal} ${KANCELARIA.address.city}`,
              ]}
            />
          }
        >
          <p className="text-base md:text-lg leading-[1.85] text-justify hyphens-auto first-letter:font-mono first-letter:float-left first-letter:font-medium first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1.5 first-letter:text-[#7A1F1F]">
            Kancelaria Notarialna Pach&nbsp;&&nbsp;Świątek &mdash; notariusze
            spółka cywilna &mdash; działa w&nbsp;centrum Krakowa, przy ulicy
            Urzędniczej. Sporządzane są akty notarialne, prowadzone depozyty
            oraz wykonywane czynności urzędowe wymagane przez ustawę.
            Przyjmowanie stron odbywa się w&nbsp;dni robocze, a&nbsp;w
            uzasadnionych przypadkach &mdash; po wcześniejszym ustaleniu
            telefonicznym &mdash; również poza standardowymi godzinami pracy.
          </p>
        </Section>

        <Section
          mark="§ 2"
          title="Godziny przyjęć"
          marginalia={
            <Marginalia
              label="Uwaga"
              lines={[
                "Spotkania w dni wolne",
                "po wcześniejszym",
                "uzgodnieniu telefonicznym.",
              ]}
            />
          }
        >
          <p className="text-3xl md:text-5xl tracking-tight leading-none">
            <span className="text-[#15130E]/60">
              {KANCELARIA.hours.weekdays}
            </span>
            &nbsp;&nbsp;
            <span className="font-mono tabular-nums">
              {KANCELARIA.hours.time}
            </span>
          </p>
          <p className="mt-6 text-base md:text-lg leading-[1.85] text-justify hyphens-auto text-[#15130E]/80 max-w-[58ch]">
            {KANCELARIA.hoursNote}
          </p>
        </Section>

        <Section
          mark="§ 3"
          title="Kontakt"
          marginalia={
            <Marginalia
              label="Korespondencja"
              lines={[KANCELARIA.email]}
              breakAll
            />
          }
        >
          <dl className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 border-b border-[#15130E]/15 pb-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55 sm:w-44 shrink-0">
                Telefon kancelarii
              </dt>
              <dd>
                <a
                  href={`tel:${KANCELARIA.phone.tel}`}
                  className="font-mono text-2xl md:text-3xl tabular-nums tracking-tight hover:text-[#7A1F1F] transition-colors"
                >
                  {KANCELARIA.phone.display}
                </a>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8 border-b border-[#15130E]/15 pb-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55 sm:w-44 shrink-0">
                Telefon komórkowy
              </dt>
              <dd>
                <a
                  href={`tel:${KANCELARIA.mobile.tel}`}
                  className="font-mono text-2xl md:text-3xl tabular-nums tracking-tight hover:text-[#7A1F1F] transition-colors"
                >
                  {KANCELARIA.mobile.display}
                </a>
              </dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55 sm:w-44 shrink-0">
                E-mail
              </dt>
              <dd>
                <a
                  href={`mailto:${KANCELARIA.email}`}
                  className="text-base md:text-lg break-all hover:text-[#7A1F1F] transition-colors"
                >
                  {KANCELARIA.email}
                </a>
              </dd>
            </div>
          </dl>
        </Section>

        <Section
          mark="§ 4"
          title="Lokalizacja"
          marginalia={
            <Marginalia
              label="Mapa"
              lines={["Kliknij, aby przybliżać", "kółkiem myszy."]}
            />
          }
        >
          <p className="text-base md:text-lg leading-[1.85] text-[#15130E]/80 max-w-[60ch]">
            Kancelaria mieści się przy {KANCELARIA.address.street},{" "}
            {KANCELARIA.address.floor}, w&nbsp;Krakowie ({KANCELARIA.address.postal}).
          </p>
          <div className="mt-8">
            <MapEmbed
              theme="paper"
              className="w-full h-[300px] md:h-[420px]"
            />
          </div>
        </Section>

        <Section
          mark="§ 5"
          title="Rachunki bankowe"
          marginalia={
            <Marginalia
              label="Numery"
              lines={[
                "Operacyjny dla czynności",
                "notarialnych, depozytowy",
                "dla depozytów.",
              ]}
            />
          }
          last
        >
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55">
                Operacyjny
              </p>
              <p className="mt-3 font-mono text-lg md:text-2xl tabular-nums tracking-tight break-all">
                {KANCELARIA.bank.operating}
              </p>
            </div>
            <div className="border-t border-[#15130E]/15 pt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55">
                Depozytowy
              </p>
              <p className="mt-3 font-mono text-lg md:text-2xl tabular-nums tracking-tight break-all">
                {KANCELARIA.bank.deposit}
              </p>
            </div>
          </div>
        </Section>
      </article>

      <footer className="border-t border-[#15130E]/15">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8 flex flex-wrap gap-x-10 gap-y-2 justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-[#15130E]/55">
          <span>
            {KANCELARIA.name} &middot; {KANCELARIA.legalForm}
          </span>
          <span>
            {KANCELARIA.address.street} &middot; {KANCELARIA.address.postal}{" "}
            {KANCELARIA.address.city}
          </span>
        </div>
      </footer>
    </main>
  );
}

type SectionProps = {
  mark: string;
  title: string;
  marginalia?: React.ReactNode;
  last?: boolean;
  children: React.ReactNode;
};

function Section({ mark, title, marginalia, last, children }: SectionProps) {
  return (
    <section
      className={`md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 py-12 md:py-16 ${last ? "" : "border-b border-[#15130E]/15"}`}
    >
      <div className="md:col-span-2 md:col-start-1">
        <p
          className="font-mono text-sm md:text-base tracking-tight"
          style={{ color: ACCENT }}
        >
          {mark}
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#15130E]/55">
          {title}
        </p>
      </div>
      <div className="md:col-span-7 md:col-start-3">{children}</div>
      {marginalia ? (
        <aside className="md:col-span-3 md:col-start-10 md:border-l md:border-[#15130E]/15 md:pl-6">
          {marginalia}
        </aside>
      ) : null}
    </section>
  );
}

function Marginalia({
  label,
  lines,
  breakAll,
}: {
  label: string;
  lines: readonly string[];
  breakAll?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#15130E]/50">
        {label}
      </p>
      <p
        className={`mt-3 text-sm leading-relaxed text-[#15130E]/70 ${breakAll ? "break-all" : ""}`}
      >
        {lines.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </p>
    </div>
  );
}
