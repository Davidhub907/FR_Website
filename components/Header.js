import Image from "next/image"

const emailAddress = "office@frontierrestorationllc.com"
const emailHref = 'mailto${emailAdress}';

const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";


export default function Header() {
  return (

    <header className="bg-white">
      {/* Desktop / tablet header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-25 py-6 md:flex lg:py-8 hidden md:block">
        {/* Full desktop logo */}
        <a href="/" className="flex items-center shrink-0 hidden md:block">
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
            className="flex items-center gap-3 rounded-md bg-orange-400 px-6 py-4 text-black"
          >
            <DesktopPhoneIcon />

            <div className="hidden text-center lg:block">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Call Now 24/7
              </p>
              <p className="text-m font-bold">{phoneNumber}</p>
            </div>
          </a>

          <a
            href={emailHref}
            className="flex items-center gap-3 rounded-md border border-slate-900 px-6 py-4 text-slate-900"
          >
            <EmailIcon />

            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Email Us
              </p>
              <p className="text-sm font-bold">{emailAddress}</p>
            </div>
          </a>
        </div>
      </div>

      {/*Mobile header*/}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:hidden">
        {/* Mobile logo */}
        <a href="/" className="flex items-center shrink-0 block md:hidden">
          <Image
            src="/frontier-logo-small.png"
            alt="Frontier Restoration LLC"
            width={40}
            height={40}
            className="h-20 w-auto md:h-28"
            priority
          />
        </a>

        <a
          href={phoneHref}
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


