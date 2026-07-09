import Header from "@/components/Header";
import Hero from "@/components/Hero"

export const metadata = {
  title: "Water Damage Restoration in Fairbanks, AK | Frontier Restoration LLC",
  description:
    "Frontier Restoration LLC provides water damage restoration, fire damage restoration, and mold remediation in Fairbanks, Alaska. Call (907) 987-2916 for emergency service.",
};

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