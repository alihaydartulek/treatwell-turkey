export type Treatment = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  priceFrom: number;
  priceTo: number;
  ukPrice: number;
  dePrice: number;
  durationDays: number;
  recoveryDays: number;
  includes: string[];
  faqs: { q: string; a: string }[];
  category: string;
};

export const treatments: Treatment[] = [
  {
    slug: "hair-transplant",
    name: "Hair Transplant",
    emoji: "💇",
    category: "Hair",
    tagline: "FUE & DHI hair transplant in Turkey — world-class results at a fraction of UK prices.",
    description:
      "Turkey is the global capital of hair transplantation, performing over 1 million procedures per year. Istanbul clinics combine highly experienced surgeons, modern FUE and DHI techniques, and all-inclusive packages that UK patients find hard to match — at 70-80% lower cost.",
    priceFrom: 1200,
    priceTo: 2800,
    ukPrice: 8000,
    dePrice: 9500,
    durationDays: 1,
    recoveryDays: 10,
    includes: [
      "Surgeon consultation",
      "Procedure (FUE or DHI)",
      "PRP therapy",
      "Post-op medication kit",
      "Airport transfers",
      "1-night hotel (most packages)",
    ],
    faqs: [
      {
        q: "How many grafts do I need?",
        a: "Most patients need between 2,000 and 4,500 grafts depending on hair loss stage. Clinics assess this with a free online consultation using photos you submit.",
      },
      {
        q: "Is hair transplant in Turkey safe?",
        a: "Yes — when you choose an accredited clinic. All clinics on our platform are verified and hold Turkish Ministry of Health licences. JCI-accredited options are also available.",
      },
      {
        q: "When will I see results?",
        a: "Initial growth begins around 3-4 months. Full, natural-looking results are typically visible at 12-18 months post-procedure.",
      },
      {
        q: "Do I need to stay multiple days?",
        a: "Most FUE procedures require 2 nights in Istanbul (consultation day + procedure day). DHI may require 3 nights for larger sessions.",
      },
    ],
  },
  {
    slug: "dental",
    name: "Dental Treatment",
    emoji: "🦷",
    category: "Dental",
    tagline: "Veneers, implants and smile makeovers in Turkey — save thousands with no compromise on quality.",
    description:
      "Turkey's dental clinics serve hundreds of thousands of European patients annually. With state-of-the-art equipment, English-speaking dentists, and prices 60-75% lower than Western Europe, it's the most popular medical tourism treatment category in the country.",
    priceFrom: 180,
    priceTo: 450,
    ukPrice: 800,
    dePrice: 900,
    durationDays: 5,
    recoveryDays: 0,
    includes: [
      "Initial consultation & X-ray",
      "Procedure (veneer / implant / crown)",
      "Temporary fittings",
      "Final placement & adjustments",
      "Aftercare instructions",
    ],
    faqs: [
      {
        q: "How long does a dental trip take?",
        a: "For veneers or crowns, most patients spend 5-7 days in Turkey across two visits (preparation + final placement). Implants may require two separate trips spaced 3-6 months apart.",
      },
      {
        q: "What is the quality like compared to the UK?",
        a: "Top Turkish dental clinics use the same materials (Ivoclar, 3M, Straumann implants) as UK practices. Many dentists trained in Europe or the US.",
      },
      {
        q: "Will my UK dentist be able to fix problems if they arise?",
        a: "Reputable Turkish clinics provide a guarantee of 5-10 years on their work. In the rare case of issues, they handle corrections — often covering travel costs.",
      },
    ],
  },
  {
    slug: "bariatric",
    name: "Bariatric Surgery",
    emoji: "⚖️",
    category: "Weight Loss",
    tagline: "Gastric sleeve, bypass and more — accredited Turkish surgeons at a fraction of NHS private costs.",
    description:
      "With NHS waiting lists stretching 3-5 years and private UK costs exceeding £12,000, thousands of UK and European patients choose Turkey for bariatric procedures each year. JCI-accredited hospitals with dedicated international patient departments make this a safe, well-supported choice.",
    priceFrom: 3500,
    priceTo: 6500,
    ukPrice: 12000,
    dePrice: 13000,
    durationDays: 4,
    recoveryDays: 21,
    includes: [
      "Pre-op tests & consultations",
      "Surgery",
      "3-4 nights hospital stay",
      "Post-op dietary plan",
      "Airport & hospital transfers",
      "12-month follow-up support",
    ],
    faqs: [
      {
        q: "Am I eligible for bariatric surgery?",
        a: "Generally, patients with a BMI of 35+ (or 30+ with related conditions like diabetes) are eligible. Clinics conduct a full medical assessment before confirming suitability.",
      },
      {
        q: "Which procedure is right for me — sleeve or bypass?",
        a: "Gastric sleeve is the most common starting point and suits most patients. Bypass may be recommended for those with severe reflux or higher BMI. Your surgeon will advise after assessment.",
      },
      {
        q: "How is aftercare handled once I return home?",
        a: "Reputable bariatric clinics in Turkey provide follow-up support after surgery — typically including video consultations for 6–12 months post-procedure. Always confirm the exact aftercare package directly with your chosen clinic before booking.",
      },
    ],
  },
  {
    slug: "cosmetic",
    name: "Cosmetic Surgery",
    emoji: "✨",
    category: "Cosmetic",
    tagline: "Rhinoplasty, breast augmentation, tummy tuck and more — expert plastic surgeons in Turkey.",
    description:
      "Turkey's cosmetic surgery sector has grown into one of Europe's largest, attracting patients from the UK, Germany, and Scandinavia. Board-certified plastic surgeons, modern private hospitals, and comprehensive packages make it a compelling alternative to paying premium prices at home.",
    priceFrom: 2500,
    priceTo: 7000,
    ukPrice: 9000,
    dePrice: 10000,
    durationDays: 5,
    recoveryDays: 14,
    includes: [
      "Pre-op consultation & tests",
      "Surgery",
      "2-3 nights hospital stay",
      "Post-op garments",
      "Follow-up check",
      "Transfers",
    ],
    faqs: [
      {
        q: "How do I choose a qualified plastic surgeon in Turkey?",
        a: "Look for membership of ISAPS (International Society of Aesthetic Plastic Surgery) or TPCD (Turkish Plastic Surgery Association). All surgeons on our platform are board-certified.",
      },
      {
        q: "When can I fly home after cosmetic surgery?",
        a: "Typically 5-7 days after surgery, depending on the procedure. Your surgeon will confirm clearance to fly at your post-op check.",
      },
    ],
  },
  {
    slug: "eye-surgery",
    name: "Eye Surgery (LASIK)",
    emoji: "👁️",
    category: "Eye",
    tagline: "Permanent vision correction in Turkey — LASIK, SMILE and lens implants at half the UK price.",
    description:
      "Eye surgery is one of the fastest-growing medical tourism categories in Turkey. Modern laser clinics equipped with the latest Zeiss and WaveLight platforms offer LASIK, SMILE Pro, and lens replacement at prices 40-60% below UK and German rates.",
    priceFrom: 800,
    priceTo: 1800,
    ukPrice: 3500,
    dePrice: 3800,
    durationDays: 2,
    recoveryDays: 3,
    includes: [
      "Pre-op eye assessment",
      "Laser procedure (both eyes)",
      "Post-op eye drops kit",
      "1-day follow-up",
      "Transfers",
    ],
    faqs: [
      {
        q: "Am I suitable for LASIK?",
        a: "Suitability depends on corneal thickness, prescription strength, and age. Clinics perform a full pre-op assessment (usually the day before surgery) to confirm.",
      },
      {
        q: "How long does the procedure take?",
        a: "The laser treatment itself takes under 10 minutes per eye. Most patients are in and out of the clinic within 2 hours.",
      },
    ],
  },
  {
    slug: "ivf",
    name: "IVF & Fertility",
    emoji: "🌸",
    category: "Fertility",
    tagline: "IVF, egg donation and fertility treatments in Turkey — expert care with significantly lower costs.",
    description:
      "Turkey has become a leading destination for IVF, particularly for egg donation (which is legal and well-regulated here, unlike in some EU countries). Clinics with high success rates, English-speaking embryologists, and transparent pricing attract thousands of couples from Europe annually.",
    priceFrom: 2200,
    priceTo: 5500,
    ukPrice: 8000,
    dePrice: 7500,
    durationDays: 14,
    recoveryDays: 2,
    includes: [
      "Initial fertility assessment",
      "Hormone stimulation monitoring",
      "Egg retrieval or transfer",
      "Lab & embryology fees",
      "Coordinator support throughout",
    ],
    faqs: [
      {
        q: "Is egg donation legal in Turkey?",
        a: "Yes — egg donation is legally permitted in Turkey under specific regulations. Anonymous donation is standard. Our partner clinics are fully licensed by the Turkish Ministry of Health.",
      },
      {
        q: "How many trips to Turkey will I need?",
        a: "For IVF with own eggs, typically 1-2 trips. Egg donation often requires 2 trips (one for synchronisation, one for transfer) or can sometimes be managed with a single longer stay.",
      },
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedic Surgery",
    emoji: "🦴",
    category: "Orthopaedics",
    tagline: "Knee replacement, hip replacement and spinal surgery in Turkey — JCI hospitals at 60% less.",
    description:
      "Turkey's JCI-accredited hospitals are equipped with the same Stryker, Zimmer Biomet and DePuy prosthesis systems used in UK private hospitals. Orthopaedic procedures in Turkey cost 55-65% less than UK private rates, and waiting times are measured in days rather than months. Ankara and Istanbul lead for orthopaedic surgery volume and specialist experience.",
    priceFrom: 5500,
    priceTo: 12000,
    ukPrice: 16000,
    dePrice: 18000,
    durationDays: 7,
    recoveryDays: 30,
    includes: [
      "Pre-operative assessment & imaging",
      "Surgeon consultation",
      "Procedure (knee / hip / spine)",
      "Implant (Stryker, Zimmer Biomet or equivalent)",
      "3–5 nights hospital stay",
      "Physiotherapy (initial sessions)",
      "Airport and hospital transfers",
    ],
    faqs: [
      {
        q: "Is knee or hip replacement safe in Turkey?",
        a: "Yes — when performed in a JCI-accredited hospital. Turkey's top orthopaedic hospitals hold the same international accreditation as leading UK private hospitals and use the same globally certified implant systems.",
      },
      {
        q: "How long will I need to stay in Turkey?",
        a: "Knee and hip replacements typically require 5–7 days in hospital followed by 3–5 days recovery before flying. Most patients plan a 10–14 day trip total.",
      },
      {
        q: "What implant systems are used?",
        a: "Top Turkish orthopaedic hospitals use the same brands as UK and German hospitals — Stryker, Zimmer Biomet, DePuy Synthes, and Smith+Nephew are all available. Always confirm your implant brand in writing before booking.",
      },
      {
        q: "Will I need physiotherapy after returning to the UK?",
        a: "Yes — post-operative physiotherapy is essential and should be arranged in the UK before you travel. Your Turkish hospital will provide a rehabilitation protocol. Your UK GP can refer you to NHS physiotherapy or you can arrange private sessions.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.slug);
}
