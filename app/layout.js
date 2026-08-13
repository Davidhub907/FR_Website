import Header from "@/components/layout/Header";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata = {
  title: {
    default: "Frontier Restoration | Fairbanks, Alaska",
    template: "%s | Frontier Restoration",
  },

  description:
    "Professional water, fire, mold, sewer, and content restoration services in Fairbanks, Alaska.",

  metadataBase: new URL("https://frontierrestorationllc.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <NavigationBar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
