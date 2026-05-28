import { Search, MessageSquare, Plane, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Compare",
    description:
      "Browse verified clinics, compare real prices, and read genuine patient reviews — all in one place.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Get Free Quotes",
    description:
      "Submit your details once and receive personalised quotes from up to 3 matched clinics within 24 hours.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Plane,
    step: "03",
    title: "Travel & Get Treated",
    description:
      "Your dedicated coordinator handles transfers, accommodation tips, and is available before and during your trip.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Aftercare Support",
    description:
      "We stay in touch post-treatment. Follow-up consultations and aftercare guidance included at no extra cost.",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            From first search to full recovery — we guide you every step of the
            way, completely free of charge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 z-0 -translate-x-4" />
              )}
              <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.color}`}
                  >
                    <s.icon size={22} />
                  </div>
                  <span className="text-3xl font-bold text-slate-100">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-slate-500 mb-4">
            Not ready to commit? Just browse — no sign-up required.
          </p>
          <a
            href="/how-it-works"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Learn more about our process →
          </a>
        </div>
      </div>
    </section>
  );
}
