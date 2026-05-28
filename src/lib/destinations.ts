export type Destination = {
  slug: string;
  city: string;
  country: string;
  emoji: string;
  tagline: string;
  description: string;
  clinicCount: number;
  gradient: string;
  highlights: string[];
  topTreatments: string[];
  practicalInfo: {
    flightTime: string;
    directFlights: string[];
    currency: string;
    language: string;
    timezone: string;
    bestTime: string;
  };
  neighborhoods: { name: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "istanbul",
    city: "Istanbul",
    country: "Turkey",
    emoji: "🕌",
    tagline: "Europe's undisputed medical tourism capital — world-class hospitals, rich culture, direct flights.",
    description:
      "Istanbul straddles two continents and has long been a crossroads of the world. Today, it also sits at the intersection of medical excellence and affordability. The city is home to over 80 of Turkey's top international clinics, many holding JCI accreditation — the same gold standard as leading UK and US hospitals. With direct flights from every major European city and a vibrant tourist infrastructure, Istanbul has become the first choice for hundreds of thousands of medical tourists each year.",
    clinicCount: 80,
    gradient: "from-blue-600 to-blue-800",
    highlights: [
      "80+ verified international clinics",
      "Direct flights from 60+ European cities",
      "Most JCI-accredited hospitals in Turkey",
      "World-class hotel infrastructure",
      "English widely spoken in medical settings",
    ],
    topTreatments: ["Hair Transplant", "Dental Veneers", "Rhinoplasty", "Bariatric Surgery", "IVF"],
    practicalInfo: {
      flightTime: "3.5–4.5 hours from UK/Germany",
      directFlights: ["London Heathrow", "London Gatwick", "Manchester", "Frankfurt", "Amsterdam", "Paris CDG"],
      currency: "Turkish Lira (TRY) — clinics quote in EUR/GBP",
      language: "Turkish (English widely spoken in clinics)",
      timezone: "UTC+3 (2h ahead of UK, 1h ahead of Germany)",
      bestTime: "April–June, September–November",
    },
    neighborhoods: [
      { name: "Şişli / Nişantaşı", desc: "The medical district — home to most international hair and cosmetic clinics." },
      { name: "Beşiktaş", desc: "Upscale area near major hospitals, excellent hotels within walking distance of clinics." },
      { name: "Beyoğlu / Taksim", desc: "Central location, well-connected, great for dental clinics and post-treatment recovery." },
    ],
    faqs: [
      {
        q: "Do I need a visa to visit Turkey from the UK or EU?",
        a: "UK citizens require an e-Visa (applied online, approx. £20, issued within minutes). Most EU citizens can enter visa-free with a valid passport or national ID card.",
      },
      {
        q: "Is Istanbul safe for medical tourists?",
        a: "Yes. Istanbul's major medical tourism districts (Şişli, Beşiktaş) are safe, tourist-friendly areas. Clinics routinely handle international patients and arrange secure airport transfers.",
      },
      {
        q: "How far are clinics from Istanbul airport?",
        a: "Istanbul Airport (IST) is approximately 35-50 minutes from central Istanbul by taxi or private transfer. Sabiha Gökçen Airport (SAW) is 45-60 minutes from the Asian side. Most clinics include airport transfers in their packages.",
      },
    ],
  },
  {
    slug: "ankara",
    city: "Ankara",
    country: "Turkey",
    emoji: "🏛️",
    tagline: "Turkey's capital — modern facilities, lower costs, and leading bariatric specialists.",
    description:
      "Ankara is Turkey's capital city and home to some of the country's finest medical institutions, including Hacettepe University Hospital — consistently ranked among the top hospitals in the Middle East and Eastern Europe. Less touristy than Istanbul, Ankara offers a more focused, clinical experience at prices typically 10-20% lower than the capital. It is particularly renowned for bariatric surgery, oncology, and orthopaedics.",
    clinicCount: 35,
    gradient: "from-purple-600 to-purple-800",
    highlights: [
      "Hacettepe University — top-ranked hospital in Turkey",
      "Prices 10-20% lower than Istanbul",
      "Leading destination for bariatric and metabolic surgery",
      "Less tourist traffic — more focused medical environment",
      "Excellent domestic connections from Istanbul",
    ],
    topTreatments: ["Bariatric Surgery", "Orthopaedics", "Oncology", "Hair Transplant", "Dental"],
    practicalInfo: {
      flightTime: "4–5 hours from UK/Germany",
      directFlights: ["London Stansted", "Frankfurt", "Vienna", "Amsterdam"],
      currency: "Turkish Lira (TRY) — clinics quote in EUR/GBP",
      language: "Turkish (English spoken in major hospital international departments)",
      timezone: "UTC+3",
      bestTime: "Year-round (continental climate — cold winters, hot summers)",
    },
    neighborhoods: [
      { name: "Çankaya", desc: "The diplomatic and medical hub of Ankara — home to most international clinics." },
      { name: "Kızılay", desc: "Central district, excellent hotel options, well connected by metro." },
    ],
    faqs: [
      {
        q: "How do I get to Ankara from Istanbul?",
        a: "Turkish Airlines and Pegasus operate frequent 1-hour flights between Istanbul and Ankara from €30. The high-speed train (YHT) takes 4 hours and is a comfortable alternative.",
      },
      {
        q: "Is Ankara better than Istanbul for bariatric surgery?",
        a: "For bariatric surgery specifically, Ankara has highly specialised centres including JCI-accredited facilities with dedicated international patient coordinators. Prices can be marginally lower, and the pace is quieter.",
      },
    ],
  },
  {
    slug: "izmir",
    city: "Izmir",
    country: "Turkey",
    emoji: "🌊",
    tagline: "Turkey's Aegean gem — cosmetic surgery hub with coastal recovery.",
    description:
      "Izmir is Turkey's third-largest city, a vibrant Aegean coastal metropolis known for its relaxed lifestyle, warm climate, and growing medical tourism sector. The city's private hospitals and clinics specialise particularly in cosmetic surgery and dental procedures. Recovering on the Aegean coast, with easy access to nearby Çeşme and Alaçatı resorts, makes Izmir unique as a destination that genuinely combines treatment with quality of life.",
    clinicCount: 22,
    gradient: "from-teal-600 to-teal-800",
    highlights: [
      "Aegean coastal location — ideal for recovery",
      "Cosmetic surgery and dental speciality",
      "Direct flights from major European cities",
      "Lower prices than Istanbul",
      "Access to Çeşme resort for post-treatment relaxation",
    ],
    topTreatments: ["Cosmetic Surgery", "Dental", "Hair Transplant", "Eye Surgery"],
    practicalInfo: {
      flightTime: "3.5–4 hours from UK/Germany",
      directFlights: ["London Gatwick", "Frankfurt", "Amsterdam", "Vienna", "Brussels"],
      currency: "Turkish Lira (TRY) — clinics quote in EUR/GBP",
      language: "Turkish (English in major clinics)",
      timezone: "UTC+3",
      bestTime: "April–October (Mediterranean climate)",
    },
    neighborhoods: [
      { name: "Alsancak", desc: "Trendy central district, many dental and cosmetic clinics, great dining and hotels." },
      { name: "Bornova", desc: "University and hospital district — more specialised medical facilities." },
    ],
    faqs: [
      {
        q: "Is Izmir good for cosmetic surgery?",
        a: "Yes — Izmir has an established cluster of board-certified plastic surgeons with strong international patient experience. Prices are competitive and the recovery environment is excellent.",
      },
    ],
  },
  {
    slug: "antalya",
    city: "Antalya",
    country: "Turkey",
    emoji: "🌴",
    tagline: "Combine treatment with a Mediterranean holiday — sun, sea, and world-class dental care.",
    description:
      "Antalya is Turkey's tourism capital on the Mediterranean coast, welcoming over 15 million visitors per year. Its medical tourism sector has grown rapidly, specialising in dental treatment and hair transplants — procedures that allow patients to recover while enjoying five-star resort facilities at a fraction of Northern European prices. Many patients pair a dental trip with a holiday, making Antalya one of the most popular combined medical tourism and leisure destinations in the world.",
    clinicCount: 18,
    gradient: "from-orange-500 to-orange-700",
    highlights: [
      "5-star all-inclusive resorts for recovery",
      "Dental and hair transplant specialty",
      "Year-round sunshine (350+ days/year)",
      "Extremely affordable hotel packages",
      "Direct flights from all major European hubs",
    ],
    topTreatments: ["Dental Veneers", "Dental Implants", "Hair Transplant", "Eye Surgery"],
    practicalInfo: {
      flightTime: "3.5–4.5 hours from UK/Germany",
      directFlights: ["London Gatwick", "London Stansted", "Manchester", "Frankfurt", "Amsterdam", "Brussels", "Stockholm"],
      currency: "Turkish Lira (TRY) — clinics quote in EUR/GBP",
      language: "Turkish (strong English in tourist areas and clinics)",
      timezone: "UTC+3",
      bestTime: "April–October (beach season); year-round for dental/hair",
    },
    neighborhoods: [
      { name: "Lara / Kundu", desc: "5-star hotel belt — ideal for recovery in luxury surroundings." },
      { name: "Konyaaltı", desc: "City beach area, good mid-range hotels close to clinics." },
    ],
    faqs: [
      {
        q: "Can I combine dental treatment with a beach holiday in Antalya?",
        a: "Absolutely — many patients do exactly this. Most dental procedures (veneers, crowns) require 5-7 days, leaving plenty of time to enjoy the beach. Clinics are used to working around patients' holiday schedules.",
      },
      {
        q: "Is the quality of dental care in Antalya comparable to Istanbul?",
        a: "Top Antalya dental clinics use identical materials and techniques to Istanbul. The difference is mainly in volume — Istanbul has more specialists for complex cases. For veneers, implants, and smile makeovers, Antalya is an excellent choice.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}
