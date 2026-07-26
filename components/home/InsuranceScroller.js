import Image from "next/image";
import styles from "./InsuranceScroller.module.css";

const insuranceCompanies = [
  {
    name: "State Farm",
    logo: "/insurance/State-Farm-logo.svg",
    height: 20,
  },
  {
    name: "USAA",
    logo: "/insurance/USAA-logo.svg",
  },
  {
    name: "Allstate",
    logo: "/insurance/AllState-logo.svg",
  },
  {
    name: "Liberty Mutual",
    logo: "/insurance/Liberty-Mutual-logo.svg",
  },
  {
    name: "Nation wide",
    logo: "/insurance/NationWide-logo.svg",
  },

  {
    name: "The Hartford",
    logo: "/insurance/The-Hartford-logo.svg",
  },
  {
    name: "Farmers Insurance",
    logo: "/insurance/Farmers-Insurance-logo.svg",
  },

  {
    name: "GEICO",
    logo: "/insurance/GEICO-logo.svg",
    height: 20,
  },

  {
    name: "Progressive",
    logo: "/insurance/Progressive-logo.svg",
    height: 20,
  },
];

export default function InsuranceScroller() {
  return (
    <section className="border-y border-gray-200 bg-[#faf9f7] py-5">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold tracking-[0.18em] text-gray-700 uppercase sm:text-xs">
          We work with your insurance
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
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
                      width={200}
                      height={80}
                      className={styles.logo}
                      style={{
                        height: `${company.height ?? 40}px`,
                        width: "auto",
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
