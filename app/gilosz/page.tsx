import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { Guilloche } from "./guilloche";

export default function Page() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-white text-[#0F1B2D] flex-1">
      <Guilloche />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-14 pt-6">
        <Link
          href="/warianty"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0F1B2D]/55 hover:text-[#0F1B2D] transition-colors"
        >
          <ArrowLeft size={12} weight="bold" /> Galeria
        </Link>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:pl-[28%] md:pr-14 pt-16 md:pt-28 pb-24">
        <div className="flex items-center gap-4">
          <span className="block h-[2px] w-10 bg-[#0F1B2D]" />
          <p className="text-[10px] font-mono uppercase tracking-[0.42em] text-[#0F1B2D]/70">
            Akt notarialny · MMXXVI
          </p>
        </div>

        <h1 className="mt-10 font-extralight tracking-[-0.015em] leading-[0.95] text-4xl md:text-7xl">
          Kancelaria Notarialna
          <br />
          <span className="font-light">Pach &amp; Świątek</span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl font-light tracking-tight">
          Notariusz {KANCELARIA.notary}
        </p>

        <p className="mt-12 max-w-[58ch] text-base md:text-lg leading-relaxed font-light text-[#0F1B2D]/75">
          {KANCELARIA.hoursNote}
        </p>

        <div className="mt-16 border-t border-[#0F1B2D]/15 pt-10 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 max-w-[1000px]">
          <Field label="Kancelaria">
            {KANCELARIA.address.street}
            <br />
            {KANCELARIA.address.postal} {KANCELARIA.address.city}
          </Field>
          <Field label="Godziny">
            {KANCELARIA.hours.weekdays}
            <br />
            {KANCELARIA.hours.time}
          </Field>
          <Field label="Telefon">
            <a href={`tel:${KANCELARIA.phone.tel}`} className="hover:underline">
              {KANCELARIA.phone.display}
            </a>
            <br />
            <a
              href={`tel:${KANCELARIA.mobile.tel}`}
              className="hover:underline text-[#0F1B2D]/65"
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
      <dd className="mt-3 text-base font-light leading-relaxed">{children}</dd>
    </div>
  );
}
