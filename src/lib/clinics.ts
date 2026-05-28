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
    whatsapp: "+90 533 840 20 20",
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
    whatsapp: "+90 532 021 37 10",
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
    whatsapp: "+90 533 126 58 32",
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
    whatsapp: "+90 212 314 66 66",
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
    whatsapp: "+90 216 544 44 44",
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

  // ─── ANKARA ────────────────────────────────────────────────────────────────

  {
    id: 8,
    slug: "guven-hastanesi-ankara",
    name: "Güven Hastanesi",
    city: "Ankara",
    district: "Çankaya",
    tagline: "Ankara'nın köklü özel hastanesi — 70 yıllık deneyim, uluslararası hasta servisi.",
    description:
      "Güven Hastanesi, 1953 yılında kurulan Ankara'nın en köklü özel hastanelerinden biridir. Kardiyoloji, ortopedi, nöroloji ve genel cerrahi alanlarında güçlü bir referansa sahip olan hastane, uluslararası hasta servisi aracılığıyla Avrupa'dan gelen hastalara Türkçe, İngilizce ve Almanca hizmet vermektedir. Bariatrik cerrahi ve ortopedik prosedürler için tercih edilen merkezler arasındadır.",
    treatments: ["Bariatric Surgery", "Orthopaedics", "Cardiology", "Neurology", "General Surgery"],
    treatmentSlugs: ["bariatric"],
    rating: 4.4,
    reviewCount: 3100,
    googleRating: 4.4,
    googleReviewCount: 3100,
    priceFrom: 3500,
    established: 1953,
    patientCount: "200,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Turkish"],
    phone: "+90 312 457 27 00",
    email: "international@guven.com.tr",
    whatsapp: "+90 312 457 27 00",
    website: "https://www.guven.com.tr",
    badge: "Established 1953",
    badgeColor: "bg-slate-100 text-slate-700",
    realClinic: true,
    highlights: [
      "70+ years of medical excellence in Ankara",
      "Dedicated international patient coordination",
      "English and German-speaking medical staff",
      "Comprehensive bariatric surgery programme",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 9,
    slug: "bayindir-hastanesi-ankara",
    name: "Bayındır Hastanesi",
    city: "Ankara",
    district: "Söğütözü",
    tagline: "Modern hastane altyapısı ve güçlü uluslararası hasta servisiyle Ankara'nın önemli özel hastanelerinden.",
    description:
      "Bayındır Hastanesi, Ankara'da birden fazla lokasyonuyla hizmet veren köklü bir özel hastane grubudur. Uluslararası hasta servisi aracılığıyla Avrupa ve Orta Doğu'dan gelen hastalara hizmet vermekte; ortopedi, kardiyoloji, kadın hastalıkları ve tüp bebek alanlarında güçlü bir referansa sahip bulunmaktadır. Modern tıbbi ekipmanları ve deneyimli kadrosuyla kapsamlı tedavi seçenekleri sunmaktadır.",
    treatments: ["IVF & Fertility", "Orthopaedics", "Cardiology", "General Surgery", "Bariatric Surgery"],
    treatmentSlugs: ["ivf", "bariatric"],
    rating: 4.3,
    reviewCount: 2400,
    googleRating: 4.3,
    googleReviewCount: 2400,
    priceFrom: 2500,
    established: 1980,
    patientCount: "150,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "Arabic", "Turkish"],
    phone: "+90 312 428 08 08",
    email: "international@bayindir.com",
    whatsapp: "+90 312 428 08 08",
    website: "https://www.bayindir.com",
    badge: "Multi-Specialty",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "Multiple locations across Ankara",
      "Strong IVF and fertility programme",
      "International patient coordination team",
      "Arabic and English-speaking staff",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── ANTALYA ───────────────────────────────────────────────────────────────

  {
    id: 10,
    slug: "medical-park-antalya",
    name: "Medical Park Antalya",
    city: "Antalya",
    district: "Konyaaltı",
    tagline: "Türkiye'nin en büyük hastane zincirlerinden — Antalya'da geniş kapsamlı uluslararası hasta hizmetleri.",
    description:
      "Medical Park, 30'dan fazla hastanesiyle Türkiye'nin en büyük özel hastane gruplarından biridir. Antalya şubesi, Avrupa'dan direkt uçuşlarla kolayca ulaşılabilen konumuyla medikal turizm için stratejik bir tercih noktasıdır. Bariatrik cerrahi, ortopedi, estetik cerrahi ve diş tedavilerinde güçlü altyapı sunan hastane, kapsamlı uluslararası hasta koordinasyon hizmetleriyle öne çıkmaktadır.",
    treatments: ["Bariatric Surgery", "Dental Implants", "Orthopaedics", "Cosmetic Surgery", "Eye Surgery"],
    treatmentSlugs: ["bariatric", "dental", "cosmetic", "eye-surgery"],
    rating: 4.5,
    reviewCount: 4200,
    googleRating: 4.5,
    googleReviewCount: 4200,
    priceFrom: 3200,
    established: 2000,
    patientCount: "300,000+",
    accreditations: ["JCI Accredited", "Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Russian", "Arabic", "Turkish"],
    phone: "+90 242 249 40 00",
    email: "international@medicalpark.com.tr",
    whatsapp: "+90 242 249 40 00",
    website: "https://www.medicalpark.com.tr",
    badge: "JCI Accredited",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "JCI Accredited — gold standard in hospital quality",
      "15 min from Antalya Airport — ideal for European patients",
      "Full-service international patient department",
      "German and English-speaking coordination team",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 11,
    slug: "dent-antalya",
    name: "Dent Antalya",
    city: "Antalya",
    district: "Muratpaşa",
    tagline: "Antalya'nın önde gelen diş kliniklerinden — Avrupalı hastalar için diş turizmi merkezi.",
    description:
      "Dent Antalya, Avrupa'dan gelen hastalara yönelik diş turizmi konusunda uzmanlaşmış modern bir diş kliniğidir. Porselen kaplama, zirkonyum kron, implant ve Hollywood Smile uygulamalarında geniş deneyime sahip olan klinik; tatil ile diş tedavisini birleştirmek isteyen Alman, İngiliz ve Skandinavyalı hastalar arasında popülerdir. Şehir merkezindeki konumu ve otel ortaklıkları sayesinde kolay erişim imkânı sunmaktadır.",
    treatments: ["Dental Veneers", "Dental Implants", "Hollywood Smile", "Zirconia Crowns", "Teeth Whitening"],
    treatmentSlugs: ["dental"],
    rating: 4.7,
    reviewCount: 1800,
    googleRating: 4.7,
    googleReviewCount: 1800,
    priceFrom: 180,
    established: 2008,
    patientCount: "25,000+",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "German", "Russian", "Turkish"],
    phone: "+90 242 311 00 00",
    email: "info@dentantalya.com",
    whatsapp: "+90 532 611 00 00",
    website: "https://www.dentantalya.com",
    badge: "Dental Tourism",
    badgeColor: "bg-green-100 text-green-700",
    realClinic: true,
    highlights: [
      "Specialised in European dental tourism patients",
      "German and English-speaking dental team",
      "Hotel and transfer partnerships for package deals",
      "Combine treatment with Antalya's beaches and sun",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── İZMİR ─────────────────────────────────────────────────────────────────

  {
    id: 12,
    slug: "kent-hastanesi-izmir",
    name: "Kent Hastanesi",
    city: "İzmir",
    district: "Konak",
    tagline: "İzmir'in en tanınmış özel hastanelerinden — güçlü bariatrik ve ortopedi programı.",
    description:
      "Kent Hastanesi, İzmir'de yüksek hasta memnuniyetiyle öne çıkan köklü bir özel hastanedir. Bariatrik cerrahi (gastrik sleeve, bypass), ortopedi ve genel cerrahi alanlarında bölgenin referans merkezi konumundadır. Ege havalimanına yakın konumu ve uluslararası hasta servisi sayesinde Avrupa'dan gelen hastalar için pratik bir tercih noktasıdır.",
    treatments: ["Bariatric Surgery", "Orthopaedics", "General Surgery", "Cardiology"],
    treatmentSlugs: ["bariatric"],
    rating: 4.5,
    reviewCount: 5800,
    googleRating: 4.5,
    googleReviewCount: 5800,
    priceFrom: 3800,
    established: 1992,
    patientCount: "400,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Turkish"],
    phone: "+90 232 484 34 34",
    email: "info@kenthastanesi.com.tr",
    whatsapp: "+90 232 484 34 34",
    website: "https://www.kenthastanesi.com.tr",
    badge: "Highly Rated",
    badgeColor: "bg-yellow-100 text-yellow-700",
    realClinic: true,
    highlights: [
      "One of İzmir's most reviewed hospitals — 5,800+ Google reviews",
      "Strong bariatric surgery programme with low complication rates",
      "Close to Adnan Menderes Airport",
      "English and German-speaking international patient team",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 13,
    slug: "medicana-izmir",
    name: "Medicana İzmir",
    city: "İzmir",
    district: "Bayraklı",
    tagline: "Medicana zincirinin İzmir ayağı — kapsamlı tıbbi hizmetler ve uluslararası hasta koordinasyonu.",
    description:
      "Medicana, Türkiye genelinde 15'ten fazla hastanesiyle faaliyet gösteren büyük bir özel hastane grubudur. İzmir şubesi, bariatrik cerrahi, IVF, ortopedi ve estetik cerrahi konularında uluslararası hastalara hizmet vermektedir. Grubun köklü altyapısı, standart klinik protokolleri ve çok dilli uluslararası hasta ekibi ile güvenilir bir tercih sunmaktadır.",
    treatments: ["Bariatric Surgery", "IVF & Fertility", "Orthopaedics", "Cosmetic Surgery"],
    treatmentSlugs: ["bariatric", "ivf", "cosmetic"],
    rating: 4.4,
    reviewCount: 2900,
    googleRating: 4.4,
    googleReviewCount: 2900,
    priceFrom: 3200,
    established: 2005,
    patientCount: "100,000+",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "Arabic", "Turkish"],
    phone: "+90 232 462 71 71",
    email: "izmir@medicana.com.tr",
    whatsapp: "+90 232 462 71 71",
    website: "https://www.medicana.com.tr",
    badge: "Hospital Group",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "Part of Medicana's 15+ hospital network across Turkey",
      "Comprehensive IVF and fertility centre",
      "Standardised clinical protocols across all branches",
      "International patient coordination in English and Arabic",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── ESTETİK CERRAHİ ───────────────────────────────────────────────────────

  {
    id: 14,
    slug: "quartz-clinique-istanbul",
    name: "Quartz Clinique",
    city: "Istanbul",
    district: "Nişantaşı",
    tagline: "Nişantaşı'nın ödüllü estetik cerrahi kliniği — rinoplasti, vücut estetiği ve medikal dermatoloji.",
    description:
      "Quartz Clinique, 2015 yılında Dr. Leyla Arvas ve Dr. Ayşe Arvas Uluğ tarafından kurulan, Nişantaşı'nda hizmet veren ödüllü bir estetik cerrahi kliniğidir. Plastik cerrahi, medikal estetik, dermatoloji ve kadın sağlığı alanlarında faaliyet gösteren klinik; yılda 6.500'den fazla hastaya hizmet vermektedir. 2018 ve 2019 yıllarında İstanbul ve Türkiye'nin En İyi Estetik Cerrahi Kliniği ödüllerini almış, uluslararası hasta portföyüyle öne çıkmaktadır.",
    treatments: ["Rhinoplasty", "Breast Surgery", "Liposuction", "Tummy Tuck", "Face Lift", "Medical Aesthetics"],
    treatmentSlugs: ["cosmetic"],
    rating: 4.9,
    reviewCount: 600,
    googleRating: 4.9,
    googleReviewCount: 600,
    priceFrom: 2500,
    established: 2015,
    patientCount: "6,500+/year",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "Arabic", "Turkish"],
    phone: "+90 212 241 46 24",
    email: "contact@quartzclinique.com",
    whatsapp: "+90 542 464 74 33",
    website: "https://www.quartzclinique.com",
    badge: "Award Winning",
    badgeColor: "bg-yellow-100 text-yellow-700",
    realClinic: true,
    highlights: [
      "Best Aesthetic Surgery Clinic in Istanbul — 2018 & 2019 award winner",
      "Founded by two specialist surgeons, Dr. Leyla & Dr. Ayşe Arvas",
      "4.9★ Google rating across 600+ reviews",
      "Centrally located in Nişantaşı — walking distance from major hotels",
    ],
    doctors: [
      {
        name: "Dr. Leyla Arvas",
        title: "MD",
        specialty: "Plastic & Reconstructive Surgery",
        experience: 15,
        bio: "Co-founder of Quartz Clinique. Specialist in rhinoplasty, breast surgery and body contouring. Award-winning surgeon with extensive international patient experience.",
        initials: "LA",
      },
    ],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 15,
    slug: "esteworld-istanbul",
    name: "Esteworld",
    city: "Istanbul",
    district: "Üsküdar",
    tagline: "İstanbul'un çok uzmanlıklı estetik merkezi — plastik cerrahi, saç ekimi ve diş estetiği.",
    description:
      "Esteworld, İstanbul'da Üsküdar ve Ataşehir olmak üzere iki lokasyonuyla faaliyet gösteren kapsamlı bir estetik sağlık merkezidir. Plastik cerrahi, saç ekimi ve diş estetiğini tek çatı altında sunan klinik, yurt içi ve uluslararası hastalara Türkçe, İngilizce ve Arapça hizmet vermektedir. İngiliz hastalar başta olmak üzere Avrupalı hastalara yönelik güçlü bir koordinasyon ekibine sahiptir.",
    treatments: ["Rhinoplasty", "Breast Surgery", "Liposuction", "Hair Transplant (FUE)", "Dental Veneers"],
    treatmentSlugs: ["cosmetic", "hair-transplant", "dental"],
    rating: 4.7,
    reviewCount: 690,
    googleRating: 4.7,
    googleReviewCount: 690,
    priceFrom: 2200,
    established: 2012,
    patientCount: "20,000+",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "Arabic", "Turkish"],
    phone: "+90 216 474 54 54",
    email: "info@esteworldturkey.com",
    whatsapp: "+90 216 474 54 54",
    website: "https://www.esteworldturkey.com",
    badge: "Multi-Specialty",
    badgeColor: "bg-purple-100 text-purple-700",
    realClinic: true,
    highlights: [
      "Plastic surgery, hair transplant and dental under one roof",
      "Two locations: Üsküdar surgical complex and Ataşehir clinic",
      "Strong UK and European patient coordinator team",
      "4.7★ Trustpilot rating across 690+ reviews",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── GÖZ CERRAHİSİ ────────────────────────────────────────────────────────

  {
    id: 16,
    slug: "dunyagoz-istanbul",
    name: "Dünyagöz Hastanesi",
    city: "Istanbul",
    district: "Ataşehir / Ataköy / Etiler",
    tagline: "Türkiye'nin en büyük göz hastanesi zinciri — JCI akreditasyonlu, 167 ülkeden hasta ağırlıyor.",
    description:
      "Dünyagöz, 1996 yılında kurulan Türkiye'nin ve dünyanın en büyük göz hastanesi gruplarından biridir. JCI akreditasyonuna sahip ilk uzman göz hastanesi olan Dünyagöz; LASIK, katarakt cerrahisi, glokom, retina hastalıkları ve göz içi lens implantasyonu başta olmak üzere 500'den fazla farklı tedavi seçeneği sunmaktadır. İstanbul'da Ataşehir, Ataköy, Etiler ve Beylikdüzü olmak üzere birden fazla lokasyonuyla yılda 120.000'den fazla uluslararası hastaya hizmet vermektedir.",
    treatments: ["LASIK Eye Surgery", "Cataract Surgery", "Intraocular Lens", "Glaucoma Treatment", "Retinal Surgery"],
    treatmentSlugs: ["eye-surgery"],
    rating: 4.5,
    reviewCount: 4800,
    googleRating: 4.5,
    googleReviewCount: 4800,
    priceFrom: 900,
    established: 1996,
    patientCount: "120,000+/year",
    accreditations: ["JCI Accredited", "Turkish Ministry of Health"],
    languages: ["English", "German", "Arabic", "Russian", "Turkish"],
    phone: "+90 850 222 44 69",
    email: "info@dunyagoz.com",
    whatsapp: "+90 850 222 44 69",
    website: "https://www.dunyagoz.com",
    badge: "JCI Accredited",
    badgeColor: "bg-blue-100 text-blue-700",
    realClinic: true,
    highlights: [
      "Turkey's largest eye hospital group — 31 locations across Turkey",
      "JCI Accredited — first specialist eye hospital with this certification in Turkey",
      "500+ treatment methods across all eye-related branches",
      "Serves patients from 167 countries — multilingual team",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  // ─── IVF / TÜP BEBEK ──────────────────────────────────────────────────────

  {
    id: 17,
    slug: "bahceci-fertility-istanbul",
    name: "Bahçeci Fertility",
    city: "Istanbul",
    district: "Şişli (Fulya)",
    tagline: "Newsweek'in 'Dünyanın En İyi 3 Tüp Bebek Merkezi' listesindeki tek Türk klinik.",
    description:
      "Bahçeci Fertility, 1996 yılında kurulan ve bugün 105 ülkeden 100.000'den fazla çifte ebeveynlik mutluluğu yaşatan Türkiye'nin en tanınmış tüp bebek merkezidir. Newsweek dergisi tarafından 'Dünyanın En İyi 3 IVF Merkezi' arasında gösterilen Bahçeci; Şişli (Fulya) ve Üsküdar (Umut) başta olmak üzere İstanbul'da birden fazla lokasyonuyla hizmet vermektedir. Yabancı dil konuşan koordinatör ekibi ve yüksek başarı oranlarıyla uluslararası hastalar arasında öne çıkmaktadır.",
    treatments: ["IVF (Own Eggs)", "IVF (Donor Eggs)", "ICSI", "Embryo Freezing", "Fertility Assessment"],
    treatmentSlugs: ["ivf"],
    rating: 4.6,
    reviewCount: 1175,
    googleRating: 4.6,
    googleReviewCount: 1175,
    priceFrom: 2500,
    established: 1996,
    patientCount: "100,000+ couples",
    accreditations: ["Turkish Ministry of Health", "ISO 9001"],
    languages: ["English", "German", "Arabic", "Turkish"],
    phone: "+90 530 917 60 49",
    email: "fulya@bahceci.com",
    whatsapp: "+90 530 917 60 49",
    website: "https://bahceci.com",
    badge: "Top Rated",
    badgeColor: "bg-yellow-100 text-yellow-700",
    realClinic: true,
    highlights: [
      "Newsweek — Top 3 IVF Centres in the World",
      "100,000+ couples treated across 105 countries",
      "WhatsApp support with translators in multiple languages",
      "High success rates with own and donor egg programmes",
    ],
    doctors: [],
    reviews: [],
  } as unknown as Clinic,

  {
    id: 18,
    slug: "ota-jinemed-istanbul",
    name: "OTA & Jinemed Hospital",
    city: "Istanbul",
    district: "Beşiktaş",
    tagline: "İstanbul'un ilk IVF merkezi — 50'den fazla kliniğe öncülük eden tüp bebek hastanesi.",
    description:
      "OTA & Jinemed Hastanesi, Türkiye'nin ilk IVF merkezinin kurulduğu ve bugün 50'den fazla IVF kliniğine öncülük eden köklü bir sağlık kuruluşudur. Beşiktaş'ta faaliyet gösteren hastane; tüp bebek, ICSI, donör yumurta programları, jinekolojik cerrahi ve kadın sağlığı konularında uzmanlaşmıştır. Avrupa ve Amerika'dan gelen uluslararası hastalara Arapça, İngilizce, Fransızca, Almanca, İspanyolca ve İtalyanca hizmet sunulmaktadır.",
    treatments: ["IVF (Own Eggs)", "IVF (Donor Eggs)", "ICSI", "Gynaecological Surgery", "Fertility Assessment"],
    treatmentSlugs: ["ivf"],
    rating: 4.7,
    reviewCount: 950,
    googleRating: 4.7,
    googleReviewCount: 950,
    priceFrom: 2500,
    established: 2013,
    patientCount: "30,000+",
    accreditations: ["Turkish Ministry of Health"],
    languages: ["English", "German", "French", "Spanish", "Arabic", "Italian", "Turkish"],
    phone: "+90 212 260 40 40",
    email: "info@otajinemedhospital.com",
    whatsapp: "+90 531 680 62 10",
    website: "https://www.otajinemedhastanesi.com",
    badge: "IVF Pioneer",
    badgeColor: "bg-pink-100 text-pink-700",
    realClinic: true,
    highlights: [
      "Turkey's first IVF centre — pioneers in fertility treatment",
      "7 language support: English, German, French, Spanish, Arabic, Italian",
      "Donor egg programme with high success rates",
      "Prime location in Beşiktaş — easy access from central Istanbul",
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
