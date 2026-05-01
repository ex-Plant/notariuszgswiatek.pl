// Frozen reference: original layout (commit f3a997a, "Pach & Świątek" partnership data).
// Self-contained — does not consume the live KANCELARIA constant.
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const ORIGINAL = {
  name: "Kancelaria Notarialna Pach & Świątek",
  legalForm: "Notariusze spółka cywilna",
  notary: "Gabriela Świątek",
  address: {
    street: "ul. Urzędnicza 20 lok. 4",
    floor: "parter",
    postal: "30-051",
    city: "Kraków",
  },
  mapsQuery: "Urzędnicza 20, Kraków",
  email: "kancelaria@notariuszkrk.pl",
  phone: { display: "+48 12 423 46 14", tel: "+48124234614" },
  mobile: { display: "+48 790 550 548", tel: "+48790550548" },
  hours: { time: "09:00 – 17:00" },
  hoursNote:
    "Istnieje możliwość dostosowania godzin funkcjonowania kancelarii do indywidualnych potrzeb, również w dni wolne od pracy, po wcześniejszym ustaleniu telefonicznym.",
  bank: {
    operating: "90 1140 2004 0000 3502 8537 6087",
    deposit: "86 1140 2004 0000 3802 8565 9155",
  },
} as const;

export default function Page() {
  return (
    <main
      className={`${montserrat.className} min-h-dvh bg-[#18181b] text-[#f4f4f5] flex-1 m-4`}
    >
      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl flex flex-wrap justify-between gap-8 relative z-[2]">
        <div className="address-card min-w-[250px]">
          <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
            {ORIGINAL.notary} – Notariusz
          </h2>
          <p className="leading-relaxed">
            {ORIGINAL.name}
            <br />
            {ORIGINAL.legalForm}
          </p>
          <p className="mt-4 leading-relaxed">
            {ORIGINAL.address.street} ({ORIGINAL.address.floor})
            <br />
            {ORIGINAL.address.postal} {ORIGINAL.address.city}
          </p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(ORIGINAL.mapsQuery)}`}
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
              href={`mailto:${ORIGINAL.email}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {ORIGINAL.email}
            </a>
          </p>
          <p className="leading-relaxed">
            <strong>Telefon:</strong>{" "}
            <a
              href={`tel:${ORIGINAL.phone.tel}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {ORIGINAL.phone.display}
            </a>
          </p>
          <p className="leading-relaxed">
            <strong>Komórka:</strong>{" "}
            <a
              href={`tel:${ORIGINAL.mobile.tel}`}
              className="text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
            >
              {ORIGINAL.mobile.display}
            </a>
          </p>
        </div>
      </section>

      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl">
        <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Godziny otwarcia kancelarii
        </h2>
        <p>poniedziałek – piątek {ORIGINAL.hours.time}</p>
        <p className="text-[#a1a1aa] text-[0.95rem] mt-2">
          {ORIGINAL.hoursNote}
        </p>
      </section>

      <section className="container max-w-[900px] mx-auto p-6 mt-8 bg-[#27272a] border border-[#3f3f46] rounded-xl">
        <h2 className="text-[1.1rem] mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Numer rachunku bankowego
        </h2>
        <p>{ORIGINAL.bank.operating}</p>
        <h2 className="text-[1.1rem] mt-6 mb-3 font-semibold text-[#f4f4f5] border-b border-[#3f3f46] pb-4">
          Numer rachunku depozytowego
        </h2>
        <p>{ORIGINAL.bank.deposit}</p>
      </section>

      <div className="h-12" />
    </main>
  );
}
