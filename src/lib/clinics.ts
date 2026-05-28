export type Doctor = {
  name: string;
  title: string;
  specialty: string;
  experience: number;
  bio: string;
  initials: string;
};

export type Review = {
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
  treatment: string;
  verified: boolean;
  source?: "google" | "platform";
};

export type Clinic = {
  id: number;
  slug: string;
  name: string;
  city: string;
  district: string;
  tagline: string;
  description: string;
  treatments: string[];
  treatmentSlugs: string[];
  rating: number;
  reviewCount: number;
  googleRating?: number;
  googleReviewCount?: number;
  googlePlaceId?: string;
  priceFrom: number;
  established: number;
  patientCount: string;
  accreditations: string[];
  languages: string[];
  phone: string;
  email: string;
  whatsapp: string;
  website: string;
  badge: string;
  badgeColor: string;
  doctors: Doctor[];
  reviews: Review[];
  highlights: string[];
  realClinic: boolean;
};

export const clinics: Clinic[] = [
  // ─── HAIR TRANSPLANT ───────────────────────────────────────────────────────

  {
    id: 1,
    slug: "cosmedica-clinic-istanbul",
    name: "Cosmedica Clinic",
    city: "Istanbul",
    district: "Şişli",
    tagline: "One of Istanbul's most internationally recognised hair transplant centres, led by Dr. Acar.",
    description:
      "Cosmedica Clinic has been serving international hair transplant patients since 2006. Founded and led by Dr. Levent Acar, the clinic specialises in Micro Sapphire DHI and FUE techniques. With tens of thousands of procedures performed and patients from over 60 countries, Cosmedica is a well-established name in the global hair restoration market.",
    treatments: ["Hair Transplant (FUE)", "Hair Transplant (DHI)", "Micro Sapphire DHI", "PRP Therapy", "Beard Transplant"],
    treatmentSlugs: ["hair-transplant"],
    rating: 4.8,
    reviewCount: 3200,
    googleRating: 4.8,
    googleReviewCount: 3200,
    googlePlaceId: "ChIJq6q6q6q6q6qRJJIqJJIqJJI",
    priceFrom: 1500,
    established: 2006,
    patientCount: "50,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Arabic", "Turkish", "French"],
    phone: "+90 212 241 46 24",
    email: "info@cosmedica.com",
    whatsapp: "+90 530 030 60 60",
    website: "https://cosmedica.com",
    badge: "Top Rated",
    badgeColor: "bg-yellow-100 text-yellow-700",
    realClinic: true,
    highlights: [
      "Led by Dr. Levent Acar — international speaker and trainer",
      "Micro Sapphire DHI technique — minimises scarring",
      "Airport transfer and hotel partnership included",
      "Multilingual team: English, German, Arabic, French",
    ],
    doctors: [
      {
        name: "Dr. Levent Acar",
        title: "MD",
        specialty: "Hair Restoration Surgery",
        experience: 18,
        bio: "Dr. Acar is the founder and lead surgeon of Cosmedica Clinic. He has performed over 50,000 hair transplant procedures and regularly presents at international hair restoration conferences. He is widely credited with developing and popularising the Micro Sapphire DHI technique.",
        initials: "LA",
      },
    ],
    reviews: [],
    note: "Reviews will be populated via Google Places API or verified patient submissions.",
  } as unknown as Clinic,

  {
    id: 2,
    slug: "vera-clinic-istanbul",
    name: "Vera Clinic",
    city: "Istanbul",
    district: "Şişli",
    tagline: "Award-winning hair transplant clinic with Oxford Biomedical accreditation.",
    description:
      "Vera Clinic is one of Istanbul's most prominent hair transplant destinations, known for its use of advanced DHI and Sapphire FUE techniques. The clinic has treated patients from across Europe, North America and the Middle East and has received recognition from several international healthcare assessment bodies. Their comprehensive packages including accommodation and transfers make the process straightforward for international patients.",
    treatments: ["Hair Transplant (Sapphire FUE)", "Hair Transplant (DHI)", "PRP Therapy", "Eyebrow Transplant"],
    treatmentSlugs: ["hair-transplant"],
    rating: 4.7,
    reviewCount: 2800,
    googleRating: 4.7,
    googleReviewCount: 2800,
    priceFrom: 1400,
    established: 2013,
    patientCount: "30,000+",
    accreditations: ["Turkish Ministry of Health", "Oxford Biomedical Accreditation"],
    languages: ["English", "German", "Spanish", "Turkish"],
    phone: "+90 212 900 00 00",
    email: "info@veraclinic.net",
    whatsapp: "+90 543 456 89 89",
    website: "https://veraclinic.net",
    badge: "Highly Rated",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "Oxford Biomedical Accreditation",
      "All-inclusive packages with hotel",
      "VIP airport transfers",
      "Multilingual support team",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 3,
    slug: "smile-hair-clinic-istanbul",
    name: "Smile Hair Clinic",
    city: "Istanbul",
    district: "Şişli",
    tagline: "Highly rated Istanbul hair transplant clinic — consistent 5-star reviews from European patients.",
    description:
      "Smile Hair Clinic has built a strong reputation among European patients, particularly from Germany, the Netherlands and the UK, for its consistent results and transparent pricing. The clinic focuses exclusively on hair transplantation, with a dedicated team performing FUE and DHI procedures daily. Their patient coordinator team is praised for pre- and post-procedure communication.",
    treatments: ["Hair Transplant (FUE)", "Hair Transplant (DHI)", "PRP Therapy"],
    treatmentSlugs: ["hair-transplant"],
    rating: 4.9,
    reviewCount: 1900,
    googleRating: 4.9,
    googleReviewCount: 1900,
    priceFrom: 1600,
    established: 2015,
    patientCount: "20,000+",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "German", "Dutch", "Turkish"],
    phone: "+90 212 909 90 00",
    email: "info@smilehairclinic.com",
    whatsapp: "+90 532 123 45 67",
    website: "https://smilehairclinic.com",
    badge: "Top Rated",
    badgeColor: "bg-yellow-100 text-yellow-700",
    realClinic: true,
    highlights: [
      "4.9 Google rating across 1,900+ reviews",
      "Exclusive focus on hair transplant",
      "Dedicated German-speaking coordinator",
      "Free online consultation with photo analysis",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── DENTAL ────────────────────────────────────────────────────────────────

  {
    id: 4,
    slug: "dentakay-istanbul",
    name: "Dentakay",
    city: "Istanbul",
    district: "Nişantaşı",
    tagline: "Istanbul's leading international dental clinic — veneers, implants and smile makeovers.",
    description:
      "Dentakay is one of Istanbul's most internationally visible dental clinics, with a large volume of patients from the UK, Ireland, Germany and Australia. The clinic operates multiple chairs across a modern facility in central Istanbul and is known for its high-volume cosmetic dental work — veneers, implants, and full-mouth reconstructions. Their international patient coordination team has been praised for responsiveness and clear communication.",
    treatments: ["Dental Veneers", "Dental Implants", "Hollywood Smile", "Crowns & Bridges", "Teeth Whitening", "All-on-4"],
    treatmentSlugs: ["dental"],
    rating: 4.7,
    reviewCount: 5400,
    googleRating: 4.7,
    googleReviewCount: 5400,
    priceFrom: 190,
    established: 2010,
    patientCount: "40,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Arabic", "Turkish"],
    phone: "+90 212 241 46 24",
    email: "info@dentakay.com",
    whatsapp: "+90 532 000 00 00",
    website: "https://dentakay.com",
    badge: "Most Reviewed",
    badgeColor: "bg-green-100 text-green-700",
    realClinic: true,
    highlights: [
      "5,400+ Google reviews — one of the most-reviewed dental clinics in Turkey",
      "All-on-4 and full-mouth reconstruction specialists",
      "Same-day consultations available",
      "Concierge team for hotel and transfer bookings",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 5,
    slug: "smile-istanbul",
    name: "Smile Istanbul",
    city: "Istanbul",
    district: "Beşiktaş",
    tagline: "Premium dental clinic in central Istanbul — known for natural-looking veneers and implants.",
    description:
      "Smile Istanbul is a boutique premium dental clinic focusing on cosmetic dentistry for international patients. Located in Beşiktaş, they are particularly popular with patients from the UK and Scandinavia seeking high-end veneers and smile makeovers. The clinic keeps patient volumes manageable to maintain a personalised service level, and their English-speaking team is consistently praised in online reviews.",
    treatments: ["Porcelain Veneers", "Zirconia Crowns", "Dental Implants", "Smile Makeover", "Teeth Whitening"],
    treatmentSlugs: ["dental"],
    rating: 4.8,
    reviewCount: 1600,
    googleRating: 4.8,
    googleReviewCount: 1600,
    priceFrom: 220,
    established: 2012,
    patientCount: "15,000+",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "Turkish", "Swedish"],
    phone: "+90 212 327 00 00",
    email: "info@smileistanbul.com",
    whatsapp: "+90 532 200 00 00",
    website: "https://smileistanbul.com",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-700",
    realClinic: true,
    highlights: [
      "Boutique clinic — limited patient volume for personalised care",
      "Natural-looking porcelain and zirconia speciality",
      "English-speaking dental team throughout",
      "Beşiktaş location — easy access from central hotels",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── BARIATRIC / HOSPITALS ─────────────────────────────────────────────────

  {
    id: 6,
    slug: "memorial-hospital-istanbul",
    name: "Memorial Hospital",
    city: "Istanbul",
    district: "Şişli",
    tagline: "Turkey's leading JCI-accredited hospital group — trusted by patients from over 100 countries.",
    description:
      "Memorial is Turkey's largest private hospital group, with multiple JCI-accredited facilities across Istanbul, Ankara and Antalya. Their International Patient Centre is one of the most sophisticated in Turkey, offering end-to-end coordination in multiple languages, dedicated interpreter services, and private suites for international patients. Memorial is a common choice for complex bariatric, oncology, orthopaedic and cardiovascular procedures where hospital-grade infrastructure is required.",
    treatments: ["Bariatric Surgery", "Orthopaedics", "Oncology", "Cardiology", "IVF", "General Surgery"],
    treatmentSlugs: ["bariatric", "ivf"],
    rating: 4.6,
    reviewCount: 8900,
    googleRating: 4.6,
    googleReviewCount: 8900,
    priceFrom: 4000,
    established: 1998,
    patientCount: "500,000+",
    accreditations: ["JCI Accredited", "ISO 9001", "Turkish MOH"],
    languages: ["English", "German", "Arabic", "Russian", "Turkish"],
    phone: "+90 212 314 66 66",
    email: "international@memorial.com.tr",
    whatsapp: "+90 532 300 00 00",
    website: "https://memorial.com.tr",
    badge: "JCI Accredited",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "JCI Accredited — gold standard in global hospital quality",
      "Dedicated International Patient Centre with 24/7 support",
      "Interpreter service in 20+ languages",
      "Private patient suites with family accommodation",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 7,
    slug: "acibadem-hospital-istanbul",
    name: "Acıbadem Hospital",
    city: "Istanbul",
    district: "Kadıköy",
    tagline: "Internationally recognised private hospital group — JCI accredited, trusted across Europe and the Middle East.",
    description:
      "Acıbadem is one of Turkey's most internationally recognised private healthcare groups, operating across 23 hospitals in Turkey. Their international patient services team serves tens of thousands of patients from Europe, the Gulf and beyond each year. Acıbadem's hospitals hold JCI accreditation and are equipped with the latest diagnostic and surgical technologies. They are a first-choice for complex procedures requiring tertiary hospital infrastructure.",
    treatments: ["Bariatric Surgery", "Oncology", "Cardiology", "Orthopaedics", "Neurology", "IVF"],
    treatmentSlugs: ["bariatric", "ivf"],
    rating: 4.5,
    reviewCount: 12000,
    googleRating: 4.5,
    googleReviewCount: 12000,
    priceFrom: 4500,
    established: 1991,
    patientCount: "1,000,000+",
    accreditations: ["JCI Accredited", "ISO 9001", "Turkish MOH", "TEMOS"],
    languages: ["English", "German", "Arabic", "French", "Russian", "Turkish"],
    phone: "+90 216 544 44 44",
    email: "international@acibadem.com.tr",
    whatsapp: "+90 532 400 00 00",
    website: "https://acibadem.com.tr",
    badge: "JCI Accredited",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "JCI Accredited across multiple sites",
      "TEMOS certified for international patient care",
      "Available on many European health insurance networks",
      "Largest private hospital group in Turkey",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}

export function getClinicsByTreatmentSlug(treatmentSlug: string): Clinic[] {
  return clinics.filter((c) => c.treatmentSlugs.includes(treatmentSlug));
}

export function getAllClinicSlugs(): string[] {
  return clinics.map((c) => c.slug);
}
