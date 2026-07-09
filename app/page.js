import Image from "next/image";
export const metadata = {
  title: "Water Damage Restoration in Fairbanks, AK | Frontier Restoration LLC",
  description:
    "Frontier Restoration LLC provides water damage restoration, fire damage restoration, and mold remediation in Fairbanks, Alaska. Call (907) 987-2916 for emergency service.",
};

const emailAddress = "office@frontierrestorationllc.com"
const emailHref = 'mailto${emailAdress}';

const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";


function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <a href="/" className="flex items-center">
          <Image
            src="/frontier-logo.png"
            alt="Frontier Restoration LLC"
            width={220}
            height={120}
            className="h-20 w-auto md:h-28"
            priority
          />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={phoneHref}
            className="flex items-center gap-3 rounded-md bg-red-700 px-4 py-3 text-white"
          >
            <PhoneIcon />

            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide">
                Call Now
              </p>
              <p className="text-sm font-bold">{phoneNumber}</p>
            </div>
          </a>

          <a
            href={emailHref}
            className="flex items-center gap-3 rounded-md border border-slate-300 px-4 py-3 text-slate-900"
          >
            <EmailIcon />

            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide">
                Email Us
              </p>
              <p className="text-sm font-bold">{emailAddress}</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
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

function EmailIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
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

function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-red-400">
          Emergency Restoration Services in Fairbanks, AK
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Water, Fire, and Mold Damage Restoration When You Need Help Fast
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Frontier Restoration LLC helps Fairbanks homeowners recover from water
          damage, fire damage, and mold problems with fast emergency service.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="rounded-md bg-red-700 px-6 py-4 text-center font-bold text-white"
          >
            Call {phoneNumber}
          </a>

          <a
            href="#contact"
            className="rounded-md border border-white/30 px-6 py-4 text-center font-bold text-white"
          >
            Request Help
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />  
      </main>
    </>
  );
}