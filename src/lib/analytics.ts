// Lightweight, privacy-friendly analytics helper.
//
// We use GA4 (already loaded via @next/third-parties in layout.tsx).
// These events capture *aggregate demand signals* — which treatments and
// clinics get interest, and whether visitors click through to contact a
// clinic. We deliberately do NOT send any personal data (no names, emails,
// phone numbers, free-text). Only treatment/clinic slugs and event types.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      targetOrName: string,
      params?: GtagParams,
    ) => void;
  }
}

/**
 * Send a custom event to GA4. Safe to call on the server or before gtag
 * loads — it simply no-ops when gtag isn't available.
 */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

// ── Domain-specific helpers ──────────────────────────────────────────────

/** Visitor clicked a "Call" link for a clinic. */
export function trackClinicCall(clinicSlug: string, source: string) {
  trackEvent("clinic_call_click", { clinic: clinicSlug, source });
}

/** Visitor clicked an "Email" link for a clinic. */
export function trackClinicEmail(clinicSlug: string, source: string) {
  trackEvent("clinic_email_click", { clinic: clinicSlug, source });
}

/** Visitor ran the treatment/city search (e.g. hero search box). */
export function trackTreatmentSearch(treatmentSlug: string, city?: string) {
  trackEvent("treatment_search", {
    treatment: treatmentSlug,
    city: city || "any",
  });
}

/** Visitor selected a treatment in the lead-capture flow. */
export function trackTreatmentSelect(treatment: string) {
  trackEvent("treatment_select", { treatment });
}
