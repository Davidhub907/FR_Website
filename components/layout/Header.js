import Image from "next/image";
import { siteConfig } from "@/config/site";

// Keeping this data at the top makes the component easier to update later.
// If the client's phone number or email changes, you only edit it once here.

// This is the subject of the email being sent
const emailSubject = "Restoration Service Request";

// This is the body of the email being sent
const emailBody = `Hello Frontier Restoration,

I would like help with:

My name:
My phone number:
My property address:
`;

const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  siteConfig.email.address,
)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
  emailBody,
)}`;

export default function Header() {
  return (
    <header className="bg-white">
      {/* Desktop / tablet header */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-4 md:flex lg:py-4">
        {/* Full desktop logo */}
        <a
          href="/"
          className="flex shrink-0 cursor-pointer items-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:drop-shadow-md"
        >
          <Image
            src="/frontier-logos/frontier-logo.png"
            alt="Frontier Restoration LLC"
            width={220}
            height={120}
            className="h-20 w-auto md:h-24"
            priority
          />
        </a>

        {/* space between the buttons */}
        <div className="flex items-center gap-12">
          {/* Phone button */}
          <a
            href={siteConfig.phone.href}
            className="flex cursor-pointer items-center gap-3 rounded-md bg-orange-400 px-6 py-4 text-black transition transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-orange-500 hover:drop-shadow-md"
          >
            <DesktopPhoneIcon />

            <div className="hidden text-center lg:block">
              <p className="text-sm font-semibold tracking-wide uppercase">
                Call Now 24/7
              </p>
              <p className="text-base font-bold">{siteConfig.phone.display}</p>
            </div>
          </a>

          {/* Email button */}
          <a
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-3 rounded-md border border-slate-900 px-6 py-4 text-slate-900 transition transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-100 hover:drop-shadow-md"
          >
            <EmailIcon />

            <div className="hidden text-center lg:block">
              <p className="text-sm font-semibold tracking-wide uppercase">
                Gmail Us
              </p>
              <p className="text-sm font-bold">{siteConfig.email.address}</p>
            </div>
          </a>
        </div>
      </div>

      {/*Mobile header*/}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:hidden">
        {/* Mobile logo */}
        <a href="/" className="block flex shrink-0 items-center md:hidden">
          <Image
            src="/frontier-logos/frontier-logo-small.png"
            alt="Frontier Restoration LLC"
            width={40}
            height={40}
            className="h-20 w-auto md:h-28"
            priority
          />
        </a>

        <a
          href={siteConfig.phone.href}
          aria-label="Call Frontier Restoration 24/7 line"
          className="flex h-12 w-[200px] items-center justify-center gap-3 rounded-full bg-orange-400 font-bold text-black shadow-md"
        >
          <MobilePhoneIcon />

          <span>CALL NOW 24/7</span>
        </a>
      </div>
    </header>
  );
}

function DesktopPhoneIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.527-.739.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MobilePhoneIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="black"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.527-.739.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
      />
    </svg>
  );
}
