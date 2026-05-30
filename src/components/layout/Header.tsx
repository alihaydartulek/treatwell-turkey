"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CurrencySelector } from "@/components/ui/CurrencyProvider";

const treatments = [
  { label: "Hair Transplant", href: "/treatments/hair-transplant" },
  { label: "Dental (Veneers & Implants)", href: "/treatments/dental" },
  { label: "Bariatric Surgery", href: "/treatments/bariatric" },
  { label: "Cosmetic Surgery", href: "/treatments/cosmetic" },
  { label: "IVF & Fertility", href: "/treatments/ivf" },
  { label: "Eye Surgery (LASIK)", href: "/treatments/eye-surgery" },
  { label: "Orthopaedics", href: "/treatments/orthopaedics" },
];

const destinations = [
  { label: "Istanbul", href: "/destinations/istanbul" },
  { label: "Ankara", href: "/destinations/ankara" },
  { label: "Izmir", href: "/destinations/izmir" },
  { label: "Antalya", href: "/destinations/antalya" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDrop = (name: string) => {
    setActiveDrop((prev) => (prev === name ? null : name));
  };

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDrop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-slate-900/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">CT</span>
            </div>
            <span className="font-bold text-slate-900 text-lg">
              Cliniq<span className="text-teal-600">Turkey</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Treatments dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDrop("treatments")}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Treatments <ChevronDown size={14} />
              </button>
              {activeDrop === "treatments" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 z-50">
                  {treatments.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={() => setActiveDrop(null)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {t.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      href="/treatments"
                      onClick={() => setActiveDrop(null)}
                      className="block px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors"
                    >
                      View All Treatments →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Clinics */}
            <Link
              href="/clinics"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Clinics
            </Link>

            {/* Destinations dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDrop("destinations")}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Destinations <ChevronDown size={14} />
              </button>
              {activeDrop === "destinations" && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg py-2 z-50">
                  {destinations.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      onClick={() => setActiveDrop(null)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {d.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 mt-2 pt-2">
                    <Link
                      href="/destinations"
                      onClick={() => setActiveDrop(null)}
                      className="block px-4 py-2 text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors"
                    >
                      All Destinations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/cost-calculator"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Cost Calculator
            </Link>

            <Link
              href="/compare"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Compare
            </Link>

            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Guides
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <CurrencySelector />
            <ThemeToggle />
            <Link
              href="/clinics"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              Browse Clinics
            </Link>
            <Link
              href="/get-a-quote"
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors"
            >
              Find a Clinic
            </Link>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="container py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
              Treatments
            </p>
            {treatments.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {t.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 my-2" />
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
              Destinations
            </p>
            {destinations.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                {d.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 my-2" />
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
              Explore
            </p>
            <Link
              href="/clinics"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              All Clinics
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Turkey vs UK Prices
            </Link>
            <Link
              href="/cost-calculator"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Cost Calculator
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Patient Guides
            </Link>
            <div className="border-t border-slate-100 my-2" />
            <Link
              href="/get-a-quote"
              onClick={() => setMobileOpen(false)}
              className="mx-3 py-2.5 text-sm font-semibold text-center text-white bg-teal-600 hover:bg-teal-700 rounded-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}

      {/* Close dropdown on outside click */}
      {activeDrop && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDrop(null)}
        />
      )}
    </header>
  );
}
