import Link from "next/link";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Water Damage", href: "/water-damage" },
  { label: "Fire & Smoke Damage", href: "/fire-damage" },
  { label: "Mold Remediation", href: "/mold-remediation" },
  { label: "Sewer backup", href: "/sewer-backup" },
  { label: "Content Restoration", href: "/content-restoration" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
];

const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  siteConfig.email.address,
)}`;

const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.location.formatted,
)}&z=11&output=embed`;

const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.location.formatted,
)}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121211] text-white">
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
              href={siteConfig.phone.href}
              className="mt-6 inline-flex rounded-md bg-orange-500 px-5 py-3 text-sm font-bold tracking-wide uppercase transition hover:bg-orange-600"
            >
              Call Now
            </a>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frontier Restoration on Facebook"
                className="text-zinc-300 transition hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2V8.6h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.9h-2.33V22C18.34 21.25 22 17.09 22 12.07Z" />
                </svg>
              </a>

              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frontier Restoration on Instagram"
                className="text-zinc-300 transition hover:text-orange-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                >
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17.5 5.5A1.25 1.25 0 1 1 17.5 8a1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
            </div>
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
                  href={siteConfig.phone.href}
                  className="text-zinc-300 transition hover:text-orange-500"
                >
                  {siteConfig.phone.display}
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
                  {siteConfig.email.address}
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
                {siteConfig.location.streetAddress}
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
