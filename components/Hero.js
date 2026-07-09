const phoneNumber = "(907) 987-2916";
const phoneHref = "tel:+19079872916";

export default function Hero() {
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

