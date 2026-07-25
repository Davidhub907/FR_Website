import Header from "@/components/layout/Header";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import Testimonials from "@/components/layout/Testimonials";

import "./globals.css";

import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontier Restoration",
  description:
    "Professional water, fire, mold, sewer, and content restoration services in Fairbanks, Alaska.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${sourceSans.className} flex min-h-full flex-col`}>
        <Header />
        <NavigationBar />

        <main className="flex-1">{children}</main>
        <Testimonials />
        <WhyChooseUs />
        <Footer />
      </body>
    </html>
  );
}
