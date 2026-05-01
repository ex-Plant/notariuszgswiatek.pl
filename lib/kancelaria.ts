export const KANCELARIA = {
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
  geo: { lat: 50.0690956, lng: 19.9181186 },
  email: "kancelaria@notariuszkrk.pl",
  phone: { display: "+48 12 423 46 14", tel: "+48124234614" },
  mobile: { display: "+48 790 550 548", tel: "+48790550548" },
  hours: { weekdays: "pon – pt", time: "09:00 – 17:00" },
  hoursNote:
    "Istnieje możliwość dostosowania godzin funkcjonowania kancelarii do indywidualnych potrzeb, również w dni wolne od pracy, po wcześniejszym ustaleniu telefonicznym.",
  bank: {
    operating: "90 1140 2004 0000 3502 8537 6087",
    deposit: "86 1140 2004 0000 3802 8565 9155",
  },
} as const;

export const VARIANTS = [
  { slug: "zaufanie", label: "Zaufanie", caption: "Trust · Private-bank restraint, real map" },
  { slug: "edytorska", label: "Edytorska", caption: "Editorial Quiet" },
  { slug: "klasyczna", label: "Klasyczna", caption: "Classical serif · Cormorant + forest" },
  { slug: "paragraf", label: "Paragraf", caption: "Legal-act layout · §-numbered, drop cap, marginalia" },
  { slug: "pieczec", label: "Pieczęć", caption: "Notary seal · champagne, rotating coat" },
  { slug: "marmur", label: "Marmur", caption: "Marble Dark" },
  { slug: "marmur-jasny", label: "Marmur jasny", caption: "Marble Light — same composition, inverted palette" },
  { slug: "akwarela", label: "Akwarela", caption: "Watercolor · centered thin logo, ink-wash bleed" },
  { slug: "akord", label: "Akord", caption: "Vertical masthead · brand running bottom→top on left edge" },
  { slug: "gilosz", label: "Gilosz", caption: "Guilloché · banknote-style security pattern ribbon" },
  { slug: "sygnatura", label: "Sygnatura", caption: "Signature · animated SVG ink autograph" },
] as const;
