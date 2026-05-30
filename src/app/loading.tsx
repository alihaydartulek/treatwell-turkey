export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
