import Image from "next/image";
import styles from "./InsuranceScroller.module.css";

const insuranceCompanies = [
  {
    name: "State Farm",
    logo: "/insurance/state-farm.svg",
  },
  {
    name: "Allstate",
    logo: "/insurance/allstate.svg",
  },
  {
    name: "USAA",
    logo: "/insurance/usaa.svg",
  },
  {
    name: "Liberty Mutual",
    logo: "/insurance/liberty-mutual.svg",
  },
  {
    name: "Progressive",
    logo: "/insurance/progressive.svg",
  },
  {
    name: "Farmers Insurance",
    logo: "/insurance/farmers.svg",
  },
  {
    name: "GEICO",
    logo: "/insurance/geico.svg",
  },
];

export default function InsuranceScroller() {
  return (
    <section className="border-y border-gray-200 bg-white py-5">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-bold tracking-[0.18em] text-gray-700 uppercase sm:text-base">
          We Work With Most Major Insurance Providers
        </p>
      </div>

      <div className={styles.scroller}>
        <div className={styles.track}>
          {[0, 1].map((groupIndex) => (
            <div
              key={`insurance-group-${groupIndex}`}
              className={styles.group}
              aria-hidden={groupIndex === 1}
            >
              {insuranceCompanies.map((company) => (
                <div
                  key={`${groupIndex}-${company.name}`}
                  className={styles.logoContainer}
                >
                  <Image
                    src={company.logo}
                    alt={groupIndex === 0 ? `${company.name} logo` : ""}
                    width={150}
                    height={55}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
