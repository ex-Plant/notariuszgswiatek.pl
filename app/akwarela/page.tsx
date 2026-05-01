import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { InkWash } from "./ink-wash";

export default function Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#FBFBFB] text-[#0F1B2D] selection:bg-[#0F1B2D] selection:text-[#FBFBFB] flex-1">
      <InkWash />

      <div className="relative z-10 grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <header className="px-6 md:px-14 pt-6 pb-2 flex items-center justify-between">
          <Link
            href="/warianty"
            className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0F1B2D]/55 hover:text-[#0F1B2D] transition-colors"
          >
            <ArrowLeft size={12} weight="bold" /> Galeria
          </Link>
          <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-[#0F1B2D]/45">
            Kraków · MMXXVI
          </p>
        </header>

        <section className="px-6 md:px-14 pt-16 md:pt-24 max-w-[1500px] w-full">
          <p className="text-[10px] font-mono uppercase tracking-[0.42em] text-[#0F1B2D]/65">
            Kancelaria Notarialna · Pach &amp; Świątek
          </p>

          <h1 className="mt-10 md:mt-14 font-extralight tracking-[-0.02em] leading-[0.92] text-[clamp(3rem,11vw,11rem)]">
            Gabriela
            <br />
            Świątek
          </h1>

          <div className="mt-8 flex items-center gap-5">
            <span className="block h-px w-14 bg-[#0F1B2D]/45" />
            <span className="text-[10px] font-mono uppercase tracking-[0.42em] text-[#0F1B2D]/70">
              Notariusz
            </span>
          </div>

          <p className="mt-12 md:mt-16 max-w-[52ch] text-base md:text-lg leading-relaxed font-light text-[#0F1B2D]/75">
            {KANCELARIA.hoursNote}
          </p>
        </section>

        <footer className="mt-16 px-6 md:px-14 pb-12 max-w-[1500px] w-full">
          <div className="h-px w-full bg-[#0F1B2D]/15" />

          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            <Field label="Kancelaria">
              {KANCELARIA.address.street}
              <br />
              {KANCELARIA.address.postal} {KANCELARIA.address.city}
            </Field>
            <Field label="Telefon">
              <a
                href={`tel:${KANCELARIA.phone.tel}`}
                className="hover:text-[#1E3A8A] transition-colors"
              >
                {KANCELARIA.phone.display}
              </a>
              <br />
              <a
                href={`tel:${KANCELARIA.mobile.tel}`}
                className="hover:text-[#1E3A8A] transition-colors text-[#0F1B2D]/65"
              >
                {KANCELARIA.mobile.display}
              </a>
            </Field>
            <Field label="E-mail">
              <a
                href={`mailto:${KANCELARIA.email}`}
                className="break-all hover:text-[#1E3A8A] transition-colors"
              >
                {KANCELARIA.email}
              </a>
            </Field>
            <Field label="Godziny">
              {KANCELARIA.hours.weekdays}
              <br />
              {KANCELARIA.hours.time}
            </Field>
          </dl>

          <dl className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-[800px]">
            <Field label="Konto bieżące">
              <span className="font-mono text-sm md:text-base tabular-nums">
                {KANCELARIA.bank.operating}
              </span>
            </Field>
            <Field label="Konto depozytowe">
              <span className="font-mono text-sm md:text-base tabular-nums">
                {KANCELARIA.bank.deposit}
              </span>
            </Field>
          </dl>
        </footer>
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
      <dt className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#0F1B2D]/55">
        {label}
      </dt>
      <dd className="mt-3 text-base md:text-lg font-light leading-relaxed">
        {children}
      </dd>
    </div>
  );
}
