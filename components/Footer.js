import Link from "next/link";

const serviceLinks = [
  { label: "Water Damage", href: "/water-damage" },
  { label: "Fire & Smoke Damage", href: "/fire-damage" },
  { label: "Mold Remediation", href: "/mold-remediation" },
  { label: "Storm Damage", href: "/storm-damage" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";

const emailAddress = "office@frontierrestorationllc.com";
const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  emailAddress,
)}`;

const businessAddress = "Frontier Restoration LLC";

const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  businessAddress,
)}&output=embed`;

const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  businessAddress,
)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-orange-500" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Business information */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Frontier Restoration
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-300">
              Professional restoration services for homes and businesses in
              Fairbanks and the surrounding area.
            </p>

            <a
              href={phoneHref}
              className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-bold tracking-wide uppercase transition hover:bg-orange-600"
            >
              Call Now
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase">
              Services
            </h3>

            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href={phoneHref}
                  className="text-zinc-300 transition hover:text-orange-500"
                >
                  {phoneNumber}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href={emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-zinc-300 transition hover:text-orange-500"
                >
                  {emailAddress}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Service Area</p>
                <p className="text-zinc-300">
                  Fairbanks and surrounding communities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location section */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            {/* Address */}
            <div>
              <h3 className="text-sm font-bold tracking-wider text-orange-500 uppercase">
                Our Location
              </h3>

              <p className="mt-4 text-lg font-semibold text-white">
                Frontier Restoration LLC
              </p>

              <address className="mt-2 leading-7 text-zinc-300 not-italic">
                {businessAddress}
              </address>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-orange-600"
              >
                Get Directions
              </a>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                src={googleMapsEmbedUrl}
                title="Frontier Restoration LLC location"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-zinc-400 sm:text-left">
            © {currentYear} Frontier Restoration LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
