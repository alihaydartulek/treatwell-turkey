"use client";

import { trackClinicCall, trackClinicEmail } from "@/lib/analytics";

type Props = {
  /** "call" renders a tel: link, "email" renders a mailto: link. */
  kind: "call" | "email";
  /** Raw phone number or email address. */
  value: string;
  /** Clinic slug — used as the analytics dimension (no PII). */
  clinicSlug: string;
  /** Where on the page the click happened (e.g. "profile-header"). */
  source: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Client wrapper around a tel:/mailto: link that fires a GA4 event on click.
 * Lets server-rendered clinic pages keep tracking contact intent without
 * becoming client components themselves.
 */
export default function TrackedContactLink({
  kind,
  value,
  clinicSlug,
  source,
  className,
  children,
}: Props) {
  const href = kind === "call" ? `tel:${value}` : `mailto:${value}`;

  const handleClick = () => {
    if (kind === "call") trackClinicCall(clinicSlug, source);
    else trackClinicEmail(clinicSlug, source);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
