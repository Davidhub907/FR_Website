const PHONE_DISPLAY = "(907) 987-2916";
const PHONE_TEL = "tel:+19079872916";

/**
 * Click-to-call button used all over the site.
 * Props:
 *  - variant: "solid" (ember, default) or "outline" (for dark backgrounds)
 *  - label: optional text before the number, e.g. "Call Now"
 */
export default function CallButton({ variant = "solid", label = "Call Now" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-display text-lg font-bold uppercase tracking-wide transition-colors";
  const styles =
    variant === "outline"
      ? "border-2 border-white text-white hover:bg-white hover:text-ink"
      : "bg-ember text-white hover:bg-ember-dark";

  return (
    <a href={PHONE_TEL} className={`${base} ${styles}`}>
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
      </svg>
      {label} {PHONE_DISPLAY}
    </a>
  );
}
