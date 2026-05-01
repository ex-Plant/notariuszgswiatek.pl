import { Montserrat } from "next/font/google";
import { KANCELARIA } from "@/lib/kancelaria";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function Page() {
  return (
    <main
      className={`${montserrat.className} min-h-dvh bg-[#18181b] text-[#f4f4f5] flex-1 m-4`}
    >
      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl flex flex-wrap justify-between gap-8 relative z-[2]">
        <div className="address-card min-w-[250px]">
          <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
            {KANCELARIA.notary} – Notariusz
          </h2>
          <p className="leading-relaxed">
            {KANCELARIA.name}
            <br />
            {KANCELARIA.legalForm}
          </p>
          <p className="mt-4 leading-relaxed">
            {KANCELARIA.address.street} ({KANCELARIA.address.floor})
            <br />
            {KANCELARIA.address.postal} {KANCELARIA.address.city}
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(KANCELARIA.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-semibold text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
          >
            Otwórz mapę
          </a>
        </div>

        <div className="contact-card min-w-[250px]">
          <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
            Kontakt
          </h2>
          <p className="leading-relaxed">
            <strong>E-mail:</strong>{" "}
            <a
              href={`mailto:${KANCELARIA.email}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {KANCELARIA.email}
            </a>
          </p>
          <p className="leading-relaxed">
            <strong>Telefon:</strong>{" "}
            <a
              href={`tel:${KANCELARIA.phone.tel}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {KANCELARIA.phone.display}
            </a>
          </p>
          <p className="leading-relaxed">
            <strong>Komórka:</strong>{" "}
            <a
              href={`tel:${KANCELARIA.mobile.tel}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {KANCELARIA.mobile.display}
            </a>
          </p>
        </div>
      </section>

      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl">
        <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Godziny otwarcia kancelarii
        </h2>
        <p>poniedziałek – piątek {KANCELARIA.hours.time.replace(/\s/g, " ")}</p>
        <p className="text-[#a1a1aa] text-[0.95rem] mt-2">
          {KANCELARIA.hoursNote}
        </p>
      </section>

      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl">
        <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Numer rachunku bankowego
        </h2>
        <p>{KANCELARIA.bank.operating}</p>
        <h2 className="text-[1.1rem] mt-6 mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Numer rachunku depozytowego
        </h2>
        <p>{KANCELARIA.bank.deposit}</p>
      </section>

      <div className="h-12" />
    </main>
  );
}
