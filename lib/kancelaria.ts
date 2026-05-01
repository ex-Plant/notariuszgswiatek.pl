export const KANCELARIA = {
  name: "Kancelaria Notarialna Gabriela Świątek",
  notary: "Gabriela Świątek",
  role: "Notariusz",
  address: {
    street: "ul. Urzędnicza 20 lok. 4",
    floor: "parter",
    postal: "30-051",
    city: "Kraków",
  },
  mapsQuery: "Urzędnicza 20, Kraków",
  geo: { lat: 50.0690956, lng: 19.9181186 },
  emails: ["gabriela.swiatek@kin.pl", "kancelaria@notariuszkrk.pl"],
  phone: { display: "+48 790 550 548", tel: "+48790550548" },
  hours: { weekdays: "pon – pt", time: "09:00 – 17:00" },
  hoursNote:
    "Istnieje możliwość dostosowania godzin funkcjonowania kancelarii do indywidualnych potrzeb, również w dni wolne od pracy, po wcześniejszym ustaleniu telefonicznym.",
  bank: {
    operating: "90 1140 2004 0000 3502 8537 6087",
    deposit: "86 1140 2004 0000 3802 8565 9155",
  },
} as const;
