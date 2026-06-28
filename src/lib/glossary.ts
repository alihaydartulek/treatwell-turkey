export type GlossaryTerm = {
  term: string;
  slug: string;
  category: string;
  definition: string;
};

// Plain-English definitions of terms patients meet when researching
// treatment in Turkey. Kept factual and neutral — no marketing claims.
export const glossaryTerms: GlossaryTerm[] = [
  // ─── Hair transplant ──────────────────────────────────────────────
  {
    term: "FUE (Follicular Unit Extraction)",
    slug: "fue",
    category: "Hair Transplant",
    definition:
      "A hair transplant technique where individual follicular units are extracted one by one from the donor area (usually the back of the head) and implanted into the thinning area. It leaves no linear scar and is the most widely used method today.",
  },
  {
    term: "DHI (Direct Hair Implantation)",
    slug: "dhi",
    category: "Hair Transplant",
    definition:
      "A variation of FUE that uses an implanter pen (Choi pen) to extract and place follicles in a single step. It allows implantation without shaving the recipient area and can improve graft survival, usually at a slightly higher cost.",
  },
  {
    term: "Sapphire FUE",
    slug: "sapphire-fue",
    category: "Hair Transplant",
    definition:
      "An FUE procedure that uses sapphire-tipped blades to open the recipient channels. The finer incisions can mean faster healing and less redness compared with traditional steel blades.",
  },
  {
    term: "Graft",
    slug: "graft",
    category: "Hair Transplant",
    definition:
      "A small piece of skin containing one or more hair follicles, moved from the donor area to the area being treated. Hair transplants are often priced and planned by the number of grafts.",
  },
  {
    term: "Donor area",
    slug: "donor-area",
    category: "Hair Transplant",
    definition:
      "The region — usually the back and sides of the scalp — from which grafts are taken. Hair here is genetically resistant to balding, which is why it keeps growing after transplant.",
  },
  {
    term: "Norwood Scale",
    slug: "norwood-scale",
    category: "Hair Transplant",
    definition:
      "A standard scale (stages 1 to 7) that classifies the degree of male pattern hair loss. Clinics use it to estimate how many grafts a patient is likely to need.",
  },
  {
    term: "Shock loss",
    slug: "shock-loss",
    category: "Hair Transplant",
    definition:
      "The temporary shedding of transplanted (and sometimes surrounding) hairs a few weeks after surgery. It is a normal part of the cycle — the follicles remain and regrow over the following months.",
  },
  {
    term: "PRP (Platelet-Rich Plasma)",
    slug: "prp",
    category: "Hair Transplant",
    definition:
      "A treatment where a small amount of the patient's own blood is processed to concentrate platelets, then injected into the scalp to support healing and hair growth. Often included alongside a transplant.",
  },

  // ─── Dental ───────────────────────────────────────────────────────
  {
    term: "Veneer",
    slug: "veneer",
    category: "Dental",
    definition:
      "A thin shell bonded to the front of a tooth to change its colour, shape or alignment. Veneers require minimal removal of natural enamel and suit healthy but discoloured or slightly uneven teeth.",
  },
  {
    term: "Crown",
    slug: "crown",
    category: "Dental",
    definition:
      "A cap that covers the whole tooth, requiring more of the natural tooth to be shaped down. Crowns suit teeth that are damaged, root-treated or heavily filled — but are over-treatment for healthy teeth wanted only for cosmetic reasons.",
  },
  {
    term: "E-max",
    slug: "emax",
    category: "Dental",
    definition:
      "A brand of lithium-disilicate ceramic used for veneers and crowns, valued for its natural, translucent appearance. Often chosen for front teeth.",
  },
  {
    term: "Zirconia",
    slug: "zirconia",
    category: "Dental",
    definition:
      "A very strong ceramic material used for crowns and bridges, especially on back teeth or where durability matters most.",
  },
  {
    term: "Dental implant",
    slug: "dental-implant",
    category: "Dental",
    definition:
      "A titanium post placed into the jawbone to replace a missing tooth root, onto which a crown is later fitted. Implants need the bone to heal around them, which can require more than one visit.",
  },
  {
    term: "Hollywood smile",
    slug: "hollywood-smile",
    category: "Dental",
    definition:
      "A marketing term for a full set of uniform, bright front teeth created with veneers or crowns — not a single procedure. The right approach depends on the health of your own teeth.",
  },

  // ─── Other treatments ─────────────────────────────────────────────
  {
    term: "Bariatric surgery",
    slug: "bariatric-surgery",
    category: "Bariatric",
    definition:
      "Weight-loss surgery that changes the stomach or digestive system to help reduce food intake. Common types include gastric sleeve, gastric bypass and gastric balloon.",
  },
  {
    term: "Gastric sleeve",
    slug: "gastric-sleeve",
    category: "Bariatric",
    definition:
      "A bariatric procedure that removes part of the stomach, leaving a smaller, sleeve-shaped stomach. It limits how much you can eat and is one of the most common weight-loss operations.",
  },
  {
    term: "Rhinoplasty",
    slug: "rhinoplasty",
    category: "Cosmetic Surgery",
    definition:
      "Surgery to reshape the nose for cosmetic or functional reasons. Final results settle over several months as swelling fully resolves.",
  },
  {
    term: "LASIK",
    slug: "lasik",
    category: "Eye Surgery",
    definition:
      "A laser eye procedure that reshapes the cornea to correct short-sightedness, long-sightedness or astigmatism, reducing or removing the need for glasses.",
  },
  {
    term: "IVF (In Vitro Fertilisation)",
    slug: "ivf",
    category: "IVF & Fertility",
    definition:
      "A fertility treatment where eggs are fertilised with sperm in a laboratory, and the resulting embryo is transferred to the uterus. Often combined with ICSI.",
  },
  {
    term: "ICSI",
    slug: "icsi",
    category: "IVF & Fertility",
    definition:
      "Intracytoplasmic sperm injection — a single sperm is injected directly into an egg during IVF. Used particularly where sperm quality or count is a factor.",
  },

  // ─── General / medical travel ─────────────────────────────────────
  {
    term: "Ministry of Health licence",
    slug: "ministry-of-health-licence",
    category: "Verification",
    definition:
      "The licence every legitimate Turkish clinic must hold to operate legally. It is the minimum standard CliniqTurkey requires before listing a clinic.",
  },
  {
    term: "JCI accreditation",
    slug: "jci-accreditation",
    category: "Verification",
    definition:
      "Joint Commission International accreditation — an internationally recognised standard for healthcare quality and patient safety, held by some larger hospitals.",
  },
  {
    term: "ISHRS",
    slug: "ishrs",
    category: "Verification",
    definition:
      "The International Society of Hair Restoration Surgery — a global professional body for hair transplant surgeons. Membership signals a surgeon's engagement with recognised standards.",
  },
  {
    term: "Medical tourism",
    slug: "medical-tourism",
    category: "General",
    definition:
      "Travelling to another country for medical or dental treatment, often to access lower prices or shorter waiting times while maintaining comparable quality at reputable clinics.",
  },
  {
    term: "All-inclusive package",
    slug: "all-inclusive-package",
    category: "General",
    definition:
      "A clinic offer that bundles the procedure with extras such as airport transfers, hotel nights, medication and aftercare into one price. Always confirm in writing exactly what is and is not included.",
  },
];

export function getGlossaryCategories(): string[] {
  return Array.from(new Set(glossaryTerms.map((t) => t.category)));
}
