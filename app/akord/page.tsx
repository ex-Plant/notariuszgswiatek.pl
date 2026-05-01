import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-[#0A0A0A] flex-1">
      <div className="grid min-h-dvh md:grid-cols-[6rem_1fr]">
        <aside className="hidden md:flex border-r border-[#0A0A0A]/12 relative">
          <div className="sticky top-0 h-dvh flex flex-col justify-between py-6 px-3 w-full">
            <Link
              href="/warianty"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0A0A0A]/55 hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft size={12} weight="bold" />
            </Link>

            <p
              className="font-extralight uppercase tracking-[0.5em] text-xl whitespace-nowrap text-[#0A0A0A]"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Pach &amp; Świątek · Notariusze
            </p>

            <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#0A0A0A]/45 text-center">
              MMXXVI
            </p>
          </div>
        </aside>

        <div className="md:border-l-0">
          <header className="md:hidden px-6 pt-6 pb-2">
            <Link
              href="/warianty"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0A0A0A]/55 hover:text-[#0A0A0A] transition-colors"
            >
              <ArrowLeft size={12} weight="bold" /> Galeria
            </Link>
          </header>

          <section className="px-6 md:px-14 pt-14 md:pt-28 max-w-[1100px]">
            <p className="text-[10px] font-mono uppercase tracking-[0.42em] text-[#0A0A0A]/55">
              Notariusz
            </p>
            <h1 className="mt-6 font-extralight tracking-[-0.02em] leading-[0.92] text-[clamp(3rem,10vw,9rem)]">
              Gabriela
              <br />
              Świątek
            </h1>
            <p className="mt-10 max-w-[52ch] text-base md:text-lg leading-relaxed font-light text-[#0A0A0A]/70">
              {KANCELARIA.hoursNote}
            </p>
          </section>

          <section className="px-6 md:px-14 mt-20 md:mt-28">
            <div className="border-t border-[#0A0A0A]/12 pt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 max-w-[1100px]">
              <Field label="Kancelaria">
                {KANCELARIA.address.street}
                <br />
                {KANCELARIA.address.postal} {KANCELARIA.address.city}
              </Field>
              <Field label="Telefon">
                <a
                  href={`tel:${KANCELARIA.phone.tel}`}
                  className="hover:underline"
                >
                  {KANCELARIA.phone.display}
                </a>
              </Field>
              <Field label="Komórka">
                <a
                  href={`tel:${KANCELARIA.mobile.tel}`}
                  className="hover:underline"
                >
                  {KANCELARIA.mobile.display}
                </a>
              </Field>
              <Field label="E-mail">
                <a
                  href={`mailto:${KANCELARIA.email}`}
                  className="hover:underline break-all"
                >
                  {KANCELARIA.email}
                </a>
              </Field>
              <Field label="Godziny">
                {KANCELARIA.hours.weekdays}
                <br />
                {KANCELARIA.hours.time}
              </Field>
              <Field label="Konto bieżące">
                <span className="font-mono text-sm tabular-nums">
                  {KANCELARIA.bank.operating}
                </span>
              </Field>
              <Field label="Konto depozytowe">
                <span className="font-mono text-sm tabular-nums">
                  {KANCELARIA.bank.deposit}
                </span>
              </Field>
            </div>
          </section>

          <div className="h-20" />
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#0A0A0A]/55">
        {label}
      </dt>
      <dd className="mt-3 text-base font-light leading-relaxed">{children}</dd>
    </div>
  );
}
