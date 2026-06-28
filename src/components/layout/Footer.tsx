import Link from "next/link";
import { Mail, MapPin, Shield, Star, CheckCircle, Users } from "lucide-react";

const treatmentLinks = [
  { label: "Hair Transplant", href: "/treatments/hair-transplant" },
  { label: "Dental Veneers", href: "/treatments/dental" },
  { label: "Dental Implants", href: "/treatments/dental" },
  { label: "Bariatric Surgery", href: "/treatments/bariatric" },
  { label: "Rhinoplasty", href: "/treatments/cosmetic" },
  { label: "IVF & Fertility", href: "/treatments/ivf" },
  { label: "Eye Surgery", href: "/treatments/eye-surgery" },
];

const destinationLinks = [
  { label: "All Destinations", href: "/destinations" },
  { label: "Istanbul", href: "/destinations/istanbul" },
  { label: "Ankara", href: "/destinations/ankara" },
  { label: "Izmir", href: "/destinations/izmir" },
  { label: "Antalya", href: "/destinations/antalya" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "How We Verify Clinics", href: "/how-we-verify" },
  { label: "Clinic Question Checklist", href: "/clinic-checklist" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
  { label: "For Clinics", href: "/for-clinics" },
  { label: "Patient Guides", href: "/blog" },
  { label: "Cost Calculator", href: "/cost-calculator" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Trust bar */}
      <div className="border-b border-slate-800">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle, text: "Free for Patients" },
              { icon: Shield, text: "GDPR Compliant Platform" },
              { icon: Star, text: "All Clinics Verified" },
              { icon: Users, text: "4 Cities Covered" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} className="text-green-400 shrink-0" />
                <span className="text-sm text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">CT</span>
              </div>
              <span className="font-bold text-white text-lg">
                Cliniq<span className="text-teal-400">Turkey</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-xs">
              We connect international patients with verified Turkish clinics.
              Independent, transparent, and always on your side.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:cliniqturkey@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={14} />
                cliniqturkey@gmail.com
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin size={14} />
                Istanbul, Turkey
              </span>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Treatments
            </h3>
            <ul className="flex flex-col gap-2">
              {treatmentLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Destinations
            </h3>
            <ul className="flex flex-col gap-2">
              {destinationLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-6">
              Compare
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/compare"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Turkey vs UK Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/clinics/compare"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Side-by-Side Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/cost-calculator"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Cost Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CliniqTurkey Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-600">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
