export type FAQ = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  icon: string;
  faqs: FAQ[];
};

export const faqSections: FAQSection[] = [
  {
    title: "Safety & Quality",
    icon: "🛡️",
    faqs: [
      {
        question: "Is it safe to have surgery in Turkey?",
        answer:
          "Turkey has become one of the world's leading medical tourism destinations, attracting over 1.5 million international patients per year. Many Turkish hospitals hold JCI (Joint Commission International) accreditation — the same gold standard used by top hospitals in the US, UK and Germany. All clinics listed on CliniqTurkey hold valid Turkish Ministry of Health licences and have been independently verified. That said, safety depends heavily on choosing the right clinic. We only list clinics with strong, independently verifiable track records.",
      },
      {
        question: "How do I know if a clinic is legitimate?",
        answer:
          "Every clinic on CliniqTurkey has been verified before listing. We check their Turkish Ministry of Health licence, review third-party accreditations (JCI, ISO 9001), and cross-reference their Google review history. We display real Google ratings directly on each profile — these are publicly sourced and not curated by us. Before booking, we also recommend checking the clinic's own Google Maps listing independently, and asking them for proof of their Ministry of Health certificate.",
      },
      {
        question: "What is JCI accreditation and why does it matter?",
        answer:
          "JCI (Joint Commission International) is the international arm of the US Joint Commission — widely regarded as the most rigorous hospital accreditation body in the world. JCI-accredited hospitals in Turkey meet the same clinical standards as top hospitals in the UK, US and Germany. Not all clinics need JCI accreditation — for specialised procedures like hair transplants or dental work, the Turkish Ministry of Health licence and ISO 9001 certification are more relevant benchmarks. We indicate each clinic's accreditations clearly on their profile.",
      },
      {
        question: "What if something goes wrong after I return home?",
        answer:
          "This is one of the most important questions to ask before any medical trip. You should: (1) Ensure the clinic provides detailed written post-operative instructions and emergency contact details. (2) Ask your GP in advance if they are willing to manage any complications — most are legally required to treat you regardless. (3) Confirm the clinic's revision policy in writing before proceeding. (4) Consider purchasing medical travel insurance that specifically covers complications arising from elective procedures abroad — standard travel insurance often does not. We recommend discussing your specific procedure with your GP before travelling.",
      },
      {
        question: "Are the doctors in Turkey as qualified as in the UK or Germany?",
        answer:
          "Many Turkish surgeons are highly experienced by international standards. Turkey has several internationally ranked medical universities, and many surgeons have completed fellowships or specialist training in Europe or the US. That said, qualifications vary widely — we recommend reviewing the specific doctor's background on the clinic profile and asking for their CV or specialist certificates before booking. The doctor profiles on each clinic listing include specialty, experience and professional background where this information has been provided to us.",
      },
    ],
  },
  {
    title: "Planning Your Trip",
    icon: "✈️",
    faqs: [
      {
        question: "How far in advance should I plan my medical trip to Turkey?",
        answer:
          "For most elective procedures, we recommend planning at least 4–8 weeks in advance. This gives you time to: research and compare clinics, have an initial video consultation, arrange flights and accommodation, inform your GP, and sort travel insurance. For more complex procedures (major bariatric surgery, IVF, extensive dental work), planning 2–3 months ahead is wise. Some popular clinics have waiting lists, especially in peak season (May–October).",
      },
      {
        question: "How long should I plan to stay in Turkey?",
        answer:
          "This depends on your procedure. General guidelines: Hair transplant — 3–4 days. Dental veneers/implants — 5–10 days. Bariatric surgery — 7–10 days. Rhinoplasty — 7–10 days. IVF cycle — varies; many patients make 2 trips. Eye surgery (LASIK) — 3–4 days. Always confirm the recommended stay with your chosen clinic before booking flights, as individual recovery can vary.",
      },
      {
        question: "What documents do I need to travel for medical treatment?",
        answer:
          "For most EU and UK citizens, you need: a valid passport (or EU national ID for Schengen countries), travel insurance documents, any relevant medical records or test results the clinic has requested, and your clinic appointment confirmation. Turkey does not require a visa for UK, EU, US, or Australian citizens for stays under 90 days. If you have existing medical conditions, bring a summary letter from your GP. It is also sensible to carry the clinic's emergency contact number separately from your phone.",
      },
      {
        question: "Does the clinic arrange airport transfers and accommodation?",
        answer:
          "Many Turkish clinics, particularly the larger ones, offer airport transfer services and can recommend partner hotels near their facility. This varies by clinic — check each profile's highlights section or contact the clinic directly via WhatsApp to ask. Istanbul has a large concentration of clinics in the Şişli and Nişantaşı neighbourhoods, where many international patient-friendly hotels are located.",
      },
    ],
  },
  {
    title: "Costs & Payment",
    icon: "💶",
    faqs: [
      {
        question: "Why are medical treatments so much cheaper in Turkey?",
        answer:
          "The price difference is real, and it is not because of lower quality. The main factors are: lower labour costs (surgeon and nurse salaries in Turkey are significantly lower than in Western Europe), lower operational costs (clinic rent, utilities, administrative costs), the favourable exchange rate for Euro and Pound Sterling visitors, and competitive market pricing — Turkey has a large, competitive medical tourism sector that keeps prices keen. The equipment and consumables used are often identical to those used in Europe.",
      },
      {
        question: "What is typically included in the quoted price?",
        answer:
          "This varies by clinic and procedure, so always confirm in writing before booking. For hair transplants, quotes typically include: procedure, anaesthesia, post-op medication, and sometimes 1–2 nights accommodation. For dental work: the dental procedure itself; X-rays and scans may or may not be included. For bariatric surgery: the procedure, hospital stay (usually 3–5 nights), anaesthesia, and pre-op tests. What is usually NOT included: international flights, travel insurance, and visa fees. Always ask for an itemised quote.",
      },
      {
        question: "Is my European health insurance valid in Turkey?",
        answer:
          "The European Health Insurance Card (EHIC) or Global Health Insurance Card (GHIC) is generally NOT valid in Turkey, as Turkey is not an EEA country. Most private health insurance policies also exclude elective procedures abroad. You should arrange specific medical travel insurance that covers: the procedure itself, potential complications, medical repatriation, and trip cancellation.",
      },
      {
        question: "How do I pay the clinic?",
        answer:
          "Payment methods vary by clinic. Most accept credit/debit cards, bank transfer, and cash (Turkish Lira, Euro, or GBP). We recommend: paying by credit card where possible (provides consumer protection), never paying 100% upfront before you have arrived and confirmed the consultation, getting a written receipt for any payment, and confirming the total cost in writing before travelling. CliniqTurkey does not handle any payments — you pay the clinic directly.",
      },
      {
        question: "Will I be charged a deposit?",
        answer:
          "Many clinics ask for a small deposit (typically €100–300) to secure your booking date, especially for popular surgeons. This is normal practice. Make sure you receive a written confirmation of your booking and understand the cancellation/refund policy for this deposit before paying it. We recommend paying deposits by credit card rather than bank transfer for additional protection.",
      },
    ],
  },
  {
    title: "About CliniqTurkey",
    icon: "ℹ️",
    faqs: [
      {
        question: "How does CliniqTurkey work?",
        answer:
          "CliniqTurkey is an independent comparison and directory platform. We verify clinics, display their real Google ratings and pricing, and allow patients to contact them directly. We do not act as an intermediary or coordinator — there is no middleman between you and the clinic. You browse profiles, find a clinic you like, and contact them directly via WhatsApp or email from their profile page.",
      },
      {
        question: "Is CliniqTurkey free to use?",
        answer:
          "Yes, completely free for patients. We do not charge patients any fees, take any booking commission, or add any hidden costs to the clinic's prices. Clinics pay a listing fee to be featured on the platform. Our listings are not ranked by how much clinics pay us; rankings are based on verified patient ratings and accreditations.",
      },
      {
        question: "Do you take a commission when I book a clinic?",
        answer:
          "No. We have deliberately built a no-commission model. When you contact a clinic directly from our platform, we receive no payment related to your booking. Clinics pay a fixed monthly or annual listing fee — that fee is the same regardless of how many patients book through us.",
      },
      {
        question: "How are the Google ratings sourced?",
        answer:
          "The ratings displayed on CliniqTurkey are sourced from publicly available Google Maps data. They are not curated, filtered, or modified by us. We clearly label all ratings as 'Google ratings' and include the review count so you can verify them independently on Google Maps.",
      },
      {
        question: "Can I trust the clinic profiles on CliniqTurkey?",
        answer:
          "We verify the key facts before listing a clinic: Ministry of Health licence, accreditations, and that the clinic is an active, real business. Pricing ranges are provided by or agreed with the clinic and reflect their typical starting prices. However, final quotes always depend on individual assessment — always confirm pricing directly with the clinic. If you ever spot incorrect information on a profile, please contact us at cliniqturkey@gmail.com and we will investigate promptly.",
      },
    ],
  },
];
