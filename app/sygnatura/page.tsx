import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA } from "@/lib/kancelaria";
import { Signature } from "./signature";

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-[#0A0A0A] flex-1">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 pt-6 pb-2 flex items-center justify-between">
        <Link
          href="/warianty"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#0A0A0A]/55 hover:text-[#0A0A0A] transition-colors"
        >
          <ArrowLeft size={12} weight="bold" /> Galeria
        </Link>
        <p className="hidden md:block text-[10px] font-mono uppercase tracking-[0.32em] text-[#0A0A0A]/45">
          Sygnatura
        </p>
      </div>

      <section className="max-w-[1500px] mx-auto px-6 md:px-14 pt-16 md:pt-28 text-center">
        <p className="text-[10px] font-mono uppercase tracking-[0.42em] text-[#0A0A0A]/65">
          Kancelaria Notarialna · Pach &amp; Świątek
        </p>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-14 mt-10 md:mt-16">
        <div className="flex justify-center">
          <Signature />
        </div>
        <p className="mt-6 text-center text-[10px] font-mono uppercase tracking-[0.42em] text-[#0A0A0A]/55">
          {KANCELARIA.notary} · Notariusz
        </p>
      </section>

      <section className="max-w-[820px] mx-auto px-6 md:px-14 mt-16 md:mt-24">
        <p className="text-base md:text-lg font-light leading-relaxed text-center text-[#0A0A0A]/75 max-w-[58ch] mx-auto">
          {KANCELARIA.hoursNote}
        </p>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 md:px-14 mt-20 md:mt-28 pb-24">
        <div className="border-t border-[#0A0A0A]/15 pt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
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
              className="hover:underline text-[#0A0A0A]/65"
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
      </section>
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
