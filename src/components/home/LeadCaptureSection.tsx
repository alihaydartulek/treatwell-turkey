"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, CheckCircle, ExternalLink } from "lucide-react";
import { clinics } from "@/lib/clinics";
import { useCurrency } from "@/components/ui/CurrencyProvider";

const treatmentOptions = [
  "Hair Transplant",
  "Dental Veneers",
  "Dental Implants",
  "Bariatric Surgery",
  "Rhinoplasty",
  "IVF & Fertility",
  "Eye Surgery",
  "Cosmetic Surgery",
  "Other",
];

const treatmentToSlug: Record<string, string> = {
  "Hair Transplant": "hair-transplant",
  "Dental Veneers": "dental",
  "Dental Implants": "dental",
  "Bariatric Surgery": "bariatric",
  "Rhinoplasty": "cosmetic",
  "IVF & Fertility": "ivf",
  "Eye Surgery": "eye-surgery",
  "Cosmetic Surgery": "cosmetic",
};

type Step = 1 | 2;

type Props = {
  initialTreatment?: string;
  initialClinic?: string;
};

export default function LeadCaptureSection({ initialTreatment = "", initialClinic = "" }: Props) {
  const { format } = useCurrency();
  const [step, setStep] = useState<Step>(initialTreatment ? 2 : 1);
  const [selectedTreatment, setSelectedTreatment] = useState(initialTreatment);

  const matchedClinics = selectedTreatment
    ? clinics
        .filter((c) => {
          const slug = treatmentToSlug[selectedTreatment];
          return slug ? c.treatmentSlugs.includes(slug) : true;
        })
        .sort((a, b) => {
          if (a.slug === initialClinic) return -1;
          if (b.slug === initialClinic) return 1;
          return 0;
        })
        .slice(0, 3)
    : [];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
            Direct Clinic Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
            Find Your Clinic & Get in Touch
          </h2>
          <p className="text-blue-100">
            Select your treatment, see matched clinics, and contact them
            directly by phone or email — no middleman.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white/20 rounded-full h-1.5 mb-8">
          <div
            className="bg-white rounded-full h-1.5 transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 text-slate-800 shadow-2xl">

          {/* Step 1 — Treatment */}
          {step === 1 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Step 1 of 2
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What treatment are you looking for?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {treatmentOptions.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setSelectedTreatment(t);
                      setStep(2);
                    }}
                    className={`p-3 rounded-xl text-sm font-medium border-2 transition-all text-left ${
                      selectedTreatment === t
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-700 hover:border-blue-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Matched clinics */}
          {step === 2 && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Step 2 of 2
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Clinics matching &ldquo;{selectedTreatment}&rdquo;
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Browse their profiles, then contact directly.
              </p>

              <div className="flex flex-col gap-3 mb-5">
                {matchedClinics.length > 0 ? (
                  matchedClinics.map((clinic) => (
                    <div
                      key={clinic.slug}
                      className="border-2 border-slate-200 hover:border-blue-300 rounded-xl p-4 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="font-bold text-slate-900">
                            {clinic.name}
                          </span>
                          <span className="text-xs text-slate-400 ml-2">
                            {clinic.city}
                          </span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${clinic.badgeColor}`}>
                          {clinic.badge}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mb-3">
                        ⭐ {clinic.googleRating ?? clinic.rating} · {(clinic.googleReviewCount ?? clinic.reviewCount).toLocaleString()} Google reviews · From {format(clinic.priceFrom)}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={`tel:${clinic.phone}`}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          <Phone size={13} />
                          Call
                        </a>
                        <a
                          href={`mailto:${clinic.email}`}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          <Mail size={13} />
                          Email
                        </a>
                        <Link
                          href={`/clinics/${clinic.slug}`}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 text-xs font-semibold rounded-lg transition-colors"
                        >
                          <ExternalLink size={12} />
                          Profile
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-slate-400">
                    <p className="text-sm mb-3">No exact matches yet — browse all clinics</p>
                    <Link
                      href="/clinics"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      View all clinics →
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/treatments/${treatmentToSlug[selectedTreatment] ?? "hair-transplant"}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  See all {selectedTreatment} clinics <ArrowRight size={15} />
                </Link>
              </div>
              <button
                onClick={() => setStep(1)}
                className="mt-3 text-sm text-slate-400 hover:text-slate-600 w-full text-center"
              >
                ← Change treatment
              </button>
            </div>
          )}

        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-blue-200">
          {[
            "Direct clinic contact",
            "No middleman",
            "Free to use",
            "GDPR compliant",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <CheckCircle size={13} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
