export const metadata = {
  title: "Water Damage Restoration in Fairbanks, AK | Frontier Restoration LLC",
  description:
    "Frontier Restoration LLC provides water damage restoration, fire damage restoration, and mold remediation in Fairbanks, Alaska. Call (907) 987-2916 for emergency service.",
};

const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";


function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-14">
        <div>
          <p className="text-lg font-bold text-slate-900">
            Frontier Restoration LLC
          </p>
          <p className="text-sm text-slate-600">Fairbanks, Alaska</p>
        </div>

        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#services">Services</a>
          <a href="#process">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={phoneHref}
          className="rounded-md bg-red-700 px-4 py-2 text-sm font-bold text-white"
        >
          Call Now
        </a>
      </div>
    </header>
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