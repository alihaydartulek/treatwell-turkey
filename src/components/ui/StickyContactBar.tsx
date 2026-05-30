"use client";

import { Phone, Mail } from "lucide-react";
import { trackClinicCall, trackClinicEmail } from "@/lib/analytics";

type Props = {
  clinicSlug: string;
  phone: string;
  email: string;
};

/**
 * Fixed bottom Call/Email bar shown only on mobile (hidden on md+).
 * On phones the sidebar CTA sits far down the page, so this keeps the
 * primary contact actions in reach while scrolling a clinic profile.
 */
export default function StickyContactBar({ clinicSlug, phone, email }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 flex gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${phone}`}
        onClick={() => trackClinicCall(clinicSlug, "mobile-sticky")}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-green-600 active:bg-green-700 text-white font-semibold rounded-xl text-sm"
      >
        <Phone size={16} />
        Call Clinic
      </a>
      <a
        href={`mailto:${email}`}
        onClick={() => trackClinicEmail(clinicSlug, "mobile-sticky")}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-xl text-sm"
      >
        <Mail size={16} />
        Email
      </a>
    </div>
  );
}
