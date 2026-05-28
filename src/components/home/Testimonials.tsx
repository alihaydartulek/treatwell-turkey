import Link from "next/link";
import { Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Real Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            We only publish reviews from verified patients who booked through
            our platform. We never edit or filter feedback.
          </p>
        </div>

        {/* Empty state — honest placeholder */}
        <div className="max-w-2xl mx-auto text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
          <MessageCircle size={40} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Reviews Coming Soon
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
            We are currently collecting verified reviews from our first
            patients. Check back soon — or be one of the first to share your
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              Verified patients only
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              Never edited or filtered
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              Negative reviews published too
            </span>
          </div>
        </div>

        {/* Google Reviews teaser */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
          <span>Our partner clinics are also independently rated on</span>
          <Link
            href="/clinics"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews — See clinic ratings
          </Link>
        </div>
      </div>
    </section>
  );
}
