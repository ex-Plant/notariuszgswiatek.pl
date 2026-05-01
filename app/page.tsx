import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { KANCELARIA, VARIANTS } from "@/lib/kancelaria";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#F8F6F1] text-zinc-950 flex-1 flex flex-col">
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 w-full">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          Pięć wariantów · maj 2026
        </p>
        <h1 className="mt-6 text-4xl md:text-7xl tracking-tighter leading-[0.95] max-w-4xl">
          Kancelaria Notarialna
          <br />
          <span className="text-zinc-500">Pach & Świątek</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-zinc-600 max-w-[58ch] leading-relaxed">
          Eksperymenty kierunków wizualnych dla strony notariuszki Gabrieli
          Świątek. Każdy slug to oddzielna estetyka, ten sam zestaw informacji.
        </p>
      </header>

      <ul className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 w-full divide-y divide-zinc-200 flex-1">
        {VARIANTS.map((v, i) => (
          <li key={v.slug}>
            <Link
              href={`/${v.slug}`}
              className="group flex items-baseline justify-between gap-8 py-8 md:py-10 transition-[padding] duration-300 hover:pl-4"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs text-zinc-400 tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <h2 className="text-2xl md:text-4xl tracking-tight">
                    {v.label}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-zinc-500">
                    {v.caption}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={28}
                weight="thin"
                className="shrink-0 transition-transform duration-300 group-hover:rotate-12"
              />
            </Link>
          </li>
        ))}
      </ul>

      <footer className="border-t border-zinc-200 py-8 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-wrap gap-x-8 gap-y-2 justify-between text-xs font-mono text-zinc-500 uppercase tracking-[0.18em]">
        <span>
          {KANCELARIA.address.street}, {KANCELARIA.address.city}
        </span>
        <span>{KANCELARIA.phone.display}</span>
      </footer>
    </main>
  );
}
