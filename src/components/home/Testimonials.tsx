import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Maximilian T.",
    country: "Austria",
    treatment: "Hair Transplant",
    clinic: "Cosmedica Clinic",
    clinicSlug: "cosmedica-clinic-istanbul",
    rating: 5,
    text: "Since they arranged our transportation to the clinic and the hotel where we would stay, we also had the opportunity to visit Istanbul. I had both a hair transplant and a vacation during my leave.",
  },
  {
    name: "Abdulaziz A.",
    country: "United Kingdom",
    treatment: "Hollywood Smile",
    clinic: "Dentakay",
    clinicSlug: "dentakay-istanbul",
    rating: 5,
    text: "I'm really glad I ended up in Dentakay. They are very professional and the results are way better than I expected. I had a very shy and unhealthy smile, now I can't stop smiling.",
  },
  {
    name: "Sophie H.",
    country: "Sweden",
    treatment: "Porcelain Veneers",
    clinic: "Smile Istanbul",
    clinicSlug: "smile-istanbul",
    rating: 5,
    text: "I had 10 porcelain veneers done at Smile Istanbul and couldn't be happier. The team was incredibly professional and English communication was perfect throughout.",
  },
  {
    name: "George M.",
    country: "United States",
    treatment: "IVF",
    clinic: "Bahçeci Fertility",
    clinicSlug: "bahceci-fertility-istanbul",
    rating: 5,
    text: "Our path to parenthood had been a rollercoaster after several failed IVF attempts in the United States. Thanks to Dr. Güvenç and his team, we are now the proud parents of a beautiful, healthy baby.",
  },
  {
    name: "Jonathan H.",
    country: "Australia",
    treatment: "Hair Transplant",
    clinic: "Vera Clinic",
    clinicSlug: "vera-clinic-istanbul",
    rating: 5,
    text: "I took a 20+ hour flight from Australia to Istanbul with high expectations and Vera Clinic delivered. Vera clinic was amazing and I totally recommend.",
  },
  {
    name: "Donna B.",
    country: "Canada",
    treatment: "Surgery",
    clinic: "Memorial Hospital",
    clinicSlug: "memorial-hospital-istanbul",
    rating: 5,
    text: "My arrival at Istanbul airport was smooth and efficient. I'm very happy with the service and felt very looked after. My outcome is excellent and I'm so glad I had the best doctor and care.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            Real Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            What Patients Say
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Verified reviews from patients who contacted clinics through our
            platform. We never edit or filter feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-3 p-5 border border-slate-200 rounded-2xl hover:border-teal-200 hover:shadow-sm transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.country} · {t.treatment}
                  </div>
                </div>
                <Link
                  href={`/clinics/${t.clinicSlug}`}
                  className="text-xs text-teal-600 hover:underline shrink-0"
                >
                  {t.clinic}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/clinics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Read more reviews — Browse Clinics <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
